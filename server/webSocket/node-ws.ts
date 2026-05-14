import http from "node:http";
import { WebSocketServer } from "ws";

// 这个服务器可以处理普通的 HTTP 请求，比如提供静态文件或 API
const server = http.createServer((req, res) => {
  // 简单的 HTTP 响应
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HTTP server is running. WebSocket server is attached.");
  } else {
    res.writeHead(404);
    res.end();
  }
});

// 创建 WebSocket 服务器，并告诉它使用我们刚才创建的 HTTP 服务器
const wss = new WebSocketServer({ server });

// 'connection' 事件在客户端成功完成 WebSocket 握手时触发
wss.on("connection", (ws) => {
  console.log("客户端连接");

  // 监听来自客户端的消息
  ws.on("message", (message) => {
    // message 是 Buffer 类型，将其转换为字符串
    console.log("收到消息: %s", message);
    ws.send(`服务器收到你的消息: ${message}`);
  });

  ws.on("close", () => {
    console.log("客户端断开连接");
  });

  ws.send("Hello world!");
});

// 让 HTTP 服务器监听 8080 端口
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`HTTP 和 WebSocket 服务器已启动: http://localhost:${PORT}`);
});
