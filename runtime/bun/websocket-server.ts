interface ClientMessage {
  imgUrl: string;
  msgType: number;
  deptId: string;
  senderId: string;
  sendTime: number;
  askingQuestions: string;
}

interface ServerResponse {
  code: number;
  message: string;
  data?: unknown;
  timestamp: number;
}

interface ConnectedClient {
  ws: any;
  userId: string;
  connectedAt: number;
}

const clients = new Map<string, ConnectedClient>();

function broadcastMessage(message: ServerResponse, excludeUserId?: string) {
  const payload = JSON.stringify(message);
  clients.forEach((client) => {
    if (!excludeUserId || client.userId !== excludeUserId) {
      client.ws.send(payload);
    }
  });
}

function sendResponse(ws: any, code: number, message: string, data?: unknown) {
  const response: ServerResponse = {
    code,
    message,
    data,
    timestamp: Date.now(),
  };
  ws.send(JSON.stringify(response));
}

function handleClientMessage(userId: string, data: string) {
  try {
    const message: ClientMessage = JSON.parse(data);
    console.log(`📨 收到来自 ${userId} 的消息:`, message);

    if (message.msgType === 2) {
      console.log(`🎯 处理图像识别请求: ${message.imgUrl}`);

      const client = clients.get(userId);
      if (client) {
        sendResponse(client.ws, 200, "识别请求已接收", {
          recognitionId: `rec_${Date.now()}`,
          status: "processing",
          imageUrl: message.imgUrl,
        });

        setTimeout(() => {
          const recognitionResult = {
            recognitionId: `rec_${Date.now()}`,
            status: "completed",
            result: {
              hazards: [
                {
                  type: "fire_hazard",
                  confidence: 0.95,
                  location: "top-left",
                  description: "检测到火灾隐患",
                },
              ],
              processTime: 2500,
            },
          };

          sendResponse(client.ws, 200, "识别完成", recognitionResult);

          broadcastMessage(
            {
              code: 200,
              message: "新的识别结果",
              data: {
                userId,
                result: recognitionResult,
              },
              timestamp: Date.now(),
            },
            userId
          );
        }, 2500);
      }
    }
  } catch (error) {
    console.error("❌ 处理消息错误:", error);
  }
}

const server = Bun.serve({
  port: 8080,
  fetch(req: any, server: any) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname === "/ws/dcb") {
      const userId = url.searchParams.get("userId");

      if (!userId) {
        return new Response("Missing userId parameter", { status: 400 });
      }

      const upgraded = server.upgrade(req, { data: { userId } });

      if (!upgraded) {
        return new Response("WebSocket upgrade failed", { status: 400 });
      }

      return undefined;
    }

    return new Response("Not Found", { status: 404 });
  },

  websocket: {
    open(ws: any) {
      const userId = ws.data.userId;
      clients.set(userId, {
        ws,
        userId,
        connectedAt: Date.now(),
      });

      console.log(`✓ 用户 ${userId} 已连接 (总连接数: ${clients.size})`);

      sendResponse(ws, 200, "连接成功", {
        userId,
        connectedAt: Date.now(),
        totalClients: clients.size,
      });

      broadcastMessage(
        {
          code: 200,
          message: "用户上线",
          data: {
            userId,
            totalClients: clients.size,
          },
          timestamp: Date.now(),
        },
        userId
      );
    },

    message(ws: any, data: any) {
      const userId = ws.data.userId;
      const message = typeof data === "string" ? data : new TextDecoder().decode(data);
      handleClientMessage(userId, message);
    },

    close(ws: any) {
      const userId = ws.data.userId;
      clients.delete(userId);

      console.log(`⚠️  用户 ${userId} 已断开连接 (总连接数: ${clients.size})`);

      broadcastMessage({
        code: 200,
        message: "用户离线",
        data: {
          userId,
          totalClients: clients.size,
        },
        timestamp: Date.now(),
      });
    },
  },
});

console.log(`🚀 WebSocket 服务器运行在 ws://localhost:8080/ws/dcb`);
console.log(`📊 支持的端点:`);
console.log(`   - ws://localhost:8080/ws/dcb?userId=<userId>`);
