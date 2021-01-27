# 关于模块和打包

若ts文件中存在declare 和 import 或 export 则为局部模块 没有export 只有declare则为全局模块
Tsc打包默认不包括node_modules里面的工具通常是编译src下文件就交给webpack 处理  
Module 配置决定输出的模式  
Moduleresoulution 默认module决定 可选classic或node  
通常ts默认会编译Tsconfig下的所有文件， 指定了files和include 只会编译该文件 
import * as XXX from 'xxx' 会编译成XXX对象   
import XXX from 'xxx' 会编译成XXX.default


typescript 编译器不会转换处理path这里需要webpack配合使用
关于typeroot这个是自动引入这里是与node的包引入的同一效果即typeroot: ['./types']加载所有文件夹 types加载指定文件夹 /types/package 会尝试该目录寻找index.d.ts 或package.json


类型保护 typeof  instanceof 断言 谓词

索引类型查询 keyof 返回公共属性名联合 a: {b: number, c: number} keyof a => b|c

不提倡在namespace 使用模块
Namespace /// <reference path=””/> declare下 export无效默认命名空间内全部可见
/// <reference types=””/> 声明依赖
Module ‘ddd’ 只能在环境模块声明 即declare下不能出现import export
Module ddd 与namespace一致

Export =    import = require()用来导出common amd模块 export = 只能单独使用
Export as namespace umd 库 全局命名空间在模块中使用导出内容为export的内容
Export const aaa:string
其他模块可用 umd.aaa

引用js时会找同目录相同名的声明文件
Types默认nodes_modules下@types


Module commonjs时编译模块为require 其余 import

Ts模块解析 classic node