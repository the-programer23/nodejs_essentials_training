const fs = require('fs');

//RENAMES FILE
fs.renameSync('../write_and_append_files/htmlTest.html', '../write_and_append_files/createdDynamically.html');

//PUTS FILE IN ANOTHER FOLDER
fs.rename('../append_files/colors.md', '../list_directory_files/assets/colors.md', err => {
    if (err) throw err;
});

setTimeout(() => {
    //DELETES FILE
    fs.unlinkSync('../list_directory_files/assets/alex.jpg');
}, 4000)