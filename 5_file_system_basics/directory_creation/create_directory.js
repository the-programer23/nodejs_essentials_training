const fs = require('fs');

if (fs.existsSync('testDirectory')) console.log('This directory already exits');
else {
    fs.mkdir('testDirectory', err => {
        if (err) throw err;
        console.log('Directory saved');
    });
}

