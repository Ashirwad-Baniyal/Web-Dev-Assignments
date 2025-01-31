const fs=require('fs')
const path=require('path')

const dirPath='D:\\Courses\\Github Progress\\Ex15clearClutter\\Files';

if(!fs.existsSync(dirPath)){
    console.log("Directory Path not Exists");
    process.exit();
}
fs.readdir(dirPath,(err,files)=>{
    if(err){
        console.log('Error reading',err);
        return;
    }
    files.forEach(file =>{
       const filePath=path.join(dirPath,file);
       fs.stat(filePath,(err,stats)=>{
        if(err){
            console.error('Error getting file stats:',err);
            return;
        }
       if(stats.isFile()){
        const ext=path.extname(file).slice(1);
        if(!ext) return;
        const folderPath=path.join(dirPath,ext);

        if(!fs.existsSync(!folderPath)){
            fs.mkdirSync(folderPath)
        }
        const newFilePath=path.join(folderPath,file);
        fs.rename(filePath,newFilePath,err=>{
           if(err){
            console.error(`Error moving file${file}`,err);
           }
           else{
            console.log(`Moved ${file} to ${folderPath}`);
           }
        });
       }
       })
    });
});