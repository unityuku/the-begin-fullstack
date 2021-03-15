import React from 'react';
import ReactDom from "react-dom"
//让一个状态可以被观察
import { makeAutoObservable } from "mobx" //1
import { observer } from 'mobx-react' //观察者  2

// TimerView 2  Store 1 

//Store
class Timer{
  secondsPassed = 0 //提供数据
  constructor(){
    makeAutoObservable(this)//将这个类的实例上的数据可以被观察
  }
  //action
  increase(){
    this.secondsPassed+=1
  }
  reset(){
    this.secondsPassed=0
  }
}

const myTimer =new Timer(); //实例
//可以观察某个store(状态)的组件
const TimerView = observer(({timer})=>( //这个组件可以观察
  <button onClick={()=>{timer.reset()}}>Seconds passed:{timer.secondsPassed}</button>
  ))

  setInterval(()=>{
    myTimer.increase();
  },1000)
//根上套 分水岭 组件就被去状态能力 组件不能管
// 组件不能搞状态, 
// 状态要提升 要被组件 observer
// new Store{
  // seconds -> 去到组件中 StorageEvent.seconds
  // oberverable
// }
// secondsPassed =0
// action increase reset 


ReactDom.render(<TimerView timer={myTimer}/>, document.body)