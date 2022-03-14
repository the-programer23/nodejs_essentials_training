const fs = require('fs');

//fs.renameSync('./test', './folderRenamed');

//Files from the folder should be deleted before deleting the folder
fs.readdirSync("./toBeDeleted").forEach(file => {
    fs.unlinkSync(`./toBeDeleted/${file}`);
});

//DELETES A FOLDER
fs.rmdir("./toBeDeleted", err => {
    if(err) throw err;
    console.log('Folder deleted');
});