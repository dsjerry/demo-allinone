const server = Bun.serve({
  // 主请求处理函数
  fetch(req, server) {
    // 尝试将HTTP请求升级为WebSocket连接
    const success = server.upgrade(req);
    if (success) {
      // 升级成功：Bun 自动返回 101 Switching Protocols 状态码
      return undefined;
    }
    // 如果升级失败，返回普通的HTTP响应
    return new Response("Hello World");
  },
  // WebSocket配置（如果升级，需要加上配置，否则类型错误）
  websocket: {
    // 连接打开时的回调
    open(ws) {
      console.log("Client connected");
    },
    // 收到消息时的回调
    message(ws, message) {
      console.log("Received message:", message);
      ws.send("Hello from server!");
    },
    // 连接关闭时的回调
    close(ws) {
      console.log("Client disconnected");
    },
    // 缓冲区 drain 时的回调
    drain(ws) {
      console.log("Buffer drained");
    },
  },
});

console.log(`WebSocket server running at ws://${server.hostname}:${server.port}`);
