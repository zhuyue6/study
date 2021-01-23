# 基本类型  
布尔boolean  
数字number  
字符串string  
数组Array<number> number[]  
元组 [string, number]  
枚举 enum  
Any any  
Void void  
null undefined  
Never never  
Oject object  

类型断言 场景联合类型 <string>data  data as string   
断言class为更加具体的子类  
断言类型为any  
断言any为任意类型  
 
# 接口  
为对象定义契约  
对象  
Interface People {  
Age: number  
Name: string  
}  
函数  
Interface Action {  
(speed: number)   
}  
构造函数使用  
Interface Action {  
new (speed: number)   
}  
Var v: ()=>number  
可索引对象
Interface List {
 [index: string]: number
}  
# 类  
与对象类似  
通过 implement  
类分为静态部分和实例部分，类型只检查类的实例部分constructor属于静态部分  
Readonly 只读  
Private 私有属性 只有在当前类调用  
Protected 受保护属性 可以在派生类用  
Public 共有  

# 泛型
就是为未确定的类型定义变量, 通常为类、函数、接口使用
泛型约束
Interface a {
 Length: number
}
Function <T extends a>(arg: T){
T.length
}

Type 简单数据 interface 对象数据type 不支持被extends implements 


# 关于模块和打包

若ts文件中存在declare 和 import 或 export 则为局部模块 没有export 只有declare则为全局模块
Tsc打包默认不包括node_modules里面的工具通常是编译src下文件就交给webpack 处理  
Module 配置决定输出的模式  
Moduleresoulution 默认module决定 可选classic或node  
通常ts会编译Tsconfig下的所有文件， 指定了files和include 只会编译该文件 
import * as XXX from 'xxx' 会编译成XXX对象   
import XXX from 'xxx' 会编译成XXX.default


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