import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

// Since this is a demo, we will serve the static files from dist 
// (which Vite creates when `npm run build` runs on Render)
app.use(express.static(path.join(__dirname, '../dist')));

// API Mock for Health
app.get('/api/health', (req, res) => {
    res.json({ ok: true, status: 'Running on Render flawlessly' });
});

// Fallback for React Router (if needed)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
});
