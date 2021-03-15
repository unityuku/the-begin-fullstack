import { makeAutoObservable } from 'mobx';//可以被观察

class Appstore{
    constructor(){
        makeAutoObservable(this)
    }
    todos=[
        {
            id:0,
            title:"todo标题",
            done:true
        },
        {
            id:1,
            title:"已经完成todo的标题",
            done:false
        }
    ]
    changeFinished(id){
        console.log(id);
        const list= this.todos.filter((item,index)=>item.id===id)
        console.log(list[0].done);
        list[0].done=!(list[0].done)
    }
}
export default new Appstore()