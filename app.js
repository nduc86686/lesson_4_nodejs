const fs = require('fs');
const path = require('path');
const stream = require('stream');
const { Transform } = require('stream');

// Tạo file bất đồng bộ
const filename = 'text.txt';
const filenameOutput = 'output.txt';
const filepath = path.join(__dirname, filename);
const filepathOutput = path.join(__dirname, filenameOutput);

const writeStream = fs.createWriteStream(filepath);


// Tạo stream để ghi các dòng vào file
//Đoạn mã đó tạo một stream mới để ghi các dòng vào file. Cụ thể, đoạn mã này sử dụng lớp stream.Readable của Node.js để tạo stream mới. Để tạo stream mới này, ta truyền vào một đối tượng có phương thức read.
//
// Trong phương thức read này, ta sử dụng this.push() để thêm dòng "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." vào stream. Ta cũng thêm ký tự xuống dòng "\n" vào cuối mỗi dòng để các dòng được phân biệt với nhau.
//
// Sau đó, ta kiểm tra số dòng đã ghi vào file bằng cách sử dụng thuộc tính this.count.
// Nếu đã ghi đủ 3 triệu dòng, ta sử dụng this.push(null) để báo cho stream biết không còn dữ liệu nữa và kết thúc việc đọc.
//
// Cuối cùng, ta tăng giá trị của thuộc tính this.count để theo dõi số dòng đã ghi vào stream.
// Khi stream được đưa vào hàm pipe() để ghi vào file, phương thức read này sẽ được tự động gọi bởi hệ thống và các dòng sẽ được ghi vào file bất đồng bộ.
const loremStream = new stream.Readable({
    read() {
        this.push("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.\n");
        if (this.count === 3000000) {
            this.push(null);
        }
        this.count++;
    }
});


loremStream.count = 0;

// Ghi stream vào file
loremStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log(`File ${filename} đã được tạo`);
    writeStream.end(); // đóng stream sau khi ghi xong dữ liệu
    // Tạo một Transform stream để chuyển đổi dữ liệu sang viết hoa
    const upperCaseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const upperCaseChunk = chunk.toString().toUpperCase();
            callback(null, upperCaseChunk);
        },
    });
// Đọc nội dung của file bất đồng bộ và ghi vào file khác
    fs.createReadStream(filepath)
        .pipe(upperCaseTransform)
        .pipe(fs.createWriteStream(filepathOutput))
        .on('finish', () => {
            console.log(`Data has been written to file ${filepathOutput} successfully.`);
            // đóng stream sau khi ghi xong dữ liệu
            fs.closeSync(fs.openSync(filepathOutput, 'r'));
        })
        .on('error', (err) => {
            console.error(`Error occurred while writing data to file: ${err}`);
        });
});









