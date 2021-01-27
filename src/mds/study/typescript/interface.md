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