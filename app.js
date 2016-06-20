var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable=require('formidable');
var routes = require('./routes/index');
var users = require('./routes/users');
var compress=require('compression');
var fs=require('fs');
var StringDecoder = require('string_decoder').StringDecoder
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('PORT',5000);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(compress());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
function createWeb(pagename,name,_path){
  app.get(pagename,function(req,res,next){
    require('./createWebRouter')(name,req,res,next,_path);
  });

}
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
createWeb('/uploader','index','./public/');
createWeb('/testUploader','testUploader','./public/');


app.post('/uploader',function(req,res,next){
    if (req.body.getfileinfo) {
      // 1
      // 2
      if (req.body.getfileinfo==1) {
        var tk=req.body.token;
        var ins=req.body.ins;
        if (global['_file'+tk]) {
          res.json({
            mes:1,
            index:global['_file'+tk].index
          });
        }else{
          res.json({
            mes:-1
          });
        };

      }else{
        var uploadBodyToken=req.body.uploadtoken;
        if (global['file'+uploadBodyToken]&&global['file'+uploadBodyToken]>=0) {
          var pcs=global['file'+uploadBodyToken];
          var ss=global['file'+uploadBodyToken+'size'];
          if (pcs>=100) {
            global['file'+uploadBodyToken]=null;

            global['file'+uploadBodyToken+'size']=null;
            pcs=100;
          }
          res.json({
            mes:1,
            info:{
              percent:pcs,
              lens:ss
            }
          });
        }else{
          res.json({
            mes:-1
          });
        };
      };

    }else{
        var form=new formidable.IncomingForm();
            form.encoding='utf-8';
            form.uploadDir =  './public/images/';
            form.keepExtensions = true;
            var bodys=[];
            var abort=0;

        var host=req.query.host;
        var uploadToken=req.query.__token__;
        var isIE789=req.query.isIE;
        form.on('error',function(err){
            console.log(err);
        })
        .on('aborted',function(){
          // res.write('window.backOkedIndex('+req.query.index+');');
            console.log('aborted');
            abort=1;
        })
        .on('progress',function(bytesReceived, bytesExpected){

            var n=Math.round(bytesReceived/bytesExpected*100);
            if (isIE789==1) {
              global['file'+uploadToken]=n;
              global['file'+uploadToken+'size']=bytesExpected;
            };
            //res.write("<script>window.parent.edituploadback("+n+","+form.bytesReceived+","+form.bytesExpected+","+mainId+")</script>");

        });
        if (isIE789==0) {
          form.handlePart=function(part) {
            if (part.filename === undefined) {
              var value = '',
                  decoder = new StringDecoder(form.encoding);

              part.on('data', function(buffer) {
                value += decoder.write(buffer);
              });

              part.on('end', function() {
              });
              return;
            }
            var dd=[],ll=0;
            var ddd=[];lll=0;
            part.on('data', function(data) {
              if (data.length == 0) {
                return;
              }
              dd.push(data);
              ll+=data.length;
            });

            part.on('end', function() {
              ddd.push(Buffer.concat(dd,ll));

              if (ll>=req.query.lens) {console.log('n:'+req.query.index);
                console.log('ok');
                var date=new Date();
                var y=date.getFullYear(),
                    m=date.getMonth()+1,
                    d=date.getDate();

                    m=m.toString().length<2?'0'+m:m;
                    d=d.toString().length<2?'0'+d:d;
                var filep='/imgs/'+y+'/'+m+'/'+d+'/'+uploadToken+'_'+unescape(req.query.name);
                var p='./public'+filep;

                mkYYMMDDfilePath(function(){
                // fs.exists(__path+y,function(ist){
                //   if (ist) {
                //     fs.exists(__path+y+'/'+m,function(est){
                //       if(est){
                //         fs.exists(__path+y+'/'+m+'/'+d,function(dt){
                //           if (dt) {}
                //         });
                //       }else{
                //         __path+=(y+'/'+m+'/'+d+'/'+uploadToken+'_'+unescape(req.query.name));
                //       }
                //     });
                //   }else{
                //     fs.mkdir(__path+y+'/'+m+'/'+d+'/'+uploadToken+'_'+unescape(req.query.name));
                //   }
                // });

                  fs.open(p, 'a', function (err, fd) {
                    if (err) {
                      throw err;
                    }
                    fs.write(fd, Buffer.concat(dd,ll),0, ll,0,function(){
                      // if (!abort) {
                      //   res.write('callBackIndex('+req.query.index+');');
                      // };
                        var _file={
                          token:uploadToken,
                          index:req.query.index
                        }
                        var odata=req.query.other_data;
                        if (odata) {
                          var ins=JSON.parse(odata).index;
                          _file.ins=ins;
                        };
                        global['_file'+uploadToken]=_file;

                        if (req.query.chunks==req.query.index*1+1) {
                          var bkdata={
                            path:host+filep,
                            fieldIndex:req.query.fieldIndex,
                            __hash__:req.query.__hash__
                          }

                          if(req.query.other_data){
                            bkdata.other_data=req.query.other_data;

                          }
                          var bk='window.callback_('+JSON.stringify(bkdata)+')';
                         // bk+=';if(window.top!=window){window.parent.callback('+JSON.stringify(bkdata)+')}';
                          global['_file'+uploadToken]=null;
                          res.write(bk);
                        }
                        fs.close(fd,function(){});
                        res.end();
                      });
                  });
                });
              }
            });
          };
        };

          form.parse(req,function(err,field,files){
            err&&console.log(err);
            if (isIE789==1) {
              var files=files.uploadfile;

              if (files) {
                var date=new Date();
                var y=date.getFullYear(),
                    m=date.getMonth()+1,
                    d=date.getDate();

                    m=m.toString().length<2?'0'+m:m;
                    d=d.toString().length<2?'0'+d:d;
                var filep='/imgs/'+y+'/'+m+'/'+d+'/'+uploadToken+'_'+unescape(files.name);

                mkYYMMDDfilePath(function(){

                  fs.renameSync(files.path,'./public/'+filep);
                  var bkdata={
                    path:host+filep
                  }

                  if(req.query.other_data){
                    bkdata.other_data=req.query.other_data;
                  }
                  bk='<script>window.parent.callback_('+JSON.stringify(bkdata)+');</script>';
                  //bk+=';if(window.parent.top!=window.parent){window.parent.parent.callback('+JSON.stringify(bkdata)+')}</script>';
                  res.write(bk);
                  res.end();
                });
              }else{
                res.end();
              };
            };
          });
    };


});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
