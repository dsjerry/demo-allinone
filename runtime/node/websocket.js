const WebSocket = require("ws")

const WS_URL =
  "ws://192.168.0.13:7072/ws/dcb?deviceId=device_001&sign=04cdb86d4b55fc2884aca9f6531903dfab82b1b7617b4b0ef3ff4c8b6a9c15708c511b1cc884a43b280194b4756a0611371ec781787dab3ce67628efd0dfa640&Authorization=3490834ef1ebc113c7024213d7da677e211c949819586a977ebb631c8d14e5823c4ceb3f3e58adaa838e6be94932be5eb7453ce856151ea8c8e019eb6d5997ed5846e4662e2ef7901d35dd4fb9a0e724d3233d31261fe05d39478e0de5a7b8c8fdfe6ba3c314a82a3b8fba91314bb85c04df8232a84a7c14fd5291ec96f3a4c859e9282cde0874f62fb441eb11bb69cce3f7668e821731ab1f3e23216b6d5e1aa277bf828ed1b3a885db74caa5eba1193fcb139a11245bc4918ff1e07f1cba85d5bae1d581a07690e3cd2c502c0afa77bc4ab5034e865a672122fc66f9c6770828102d9bf4d6a8b6649cf51a0b91976937e1d65b6ac79e33292e50dfa596d430"

class WebSocketClient {
  constructor() {
    this.ws = null
    this.reconnectAttempts = 0
    this.maxReconnectAttempts = 5000
    this.reconnectDelay = 3000
  }

  connect() {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(WS_URL)

        this.ws.onopen = () => {
          console.log("✓ WebSocket 已连接")
          this.reconnectAttempts = 0
          resolve()
        }

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data)
            console.log("📨 收到消息:", message)
            this.handleMessage(message)
          } catch (error) {
            console.log("📨 收到数据:", event.data)
          }
        }

        this.ws.onerror = (error) => {
          console.error("❌ WebSocket 错误:", error)
          reject(error)
        }

        this.ws.onclose = (event) => {
          console.log("⚠️  WebSocket 已断开连接")
          console.log("关闭代码:", event.code)
          console.log("关闭原因:", event.reason)
          this.attemptReconnect()
        }
      } catch (error) {
        console.error("❌ 连接失败:", error)
        reject(error)
      }
    })
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++
      console.log(
        `🔄 ${this.reconnectDelay / 1000}秒后尝试重新连接 (${
          this.reconnectAttempts
        }/${this.maxReconnectAttempts})`
      )
      setTimeout(() => this.connect(), this.reconnectDelay)
    } else {
      console.error("❌ 已达到最大重连次数，放弃连接")
    }
  }

  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message))
      console.log("📤 发送消息:", message)
    } else {
      console.error("❌ WebSocket 未连接，无法发送消息")
    }
  }

  handleMessage(message) {
    console.log("🎯 收到服务器响应:", message)
  }

  disconnect() {
    if (this.ws) {
      this.ws.close()
      this.ws = null
      console.log("✓ WebSocket 已断开")
    }
  }

  isConnected() {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN
  }
}

async function callHttpApi(payload) {
  const apiUrl = "http://192.168.0.13:7072/dcb/chemicalIdentification/recognize"

  try {
    console.log("📡 调用 HTTP 接口:", apiUrl)
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sign: "04cdb86d4b55fc2884aca9f6531903dfab82b1b7617b4b0ef3ff4c8b6a9c15708c511b1cc884a43b280194b4756a0611371ec781787dab3ce67628efd0dfa640",
        Authorization:
          "3490834ef1ebc113c7024213d7da677e211c949819586a977ebb631c8d14e5823c4ceb3f3e58adaa838e6be94932be5eb7453ce856151ea8c8e019eb6d5997ed5846e4662e2ef7901d35dd4fb9a0e724d3233d31261fe05d39478e0de5a7b8c8fdfe6ba3c314a82a3b8fba91314bb85c04df8232a84a7c14fd5291ec96f3a4c859e9282cde0874f62fb441eb11bb69cce3f7668e821731ab1f3e23216b6d5e1aa277bf828ed1b3a885db74caa5eba1193fcb139a11245bc4918ff1e07f1cba85d5bae1d581a07690e3cd2c502c0afa77bc4ab5034e865a672122fc66f9c6770828102d9bf4d6a8b6649cf51a0b91976937e1d65b6ac79e33292e50dfa596d430",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log("✓ HTTP 响应:", data)
  } catch (error) {
    console.error("❌ HTTP 请求失败:", error)
  }
}

async function main() {
  const client = new WebSocketClient()

  try {
    await client.connect()

    // 准备识别请求数据
    const message = {
      imgUrl:
        "https://zf.zfmh.mem.gov.cn/file/wenshu/Snipaste_2026-04-02_17-01-416482445176202833701.png",
      msgType: 2,
      deptId: "1859158577256730624",
      senderId: "1924314789237100544",
      sendTime: 1774579769386,
      deviceId: "device_001",
      prompt: "",
      askingQuestions:
        '{"width":417,"height":612,"url":"https://zf.zfmh.mem.gov.cn/file/wenshu/Snipaste_2026-04-02_17-01-416482445176202833701.png"}',
    }

    // 通过 WebSocket 发送消息
    client.send(message)

    // 同时调用 HTTP 接口
    await callHttpApi(message)

    // 保持连接 30 秒等待响应
    await new Promise((resolve) => setTimeout(resolve, 30000))

    client.disconnect()
  } catch (error) {
    console.error("❌ 错误:", error)
  }
}

main()
