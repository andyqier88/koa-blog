function log(ctx){
	console.log(`huhu`)
	console.log(ctx.method,ctx.header.host)
}

module.exports = function(){
	return async function(ctx, next){
		log(ctx)
		await next()
	}
}
