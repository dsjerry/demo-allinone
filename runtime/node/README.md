# WebSocket 客户端 - Node.js 版本

这是一个用于连接到危险识别 WebSocket 服务的 Node.js 客户端。

## 安装

首先安装依赖：

```bash
npm install
```

## 运行

执行以下命令启动客户端：

```bash
npm start
```

或直接使用 Node.js：

```bash
node websocket.js
```

## 功能

- ✓ WebSocket 连接管理
- 📤 发送识别请求
- 📡 调用 HTTP API
- 📨 接收服务器响应
- 🔄 自动重连机制（最多 5000 次）

## 配置

编辑 `websocket.js` 文件修改以下配置：

- `WS_URL`: WebSocket 服务器地址
- `maxReconnectAttempts`: 最大重连次数
- `reconnectDelay`: 重连延迟（毫秒）
- `apiUrl`: HTTP API 地址

## 依赖

- `ws`: WebSocket 客户端库

## 注意

- 需要 Node.js 18+ 版本（支持原生 fetch API）
- 如果使用较低版本的 Node.js，需要安装 `node-fetch` 库
