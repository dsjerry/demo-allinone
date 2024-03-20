spawn：启动一个新进程，并在进程中执行制定的命令；可通过 stdio 来监听子进程的输出

fork：是 spawn 的特殊形式，用于在新的子进程中运行一个 Nodejs 模块，如 fork('./child.js')，相当于 spawn('node', ['./child.js'])

exec：启动一个新的 shell 并在 shell 中执行命令，stdio 并不会立马输出，而是缓冲起来，在子进程执行完毕后一次性输出。而 spawn 则是实时输出，对于大量输出，exec 可能会崩溃

execFile：类似于 exec，但是不会创建一个新的 shell，而是直接通过制定的可执行文件执行命令
