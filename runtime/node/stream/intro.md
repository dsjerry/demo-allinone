相关文件：fs/stream.js

一个抽象接口，用于处理 NodeJS 中工作流的数据

一个流可读可写，所有的流都是 EventEmitter 的实例

---

> 笔记中，使用 someStream 指代可读可写流，以区分 node:stream

# 提供的方法

`pipeline`:

对于方法`pipeline`和`someStream.pipe`的区别：前者可直接在函数内处理错误，而后者需要另外监听错误

- 如果不设置错误监听，程序报错

`finished`:

当流不可读、不可写、发生错误、过早关闭，会触发回调

`someStream.cork()` [可写流]

强制所有写入的数据都缓冲在内存中，直到调用`someStream.uncork()`或`someStream.end()`方法，缓冲中的数据会刷新

`someStream.destrey()` [可读可写流]

调用之后，随后对 write() 或 end() 的调用将导致 ERR_STREAM_DESTROYED 错误。 这是销毁流的破坏性和直接的方式。如果要在关闭前进行其他操作，可以使用 end() 方法。

可传递一个错误对象，会触发`error`事件

# 事件

`drain`

如果`someStream.write(chunk)`返回`false`，此事件将会在适合继续将数据写入流时触发

`unpipe`

当调用`someStream.unpipe()`方法时触发
