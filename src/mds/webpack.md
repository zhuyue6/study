# webpack

chunk 通常指的是runtime懒加载import()打成的  
bundle 指的是从入口开始打的

## entry
entry: './src/index.ts' 默认名称为main
多入口打包  
entry: {  
  &ensp;main1: "./src/index.ts"  
  &ensp;main2: "./src/index2.ts"  
}  

description
entry: {
  main: {
    import: '',
    filename: '',
    dependOn: '',
    chunkloading: 'jsonp'
  }
}

## output

可以使用的模板
模式| 描述 | 
| :----- | :----- |
[id] | chunk的ID |
[name] | 默认为设置的chunkname, 没设置的就是chunkid|
[hash] | chunk 的hash值|  

包含各种层面的模板： chunk module file url

## module

处理不同文件模块规则

## resolve
设置模块如何被解析

常用属性alias extensions

## optimization


## plugins

## server

## 
