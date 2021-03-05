cookie
1. Cookie是服务器种在客户端的存储的书看看
每次再发送请求都会带上
cookie 比较小 4kb uid=121212
2. 
    node 设置cookie
    cookie有哪些选项 分别是什么
    1.domain:'127.0.0.1',//有域名限定的 再这个域可访问其他不行 为了安全起见
    2.maxxAge:1000*60*60*24 //保持时间
3. 牙羽 
cookie安全问题 服务器种下 写在用户端
是一段很小的文本 
有些攻击 可以得到用户的cookies 得到后 就可以伪装成用户去操作(下单)

document.cookie  js能拿到
httpOnly 默认true      但是有些无关紧要的东西比如夜间模式什么的, 可以设置为false的时候可以前端能拿到    但是为了防止XSS攻击要为true


cookie和localstorage
都是用来做存储的 cookie4kb  用户状态 localstorage5mb lokijs 数据库 多存一些 用户的地址 (家,公司的)用户看了哪些内容
cookie的性能不好 不适合放多了东西 因为每次http请求都会带上它 会有各种开销
为什么要这些设置呢 :http是无状态的网络协议 用cookie弥补了登录一些参数 
localstorage 只在客户端 不需要http传输 性能好