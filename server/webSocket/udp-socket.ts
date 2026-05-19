import dgram from "node:dgram";

// 创建 UDP 服务器
const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(`收到数据: ${msg} 来自 ${rinfo.address}:${rinfo.port}`);
  server.send("收到数据:" + msg.toString(), rinfo.port, rinfo.address);
});

server.on("error", (err) => {
  console.error("服务器错误:", err);
  server.close();
});

server.bind(8080, () => {
  console.log("UDP 服务器已启动: http://localhost:8080");
});

// 创建 UDP 客户端
const client = dgram.createSocket("udp4");
const msg = Buffer.from("Hello Server!");

client.send(msg, 8080, "127.0.0.1", (err) => {
  if (err) {
    console.error("发送数据失败:", err);
  } else {
    console.log("数据发送成功");
  }
});

client.on("message", (msg, rinfo) => {
  console.log(`收到数据: ${msg} 来自 ${rinfo.address}:${rinfo.port}`);
});

client.on("error", (err) => {
  console.error("客户端错误:", err);
  client.close();
});
