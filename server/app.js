
const Koa = require('koa');

const log = require('./log');
const app = new Koa();
// app.use(log())
// app.use(( ctx ) => {
// 	ctx.body = 'hello world!'
// })
// app.use( async ( ctx ) => {
//   ctx.body = 'hello koa2'
// })
const Router = require('koa-router')

let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
// 子路由2
// let page = new Router()
// page.get('/404', async ( ctx )=>{
//   ctx.body = '404 page!'
// }).get('/helloworld', async ( ctx )=>{
//   ctx.body = 'helloworld page!'
// })

// 装载所有子路由
// let router = new Router()
// router.use('/', home.routes(), home.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
// app.use(router.routes()).use(router.allowedMethods())

// app.use( async ( ctx ) => {
//   let url = ctx.request.url
//   ctx.body = url
// })
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')

function getSynctime(){
	return new Promise((resolve,reject)=>{
		try{
			let startTime = new Date().getTime()
			setTimeout(()=>{
				let endTime = new Date().getTime()
				let data = endTime-startTime
				resolve(data)
			},1000)
		}catch(err){
			reject(err)
		}
	})
}

async function getSyncData(){
	let time = await getSynctime()
	let data = `endTime - startTime = ${time}`
	return data
	// console.log(time)
}
async function getData(){
	let data = await getSyncData()
	console.log(data)
}
// getSyncData()
getData()
