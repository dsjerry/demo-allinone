import net from "node:net";

// 创建 TCP 服务器
const server = net.createServer((socket) => {
  console.log("客户端连接");

  socket.on("data", (data) => {
    console.log("收到数据:", data.toString());
    socket.write("收到数据:" + data.toString());
  });

  socket.on("close", () => {
    console.log("客户端断开连接");
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

server.listen(8080, () => {
  console.log("TCP 服务器已启动: localhost:8080");
});

// 创建 TCP 客户端
const client = net.createConnection({ port: 8080, host: "127.0.0.1" }, () => {
  console.log("客户端连接");
  client.write("Hello Server!");
});

client.on("data", (data) => {
  console.log("收到数据:", data.toString());
  client.end();
});

client.on("close", () => {
  console.log("客户端断开连接");
});

client.on("error", (err) => {
  console.error("Client error:", err);
});
