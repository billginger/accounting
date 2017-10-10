const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
	ctx.response.body = 'Hello Koa!';
});

app.listen(3001);
console.log('accounting is starting at port 3001');