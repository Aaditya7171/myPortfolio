// server/index.ts
import express2 from "express";
import http from "http";

// server/routes.ts
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
var router = Router();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
router.get("/download-resume", (req, res) => {
  const driveLink = "https://drive.google.com/file/d/1kI0vXaEYfSU2a2sGxcYUek3DkV1R5k21/view?usp=sharing";
  res.redirect(driveLink);
});
var routes_default = router;

// server/vite.ts
import express from "express";
import path3, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath3 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path2, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath as fileURLToPath2 } from "url";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname(__filename2);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(__dirname2, "client", "src"),
      "@shared": path2.resolve(__dirname2, "shared")
    }
  },
  root: path2.resolve(__dirname2, "client"),
  build: {
    outDir: path2.resolve(__dirname2, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename3 = fileURLToPath3(import.meta.url);
var __dirname3 = dirname2(__filename3);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// server/index.ts
import path4 from "path";
import { fileURLToPath as fileURLToPath4 } from "url";
import fs from "fs";
var __filename4 = fileURLToPath4(import.meta.url);
var __dirname4 = path4.dirname(__filename4);
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/attached_assets", (req, res, next) => {
  const decodedPath = decodeURIComponent(req.url);
  const filePath = path4.join(__dirname4, "../attached_assets", decodedPath);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath, {
      headers: {
        "Content-Type": "image/jpeg"
      }
    });
  } else {
    res.status(404).send("File not found");
  }
});
app.use((req, res, next) => {
  const start = Date.now();
  const path5 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(this, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    log(
      `${req.method} ${path5} ${res.statusCode} - ${duration}ms`,
      capturedJsonResponse ? JSON.stringify(capturedJsonResponse) : void 0
    );
  });
  next();
});
app.use(routes_default);
var server = http.createServer(app);
var port = process.env.PORT || 5e3;
server.listen(port, () => {
  log(`[express] serving on port ${port}`);
});
