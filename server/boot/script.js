/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-28 15:14:13
 * @version $Id$
 */
module.exports=function(app){
	var User=app.models.yonghu,
		mysqlDs=app.dataSources.mysqlDs;
	//     Team=app.models.team;


	// mysqlDs.automigrate('yonghu',function(err){
	// 	if(err){
	// 		return;
	// 	}

		// var user_data=[
		//     {username: 'John', email: 'john@doe.com', password: 'opensesame'},
		//     {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
		//     {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
		//  ];

		// User.create(user_data,function(err,results){
		// 	if(err){
		// 		console.log(err);
		// 		return;
		// 	}

		// 	console.log(results);

		// })


	// })


	// var user_data=[
	//     {username: 'John', email: 'john@doe.com', password: 'opensesame'},
	//     {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
	//     {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
	//   ];

	// User.create(user_data,function(err,results){
	// 	if(err){
	// 		console.log(err);
	// 		return;
	// 	}

	// 	console.log(results);

	// })

	// User.create(user_data,function(err,users){
	// 	if(err) return err;
	// 	console.log(users);

	// 	users[0].projects.create({
	// 		name:"project1",
	// 		balance:100
	// 	},function(err,project){
	// 		if(err) throw err;

	// 		console.log(priject);

	// 		Team.create([
	// 				{ownerId:project.ownerId,memberId:users[0].id},
	// 				{ownerId:project.ownerId,memberId:users[1].id}
	// 			],function(err,team){
	// 				if(err) return err;

	// 				console.log(team);
	// 			})
	// 		}
	// 	})
	// });































}









































