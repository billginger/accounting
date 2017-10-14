const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
	ctx.body = '这是首页';
});

router.get('/login', ctx => {
	ctx.body = '这是登录页面';
});

app.use(router.routes()).use(router.allowedMethods());

app.use(static('./static'));

app.listen(3001);
console.log('accounting is starting at port 3001');