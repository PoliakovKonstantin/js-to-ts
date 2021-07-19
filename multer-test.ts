const multer = require('multer');
const fs=require('fs')
export const storage = multer.diskStorage({
    destination(req: any, file: any, cb: (arg0: any, arg1: string) => void) {
       cb(null, __dirname);  
     },
     filename(req: any, file: any, cb: (arg0: any, arg1: string) => void) {
       cb(null, `fileBook`);  
     }});
//module.exports = multer({ storage });