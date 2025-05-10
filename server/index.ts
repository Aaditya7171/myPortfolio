import express, { type Request, Response, NextFunction } from "express";
import http from "http";
import routes from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from attached_assets with URL encoding
app.use('/attached_assets', (req, res, next) => {
  const decodedPath = decodeURIComponent(req.url);
  const filePath = path.join(__dirname, '../attached_assets', decodedPath);

  if (fs.existsSync(filePath)) {
    // Set appropriate Content-Type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'image/jpeg'; // Default content type

    if (ext === '.ico') {
      contentType = 'image/x-icon';
    } else if (ext === '.png') {
      contentType = 'image/png';
    } else if (ext === '.pdf') {
      contentType = 'application/pdf';
    }

    res.sendFile(filePath, {
      headers: {
        'Content-Type': contentType
      }
    });
  } else {
    res.status(404).send('File not found');
  }
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(this, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    log(
      `${req.method} ${path} ${res.statusCode} - ${duration}ms`,
      capturedJsonResponse ? JSON.stringify(capturedJsonResponse) : undefined
    );
  });

  next();
});

app.use(routes);

const server = http.createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  log(`[express] serving on port ${port}`);
});
