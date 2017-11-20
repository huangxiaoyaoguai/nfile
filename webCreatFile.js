const fs = require('fs')
const path = require('path')

module.exports = function webCreatFile (options) {

    if (options.pageName =='xinjian') throw new Error('你必须有一个文件名')
    let pageRoot,mystat;
    if(options.pagePath=='src/views'){
      pageRoot = options.root+'/'+options.pagePath+'/'+options.pageName+'/';
    try{
      mystat = fs.statSync(pageRoot);
    } catch(err){
      creatfile();
      return
    } 
    if(mystat.isDirectory()) throw new Error('文件夹已经存在')
    }else{
      var zanshiRoot = options.root+'/src/views/'+options.pagePath+'/';
      try{
      var zabshistat = fs.statSync(pageRoot);
    } catch(err){
        pageRoot = options.root+'/src/views/'+options.pagePath+'/';
      try{
          fs.mkdirSync(pageRoot)
        } catch(err){
          
        }
        ismkdir()
    } 
    
    }


 function ismkdir(){
  if(options.isnewfile){
    pageRoot = options.root+'/src/views/'+options.pagePath+'/'+options.pageName+'/';
    try{
    mystat = fs.statSync(pageRoot);
  } catch(err){
    creatfile();
    return
  }
  if(mystat.isDirectory()) throw new Error('文件夹已经存在')
  }else{
    pageRoot = options.root+'/src/views/'+options.pagePath+'/'+options.pageName+'.js';

    try{
    mystat = fs.statSync(pageRoot);
  } catch(err){
    creatfile();
    return
  }
  if(mystat.isFile()) throw new Error('文件已经存在')
  }
 }
  function creatfile(){
    if(options.pagePath=='src/views'||options.isnewfile){
      try{
        fs.mkdirSync(pageRoot)
      } catch(err){
        throw new Error('请到webApp的主目录下执行命令')
      }
      writefile();
    }else{
      newfile();
    }
  }
  function newfile(){
      const jsTemplate = require('./webtem/index')
    fs.writeFileSync(pageRoot, jsTemplate(options))
  }

  function writefile(){
     const jsTemplate = require('./webtem/index')
    const jsPath = path.resolve(pageRoot, 'index.js')
    fs.writeFileSync(jsPath, jsTemplate(options))
  }

}
