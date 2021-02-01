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