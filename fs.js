var fs=require('fs');

function mkYYMMDDfilePath(fn){
	var path='./public/imgs/';
	var date=new Date(),
		y=date.getFullYear(),
		m=date.getMonth()+1,
		d=date.getDate();

		m=m.toString().length<2?'0'+m:m;
		d=d.toString().length<2?'0'+d:d;
	fs.exists(path+y,function(is){
		if (is) {
			fs.exists(path+y+'/'+m,function(s){
				if (s) {
					fs.exists(path+y+'/'+m+'/'+d,function(ss){
						if (ss) {
							fn&&fn();
						}else{
							fs.mkdirSync(path+y+'/'+m+'/'+d);
							fn&&fn();
						}
					});
				}else{
					fs.mkdirSync(path+y+'/'+m);
					fs.mkdirSync(path+y+'/'+m+'/'+d);
					fn&&fn();
				}
			});
		}else{
			fs.mkdirSync(path+y);
			fs.mkdirSync(path+y+'/'+m);
			fs.mkdirSync(path+y+'/'+m+'/'+d);
			fn&&fn();
		}
	});
}