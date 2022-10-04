let fs = require('fs');
let path = require('path');
function treeFunction(dirPath) {
    // console.log("tree command called" ,dirPath);
    let destPath;
    // 1. input dirpath given
    if (dirPath == undefined) {
       treehelper(process.cwd(),"");
       return;
    }
    else {
        //path exit or not
        let doesexit = fs.existsSync(dirPath);
        if (doesexit) {
          treehelper(dirPath," ");
        }
        else {
            console.log("please input correct path !");
            return;
        }
    }

}

function treehelper(dirpath,styleprint)
{
    //file or not
    let isfile=fs.lstatSync(dirpath).isFile();
    if(isfile==true)
    {
        let filename=path.basename(dirpath);
        console.log(styleprint+ "  ├── " +filename);
    }
    else{
        //folder
      let dirname=path.basename(dirpath);
      console.log(styleprint+ " └── " +dirname);
      let children=fs.readdirSync(dirpath);
      for(var i=0;i<children.length;i++)
      {
        //childrenaddress 
        //recursion call
        let childpath=path.join(dirpath,children[i]);
        treehelper(childpath,styleprint +"\t ");
      }
    }
}

module.exports={
    treeKey:treeFunction
}