const NodeMediaServer = require('node-media-server');

// 配置项
const config = {
  rtmp: {
    port: 1935,        // RTMP 推流端口
    chunk_size: 60000, // 数据块大小
    gop_cache: true,   // 缓存 GOP 帧（优化播放体验）
    ping: 30,          // 心跳检测间隔
    ping_timeout: 60   // 心跳超时时间
  },
  http: {
    port: 8000,        // HTTP 拉流端口（HLS/API）
    allow_origin: '*'  // 跨域允许
  },
  trans: {
    ffmpeg: 'C:\\Users\\Admin\\AppData\\Local\\Microsoft\\WinGet\\Links\\ffmpeg.exe', // 需提前安装 FFmpeg
    tasks: [
      {
        app: 'live',          // 直播应用名
        hls: true,            // 开启 HLS 转码
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,           // 开启 DASH 转码（可选）
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  }
};

// 启动服务器
const nms = new NodeMediaServer(config);
nms.run();

console.log('直播服务器启动成功：');
console.log('- RTMP 推流地址：rtmp://localhost:1935/live/[自定义流名]');
console.log('- HLS 拉流地址：http://localhost:8000/live/[自定义流名].m3u8');