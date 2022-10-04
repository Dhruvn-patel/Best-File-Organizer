#!/usr/bin/env node
let inputArr = process.argv.slice(2); // command line input
const { dir } = require('console');
let fs = require('fs');
let path = require('path');
// console.log(inputArr);

let helpobj=require('../Fileorgainer/command/help');
let organizeobj=require('../Fileorgainer/command/organize');
let treeobj=require('../Fileorgainer/command/tree');
//commonds

let types = {
    media: ["mp4", "mkv", "wav"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

var command = inputArr[0];

switch (command) {
    case "tree":
        treeobj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeobj.oranizeKey(inputArr[1])
        break;
    case "help":
        helpobj.helpKey()
        break;
    default:
        console.log("Please input Correct input !");
}









