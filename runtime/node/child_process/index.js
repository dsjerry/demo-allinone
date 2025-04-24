const { spawn, fork, execFile } = require("child_process")

function runSpawn() {
  const spawnProcess = spawn("node", ["./child_process/runme.js"])

  spawnProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`)
  })

  spawnProcess.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`)
  })

  spawnProcess.on("close", (code, signal) => {
    console.log(`子进程退出，退出码 ${code}`)
    console.log(signal)
  })
}

function runFork() {
  const forkProcess = fork("./child_process/runme.js")

  forkProcess.on("message", (message) => {
    console.log(`父进程收到消息：`, message)
  })

  forkProcess.send("父进程发送消息")

  forkProcess.on("close", (code) => {
    console.log(`子进程退出，退出码 ${code}`)
  })
}

function runExecFile() {
  execFile("ffmpeg", (error, stdout, stderr) => {
    if (error) {
      throw error
    }
    console.log(stdout)
  })
}
