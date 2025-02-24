import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = Router();

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resume download route
router.get('/download-resume', (req, res) => {
    const driveLink = 'https://drive.google.com/file/d/1kI0vXaEYfSU2a2sGxcYUek3DkV1R5k21/view?usp=sharing';
    res.redirect(driveLink);
});

export default router;
