# **Stream Nodejs**

**Trong Node.js, streams là một khái niệm quan trọng để làm việc với dữ liệu liên tục (continuous data) như file, network
sockets, hay các dữ liệu truyền từ database.**

- _Streams được phân loại thành 4 loại chính:_

  - Readable streams: Cho phép đọc dữ liệu một cách liên tục từ một nguồn như file hoặc network sockets.
  - Writable streams: Cho phép ghi dữ liệu một cách liên tục đến một đích như file hoặc network sockets.
  - Duplex streams: Kết hợp cả Readable và Writable streams để cho phép đọc và ghi dữ liệu cùng lúc.
  - Transform streams: Loại stream đặc biệt của Node.js, cho phép thực hiện các thao tác biến đổi dữ liệu khi chúng được đọc hoặc ghi vào stream.
 - Một số phương thức cơ bản của streams trong Node.js:

    - pipe(): Đọc dữ liệu từ một stream và ghi vào stream khác.
    - write(): Ghi dữ liệu vào một stream.
    - read(): Đọc dữ liệu từ một stream.

**Ví dụ sử dụng streams trong Node.js để đọc và ghi dữ liệu từ một file:**


```
const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
```
***Trong ví dụ trên, chúng ta sử dụng phương thức **createReadStream()** để tạo ra một Readable stream đọc dữ liệu từ file input.txt. Sau đó, chúng ta tạo một Writable stream bằng cách sử dụng phương thức createWriteStream() để ghi dữ liệu vào file output.txt. Cuối cùng, chúng ta sử dụng phương thức pipe() để đọc dữ liệu từ Readable stream và ghi vào Writable stream.***

# **Fs Nodejs**
Thư viện ``fs`` (file system) là một trong những thư viện cốt lõi của ``Node.js``, được sử dụng để thao tác với hệ thống tập tin (file system) trên máy tính. Thư viện này cung cấp các phương thức để đọc, ghi, sửa đổi, xóa và tạo các tệp và thư mục trên máy tính.

Để sử dụng thư viện fs, bạn cần phải import nó vào trong ứng dụng của mình bằng cách sử dụng cú pháp sau:

 
```const fs = require('fs');```

Sau đó, bạn có thể sử dụng các phương thức có sẵn của thư viện fs để thao tác với tệp và thư mục trên máy tính. Ví dụ:

Đọc tệp tin: ```fs.readFileSync('path/to/file', 'utf8')```

Ghi tệp tin:``` fs.writeFileSync('path/to/file', 'content', 'utf8')```

Sửa đổi tệp tin: ```fs.appendFileSync('path/to/file', 'new content', 'utf8')```

Xóa tệp tin: ```fs.unlinkSync('path/to/file')```

Tạo thư mục: ```fs.mkdirSync('path/to/folder')```

Xóa thư mục: ```fs.rmdirSync('path/to/folder')```


Lưu ý rằng trong các ví dụ trên, tất cả các phương thức đều sử dụng chế độ đồng bộ (synchronous mode). Nếu bạn muốn sử dụng chế độ bất đồng bộ (asynchronous mode), bạn cần sử dụng các phương thức có hậu tố "Sync" để thay thế. Ví dụ:

```fs.readFile('path/to/file', 'utf8', (err, data) => {}) ```và ```fs.writeFile('path/to/file', 'content', 'utf8', (err) => {}).```