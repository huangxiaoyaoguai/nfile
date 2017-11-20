const fs = require('fs')
const path = require('path')

module.exports = function generatePage (options) {

    if (options.pageName =='xinjian') throw new Error('你必须有一个文件名')
  

  let pageRoot;

  pageRoot = options.root+'/src/pages/'+options.pageName+'/';
  console.log(pageRoot)
    try{
      mystat = fs.statSync(pageRoot);
    } catch(err){
      creatfile();
      return
    } 

    if(mystat.isDirectory()) throw new Error('文件夹已经存在')



function creatfile(){
  try{
      fs.mkdirSync(pageRoot)

      } catch(err){
        throw new Error('请到小程序的主目录下执行命令')
    }
  const jsTemplate = require('./templates/js')
  const jsPath = path.resolve(pageRoot,'index.js')
  fs.writeFileSync(jsPath, jsTemplate(options))
  // xml
  const xmlTemplate = require('./templates/xml')
  const xmlPath = path.resolve(pageRoot,'index.xml')
  fs.writeFileSync(xmlPath, xmlTemplate(options))

  const lessTemplate = require('./templates/less')
  const lessPath = path.resolve(pageRoot, 'index.less')
  fs.writeFileSync(lessPath, lessTemplate(options))

  const jsonTemplate = require('./templates/json')
  const jsonPath = path.resolve(pageRoot, 'index.json')
  fs.writeFileSync(jsonPath, jsonTemplate(options))

}

}
