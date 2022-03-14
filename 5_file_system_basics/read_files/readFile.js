const fs = require('fs');

// const text = fs.readFileSync('../list_directory_files/list.js', "UTF-8");
fs.readFile('../list_directory_files/list.js', "UTF-8", (err, text) => {
    console.log(text);
    console.log(typeof(text));
});

