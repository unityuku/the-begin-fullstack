import React, { Component } from 'react';
import { observer, inject } from 'mobx-react' //观察者

@inject("store")
@observer
class Home extends Component{
    setFinished=(item , event)=>{
        const {store} = this.props;
        store.changeFinished(item.id) ; //走action流程
    }
    render(){
        const { store }=this.props
        console.log(store);
        return(
            <div>
                <h2>TodoList</h2>
                {
                    store.todos.map((item,index)=>(
                        <div key={index}>
                            <label htmlFor={'todo'+item.id}>
                                <input type="checkbox" id={'todo'+item.id}
                                    checked={item.done}
                                    onChange={this.setFinished.bind(this,item)}
                                />
                                {item.title}
                            </label>
                        </div>
                    ))
                }

            </div>
        )
    }
}
export default Home