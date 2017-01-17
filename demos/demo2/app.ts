import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
var app = express();

//解析请求体
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

//设置视图存放的文件件
app.set('views', __dirname + '/views')

//视图的渲染引擎
app.set('view engine', 'html');

//用ejs 的方式渲染html页面
app.engine('.html', ejs.renderFile);

//设置静态文件夹
app.use(express.static(__dirname + '/public'))

//对于任何请求渲染index页面
app.all('/', (req, res, next) => {
    //显然并发送渲染后的页面
    res.render('content/index.html', {
        username: req.body.username,
        citys: ["北京", "上海", "杭州", "天津"]
    });
});
app.listen(3000, () => {
    console.log('server run ing on 3000');
});
