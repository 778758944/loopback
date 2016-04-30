/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-28 15:47:29
 * @version $Id$
 */

var formidable=require('formidable');
var fs=require('fs');
module.exports=function(app){
	var film=app.models.film;
	var mysqlDs=app.dataSources.mysqlDs;
	var route=app.loopback.Router();
	var connector=mysqlDs.connector;

	// mysqlDs.automigrate('film',function(err){
	// 	if(err) console.log(err);
	// })

	route.post("/addfilm",function(req,res){

			var data={
				name:req.body.name,
				money:req.body.money
			};
			// console.log(req.params);
			// console.log(req.body);


			// var data={name:"ttnk",money:100};
			// film.create(data,function(err,result){
			// 	if(err) return err;
			// 	res.json({
			// 		code:0,
			// 		data:result
			// 	})
			// })
			res.json({
				code:0
			})
		});

	route.post("/updatefilm",function(req,res){
		var id=req.body.id;
		var newv=req.body.newv;

		film.findById(id,function(err,result){
			if(err) return err;

			film.updateAll({id:id},{money:newv},function(err,result){
				if(err) return err;
				res.json({
					code:0,
					data:result
				})
			});
		})
	});

	route.post('/deletefilm',function(req,res){
		var id=req.body.id;
		film.destroyById(id,function(err,result){
			if(err) return err;

			res.json({
				code:0,
				data:result
			})
		})
	});

	route.post('/findfilter',function(req,res){
		var money=req.body.money;
		//只取想要的字段
		film.find({fields:{money:true}},function(err,results){
			if(err){
				console.log(err);
				return err;
			}

			res.json({
				code:0,
				data:results
			});
		})

	});

	route.post('/findinclude',function(req,res){
		film.find({include:'acters'},function(err,results){
			if(err) console.log(err);
			res.json({
				code:0,
				data:results
			})
		})
	})

	route.post('/findlimit',function(req,res){
		film.find({limit:1},function(err,results){
			if(err) return err;
			res.json({
				code:0,
				data:results
			})
		})
	})

	route.post('/findwhere',function(req,res){
		film.find({where:{name:'film3'}},function(err,results){
			if(err) return err;

			res.json({
				code:0,
				data:results
			})
		})
	})

	//事务
	// var task;
	// var transcation=film.beginTransaction({
	// 	isolationLevel:film.Transaction.REPEATABLE_READ,
	// 	timeout:10000
	// },function(err,tx){
	// 	if(err) console.log(err);
	// 	film.create({name:"film5",money:500},{transcation:tx},function(err,film){
	// 		film.updateAttributes({money:200},{transcation:tx},function(err,film){
	// 			if(err) console.log(err);
	// 			tx.rollback(function(err){
	// 				if(err) console.log(err);
	// 			});
	// 		})
	// 	})
	// });

	// transcation.then(function(){
	// 	console.log('lll')
	// })

	route.post('/commit',function(req,res){
		task.commit(function(err){
			if(err) console.log(err);
			res.json({
				code:0
			})
		})
	})

	route.post('/rollback',function(req,res){
		task.rollback(function(err){
			if(err) console.log(err);
			res.json({
				code:0
			})
		})
	})

	// route.post('/api/film/all');

	connector.observe('before execute',function(ctx,next){
		console.log("connector");
		next();
	})

	app.post('/test/upload',function(req,res){
		var form=new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			var path=files.pic.path;
			var name=files.pic.name;
			console.log(name);
			var read=fs.createReadStream(path);
			var path2=__dirname.replace('/server/boot','/client/images/'+name);
			console.log(path2);

			var write=fs.createWriteStream(path2);
			read.pipe(write);
			res.json({
				path:'/images/'+name
			})
		})
	})
	

	app.use(route);
}




































