const fs = require("fs");

const addScreenshot = (filePath, newFileName) => {
    // Create the readme-assets folder
    fs.mkdir("./dist/readme-assets", err => {
        if (err) {
            // Check if the error is because the folder already exists, and if so, return out of the function
            if (err.code === "EEXIST") {
                return;
            }
            console.log(err);
        }
    })

    fs.copyFile(filePath, `./dist/readme-assets/${newFileName}`, err => {
        if (err) throw err;
    })
}

module.exports = addScreenshot;