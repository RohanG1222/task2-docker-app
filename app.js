const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = os.hostname();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🐳 Docker Deployment - DevOps Task 2</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .header h1 {
          font-size: 2.5rem;
          background: linear-gradient(90deg, #00d9ff, #00ff88);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        
        .header .emoji {
          font-size: 4rem;
          margin-bottom: 15px;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .info-card {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        
        .info-card h3 {
          color: #00d9ff;
          margin-bottom: 15px;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .info-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 8px;
        }
        
        .info-item label {
          display: block;
          color: #888;
          font-size: 0.75rem;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        
        .info-item span {
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        .badge {
          display: inline-block;
          background: linear-gradient(90deg, #00d9ff, #00ff88);
          color: #1a1a2e;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          margin-top: 10px;
        }
        
        .footer {
          text-align: center;
          margin-top: 25px;
          color: #666;
          font-size: 0.85rem;
        }
        
        .footer a {
          color: #00d9ff;
          text-decoration: none;
        }
        
        .tech-stack {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
          flex-wrap: wrap;
        }
        
        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #aaa;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="emoji">🚀</div>
          <h1>Docker Deployment Successful!</h1>
          <span class="badge">✅ Running in Container</span>
        </div>
        
        <div class="info-card">
          <h3>👤 Developer Info</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Name</label>
              <span>Rohan Ghorpade</span>
            </div>
            <div class="info-item">
              <label>Task</label>
              <span>Cloud & DevOps #2</span>
            </div>
          </div>
        </div>
        
        <div class="info-card">
          <h3>🖥️ System Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Hostname</label>
              <span>${HOSTNAME}</span>
            </div>
            <div class="info-item">
              <label>Platform</label>
              <span>${os.platform()}</span>
            </div>
            <div class="info-item">
              <label>Architecture</label>
              <span>${os.arch()}</span>
            </div>
            <div class="info-item">
              <label>CPU Cores</label>
              <span>${os.cpus().length}</span>
            </div>
            <div class="info-item">
              <label>Total Memory</label>
              <span>${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB</span>
            </div>
            <div class="info-item">
              <label>Free Memory</label>
              <span>${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB</span>
            </div>
            <div class="info-item">
              <label>Node Version</label>
              <span>${process.version}</span>
            </div>
            <div class="info-item">
              <label>Container ID</label>
              <span>${HOSTNAME.substring(0, 12)}</span>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>🐳 Docker + Node.js + Express</p>
          <div class="tech-stack">
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">DevOps</span>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get("/info", (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    cpuCores: os.cpus().length,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    nodeVersion: process.version,
    pid: process.pid
  });
});

app.listen(PORT, () => {
  console.log(`🎯 Server running on port ${PORT}`);
  console.log(`🐳 Container hostname: ${HOSTNAME}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});

