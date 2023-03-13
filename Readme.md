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

# **Path Nodejs**
**Trong Node.js, ```path``` là một module được cung cấp sẵn để làm việc với các đường dẫn tệp và thư mục trên hệ thống tệp. Module này cung cấp các phương thức để xử lý các đường dẫn và tên tệp, bao gồm:**

  - path.join(): kết hợp các phần của đường dẫn thành một đường dẫn hoàn chỉnh
   ``` 
   const path = require('path');

   const dir = '/home/user/documents';
   const filename = 'file.txt';

   const filePath = path.join(dir, filename);

   console.log(filePath); // /home/user/documents/file.txt
```

  - path.resolve(): chuyển đổi một đường dẫn tương đối thành một đường dẫn tuyệt đối

```
const path = require('path');

const relativePath = '../src/index.js';

const absolutePath = path.resolve(relativePath);

console.log(absolutePath); // /home/user/project/src/index.js
```

  - path.dirname(): trả về thư mục chứa tệp cho một đường dẫn đã cho
```  
const path = require('path');

const filePath = '/home/user/documents/file.txt';

const dirName = path.dirname(filePath);

console.log(dirName); // /home/user/documents
```

  - path.basename(): trả về tên tệp từ một đường dẫn đã cho
```    
const path = require('path');

const filePath = '/home/user/documents/file.txt';

const fileName = path.basename(filePath);

console.log(fileName); // file.txt
```

  - path.extname(): trả về phần mở rộng của tệp từ một đường dẫn đã cho
 ``` 
   const path = require('path');

const filePath = '/home/user/documents/file.txt';

const fileExt = path.extname(filePath);

console.log(fileExt); // .txt
```

**Ví dụ sử dụng module "path" để kết hợp đường dẫn và tên tệp:**


```const path = require('path');

const dir = '/home/user/documents';
const filename = 'file.txt';

const filePath = path.join(dir, filename);

console.log(filePath); // /home/user/documents/file.txt
```

Trong ví dụ trên, phương thức ```path.join()``` được sử dụng để kết hợp đường dẫn ```/home/user/documents``` và tên tệp ```file.txt``` thành một đường dẫn hoàn chỉnh ```/home/user/documents/file.txt```.


# **Os Nodejs**
Trong Node.js, ```os``` là một module được cung cấp sẵn để cung cấp thông tin về hệ điều hành. Module này cung cấp các phương thức để truy xuất thông tin hệ thống, bao gồm:

```os.platform()```: trả về tên nền tảng hệ thống (ví dụ: "linux", "darwin", "win32")

```os.arch()```: trả về kiến trúc máy tính (ví dụ: "x64", "arm")

```os.cpus()```: trả về thông tin về các bộ vi xử lý

```os.totalmem()```: trả về tổng số bộ nhớ hệ thống

```os.freemem()```: trả về số bộ nhớ trống hiện tại

Ví dụ sử dụng module "os" để lấy thông tin hệ thống:


```
const os = require('os');

console.log(os.platform()); // linux
console.log(os.arch()); // x64
console.log(os.cpus()); // thông tin về các bộ vi xử lý
console.log(os.totalmem()); // tổng số bộ nhớ hệ thống
console.log(os.freemem()); // số bộ nhớ trống hiện tại
Trong ví dụ trên, các phương thức của module "os" được sử dụng để lấy thông tin về nền tảng hệ thống, kiến trúc máy tính, thông tin về các bộ vi xử lý, tổng số bộ nhớ hệ thống và số bộ nhớ trống hiện tại.
```

# **Buffer Nodejs**
**Trong Node.js, ``buffer`` là một đối tượng dùng để xử lý dữ liệu nhị phân (binary data). Nó cho phép bạn đọc và ghi dữ liệu nhị phân từ và đến các luồng (streams) và socket.**

**Một buffer trong ``Node.js`` được xem như một mảng các số nguyên 8-bit, mỗi số nguyên trong mảng này biểu diễn một byte của dữ liệu nhị phân. Buffer được sử dụng rộng rãi trong các ứng dụng Node.js như xử lý hình ảnh, âm thanh, mã hóa và giải mã dữ liệu, v.v.**

**Để tạo một buffer trong Node.js, bạn có thể sử dụng các phương thức như ```Buffer.alloc()```, ```Buffer.from()```, hoặc ```Buffer.allocUnsafe()```. Ví dụ:**


```
const buf1 = Buffer.alloc(10); // tạo buffer mới với 10 byte dữ liệu, tất cả các byte được thiết lập thành 0.
const buf2 = Buffer.from([1, 2, 3]); // tạo buffer mới từ mảng các số nguyên 8-bit
const buf3 = Buffer.allocUnsafe(5); // tạo buffer mới với 5 byte dữ liệu, các byte không được khởi tạo
```
**Sau khi tạo buffer, bạn có thể sử dụng các phương thức của nó để xử lý dữ liệu nhị phân, ví dụ như đọc và ghi dữ liệu từ và đến các luồng. Ví dụ:**


```
const fs = require('fs');

const data = fs.readFileSync('file.txt');
const buffer = Buffer.from(data);

// in các byte đầu tiên của buffer
console.log(buffer.slice(0, 10));
```
**Trong ví dụ trên, chúng ta đọc nội dung của một tệp văn bản vào biến data, sau đó chuyển nó sang buffer để xử lý dữ liệu nhị phân. Cuối cùng, chúng ta in ra các byte đầu tiên của buffer bằng cách sử dụng phương thức slice().**