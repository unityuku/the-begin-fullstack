import React from 'react';
import ReactDOM from "react-dom"
import App from './App'
//复杂的应用要做好一件事情 : 细分 模块化 
//组件和数据是分离的

import store from './store'//组件与数据流的模块化
import { Provider } from 'mobx-react';//给组件提供1状态绑定




ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>, document.getElementById('root'));




