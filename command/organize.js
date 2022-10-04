let fs = require('fs');
let path = require('path');
let typeobj=require('../utility');
function organizeFunction(dirPath) {
    // console.log("organize command called",dirPath);
    let destPath;
    // 1. input dirpath given
    if (dirPath == undefined) {
       organizeFunction(process.cwd());
       return;
    }
    else {
        //path exit or not
        let doesexit = fs.existsSync(dirPath);
        if (doesexit) {
            // add path
            destPath = path.join(dirPath, "organize Files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }


        }
        else {
            console.log("please input correct path !");
            return;
        }
    }
    // 2 .create organize files  directory
    organizehelper(dirPath, destPath);

    // 4. copy /cut all files in organize folder

}

function organizehelper(src, dest) {
    // 3.identify all categories of files in present input directory
    let children = fs.readdirSync(src);

    for (var i = 0; i < children.length; i++) {
        //sari files ka address 
        childrenAdd = path.join(src, children[i]);
        let isfile = fs.lstatSync(childrenAdd).isFile();
        if (isfile) {
            console.log(children[i]);
            let category = getcategory(children[i]);

            //copy into folder into subfolder
            sendfile(childrenAdd, dest, category);
        }
    }
}

function sendfile(srcfilepath, dest, category) {
    //create subfolder path
    let categorypath = path.join(dest, category);
    if (fs.existsSync(categorypath) == false) {
        fs.mkdirSync(categorypath);
    }

    //file copy
    let filename = path.basename(srcfilepath);
    // console.log(filename);
    let destfilepath = path.join(categorypath, filename);
    fs.copyFileSync(srcfilepath, destfilepath);
    //cut
    fs.unlinkSync(srcfilepath);
    console.log(filename," copied to" ,category);
}






function getcategory(name) {
    //get extension name
    ext = path.extname(name);
    // console.log(ext);
    //remove . in extension
    ext = ext.slice(1);
    for (let type in typeobj.types) {
        let typearray = typeobj.types[type];
        for (let i = 0; i < typearray.length; i++) {
            if (typearray[i] == ext) {
                //return type of folder
                return type;
            }
        }
    }
    return "other";
}

module.exports={
    oranizeKey:organizeFunction
}