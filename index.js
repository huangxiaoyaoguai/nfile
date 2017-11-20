#!/usr/bin/env node
var inquirer = require('inquirer');
var path = require('path');
var webCreatFile = require('./webCreatFile');
var creatXiaochengxu = require('./creatXiaochengxu');

var path = process.cwd();
var pathArr = path.split('/');
console.log(pathArr)

var isWEB = pathArr[pathArr.length-1] == 'webApp'?true:false;

console.log('新建初始化模板');

console.log('*****************************************')


inquirer.prompt([
      {
        type: 'list',
        name: 'wichos',
        choices:['webApp','小程序'],
        message: '选择环境webApp或者小程序',
        default: 'webApp'
      }
      ])
    .then(opition=>{
      console.log('你选择的环境是'+opition.wichos)
      console.log('----------------------------------')
      if(opition.wichos=='webApp'){
        newWebapp();
      }else{
        xiaopage()
      }
    })
    .catch(err=>{
      console.log(err)
    })



  function xiaopage(){

    inquirer.prompt([
      {
        type: 'input',
        name: 'pageName',
        message: '填写新建文件夹的名字’',
        default: 'xinjian'
      }
      ])
    .then(opition=>{
      opition.root = path;
      console.log(opition)
      creatXiaochengxu(opition)
    })
    .catch(err=>{
      console.log(err)
    })

  }



function newWebapp(){
  inquirer.prompt([
      {
        type: 'input',
        name: 'pagePath',
        message: '填写路径，默认‘/src/views/*’',
        default: 'src/views'
      },
      {
        type: 'input',
        name: 'pageName',
        message: '填写文件名字',
        default: 'xinjian'
      },
      {
        type: 'confirm',
        name: 'isnewfile',
        message: '是否需要创建新建文件夹',
        default: true
      }
    	])
    .then(opition=>{
      opition.root = path;

      console.log(opition)

      webCreatFile(opition)
    })
    .catch(err=>{
    	console.log(err)
    })
}


