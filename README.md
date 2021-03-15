# mobx 和redux 类似 react 实战

react 全家桶 +前端的 

react + koa 全栈

定时应用
setInterval js es5
=> react state setState data 响应式的
redux mobx

state-> 可以被观察的对象 observerable
界面更新 单向绑定 双向绑定 
组件类的表达 组件自身的状态 -> 响应式
数据父组件->子组件

redux 如果是没有关系的组件 要共享数据和状态怎么办
redux z

1. 专业的数据管理 redux mobx 
2. 正规的数据管理流程 步骤
action  需要一个动作申请 applyTravle(数据)
reducer 纯函数 相当于算账的过程


store 中央仓库 
local -> 中央
new store 比如公司的财务(钱=数据)
要的话 数据
申请10万 用于xxx
部门a 和部门b(组件) 都可以用于
数据管理是区别于组件或界面开发的


# mobx 更简单的数据流管理
1. observerable 观察 (组件)   被观察 store
2. store provider
从store借 redux connent mobx @inject 给你
HOC操作 
高阶函数
(sotre)={
    this.props.store    //@inject 可以在你的函数组件套一个函数 这个函数就可以拿到store里的状态(数据)
    return()=>{
        store.todos
    }
}

3. store 分支