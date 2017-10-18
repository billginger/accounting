const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
	ctx.type = 'html';
	ctx.body = fs.readFileSync('./views/index.html');
});

router.get('/login', ctx => {
	ctx.type = 'html';
	ctx.body = fs.readFileSync('./views/login.html');
});

app.use(router.routes()).use(router.allowedMethods());

app.use(static('./static'));

app.listen(3001);
console.log('accounting is starting at port 3001');