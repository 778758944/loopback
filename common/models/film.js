module.exports = function(Film) {
	Film.greet=function(msg,cb){
			cb(null,msg);
	}

	// var connector=Film.getDataSource().connector;

	Film.remoteMethod('greet',{
		accepts:{arg:'msg',type:'string'},
		returns:{arg:'greeting',type:'string'},
		description:"find all films",
		http:{path:"/all",verb:'post'}
	})


	Film.beforeRemote('create',function(ctx,unused,next){
		console.log(ctx.req.accessToken);
		console.log(ctx.req.headers);
		console.log(ctx.req.body);
		next();
	});

	Film.afterRemote('greet',function(ctx,unused,next){
		console.log('afterCalled');
		console.log(ctx.result);
		ctx.result.code=0;

		next();
	});

	Film.observe('access',function(ctx,next){
		console.log(ctx.Model.modelName);
		next();
	});

	Film.observe('before save',function(ctx,next){
		// console.log('beforeSave');
		// console.log(ctx.hookState.name='jaja');
		next();
	})

	Film.observe('persist',function(ctx,next){
		// console.log('persist');
		// console.log(ctx.hookState);
		next();
	});


	// connector.observe('before execute',function(ctx,next){
	// 	console.log('connector befor execute');

	// 	next();
	// })
};
































