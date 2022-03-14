const fs = require('fs');

const colors = require('../list_directory_files/assets/colors.json');

//if colors.md does not exits the appedFile function will create the file
colors.colorList.forEach(c => {
    fs.appendFile("./colors.md", `${c.color} : ${c.hex}\n`, err => {
        if (err) throw err;
        console.log('appended');
    });
});