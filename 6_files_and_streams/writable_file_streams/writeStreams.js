const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("../readable_file_streams/assets/lorum-ipsum.md", "UTF-8");


//READS DATA FROM lorum-ipsum.md AND WRITES IT TO myFile.txt
// readStream.on("data", data => {
//     writeStream.write(data);
// });

//READS INPUT FROM THE TERMINAL AND WRITES IT TO myFile.txt
// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

//READS INPUT FROM THE TERMINAL AND WRITES IT TO myFile.txt
// process.stdin.pipe(writeStream);
//READS DATA FROM lorum-ipsum.md AND WRITES IT TO myFile.txt
readStream.pipe(writeStream);