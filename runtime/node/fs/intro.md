# stream.js

`writeFile`和`createWriteStream`两者都是用于写入文件，区别在于：

- `writeFile`：将这个内容作为整体写入文件，如果需要写入少量数据这会很方便
- `createWriteStream`：创建之后返回可写流对象，可以多次调用`write`方法写入数据，适合写入大量数据

可读流和可写流相似，单纯读取文件适用于小文件，可读流适用于读取大的文件数据（通过监听`readS.on('data', data => {})`）

与 stream 的区别：stream 提供了一些处理流的基本工具，而 `fs.createReadStream`这些则是基于这些基础工具进一步的实现

> 如果流文件不存在，会自动创建，但是上级目录不存在则会出错，需要预先创建上级目录
