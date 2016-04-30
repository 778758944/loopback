module.exports = function(Film) {
	Film.greet=function(msg,cb){
		Film.find(function(err,results){
			if(err) return cb(err);

			cb(null,results);
		})
	}

	Film.remoteMethod('greet',{
		accepts:{arg:'msg',type:'string'},
		returns:{arg:'greeting',type:'string'},
		description:"find all films",
		http:{path:"/all",verb:'post'}
	})
};
