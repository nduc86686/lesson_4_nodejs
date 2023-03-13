const fs = require('fs');

// Tạo file text.txt với 3 triệu dòng "Lorem Ipsum ..."
const writeStream = fs.createWriteStream('text.txt');
for (let i = 0; i < 3000000; i++) {
    writeStream.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n");
}
writeStream.end();

// Biến đổi nội dung sang viết hoa và ghi vào file output.txt
const readStream = fs.createReadStream('text.txt');
const writeStream2 = fs.createWriteStream('output.txt');
readStream.on('data', function(chunk) {
    const upperCaseChunk = chunk.toString().toUpperCase();
    writeStream2.write(upperCaseChunk);
});
readStream.on('end', function() {
    writeStream2.end();
});
