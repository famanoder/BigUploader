(function(factory){if(typeof exports==="object"){module.exports=factory()}else if(typeof define==="function"&&define.amd){define(factory)}else{var glob;try{glob=window}catch(e){glob=self}glob.SparkMD5=factory()}})(function(undefined){"use strict";var add32=function(a,b){return a+b&4294967295},hex_chr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32(a<<s|a>>>32-s,b)}function ff(a,b,c,d,x,s,t){return cmn(b&c|~b&d,a,b,x,s,t)}function gg(a,b,c,d,x,s,t){return cmn(b&d|c&~d,a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return cmn(c^(b|~d),a,b,x,s,t)}function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3])}function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24)}return md5blks}function md5blk_array(a){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=a[i]+(a[i+1]<<8)+(a[i+2]<<16)+(a[i+3]<<24)}return md5blks}function md51(s){var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)))}s=s.substring(i-64);length=s.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=s.charCodeAt(i)<<(i%4<<3)}tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state}function md51_array(a){var n=a.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk_array(a.subarray(i-64,i)))}a=i-64<n?a.subarray(i-64):new Uint8Array(0);length=a.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i+=1){tail[i>>2]|=a[i]<<(i%4<<3)}tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=n*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state}function rhex(n){var s="",j;for(j=0;j<4;j+=1){s+=hex_chr[n>>j*8+4&15]+hex_chr[n>>j*8&15]}return s}function hex(x){var i;for(i=0;i<x.length;i+=1){x[i]=rhex(x[i])}return x.join("")}if(hex(md51("hello"))!=="5d41402abc4b2a76b9719d911017c592"){add32=function(x,y){var lsw=(x&65535)+(y&65535),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}}if(typeof ArrayBuffer!=="undefined"&&!ArrayBuffer.prototype.slice){(function(){function clamp(val,length){val=val|0||0;if(val<0){return Math.max(val+length,0)}return Math.min(val,length)}ArrayBuffer.prototype.slice=function(from,to){var length=this.byteLength,begin=clamp(from,length),end=length,num,target,targetArray,sourceArray;if(to!==undefined){end=clamp(to,length)}if(begin>end){return new ArrayBuffer(0)}num=end-begin;target=new ArrayBuffer(num);targetArray=new Uint8Array(target);sourceArray=new Uint8Array(this,begin,num);targetArray.set(sourceArray);return target}})()}function toUtf8(str){if(/[\u0080-\uFFFF]/.test(str)){str=unescape(encodeURIComponent(str))}return str}function utf8Str2ArrayBuffer(str,returnUInt8Array){var length=str.length,buff=new ArrayBuffer(length),arr=new Uint8Array(buff),i;for(i=0;i<length;i+=1){arr[i]=str.charCodeAt(i)}return returnUInt8Array?arr:buff}function arrayBuffer2Utf8Str(buff){return String.fromCharCode.apply(null,new Uint8Array(buff))}function concatenateArrayBuffers(first,second,returnUInt8Array){var result=new Uint8Array(first.byteLength+second.byteLength);result.set(new Uint8Array(first));result.set(new Uint8Array(second),first.byteLength);return returnUInt8Array?result:result.buffer}function hexToBinaryString(hex){var bytes=[],length=hex.length,x;for(x=0;x<length-1;x+=2){bytes.push(parseInt(hex.substr(x,2),16))}return String.fromCharCode.apply(String,bytes)}function SparkMD5(){this.reset()}SparkMD5.prototype.append=function(str){this.appendBinary(toUtf8(str));return this};SparkMD5.prototype.appendBinary=function(contents){this._buff+=contents;this._length+=contents.length;var length=this._buff.length,i;for(i=64;i<=length;i+=64){md5cycle(this._hash,md5blk(this._buff.substring(i-64,i)))}this._buff=this._buff.substring(i-64);return this};SparkMD5.prototype.end=function(raw){var buff=this._buff,length=buff.length,i,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff.charCodeAt(i)<<(i%4<<3)}this._finish(tail,length);ret=hex(this._hash);if(raw){ret=hexToBinaryString(ret)}this.reset();return ret};SparkMD5.prototype.reset=function(){this._buff="";this._length=0;this._hash=[1732584193,-271733879,-1732584194,271733878];return this};SparkMD5.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}};SparkMD5.prototype.setState=function(state){this._buff=state.buff;this._length=state.length;this._hash=state.hash;return this};SparkMD5.prototype.destroy=function(){delete this._hash;delete this._buff;delete this._length};SparkMD5.prototype._finish=function(tail,length){var i=length,tmp,lo,hi;tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(this._hash,tail);for(i=0;i<16;i+=1){tail[i]=0}}tmp=this._length*8;tmp=tmp.toString(16).match(/(.*?)(.{0,8})$/);lo=parseInt(tmp[2],16);hi=parseInt(tmp[1],16)||0;tail[14]=lo;tail[15]=hi;md5cycle(this._hash,tail)};SparkMD5.hash=function(str,raw){return SparkMD5.hashBinary(toUtf8(str),raw)};SparkMD5.hashBinary=function(content,raw){var hash=md51(content),ret=hex(hash);return raw?hexToBinaryString(ret):ret};SparkMD5.ArrayBuffer=function(){this.reset()};SparkMD5.ArrayBuffer.prototype.append=function(arr){var buff=concatenateArrayBuffers(this._buff.buffer,arr,true),length=buff.length,i;this._length+=arr.byteLength;for(i=64;i<=length;i+=64){md5cycle(this._hash,md5blk_array(buff.subarray(i-64,i)))}this._buff=i-64<length?new Uint8Array(buff.buffer.slice(i-64)):new Uint8Array(0);return this};SparkMD5.ArrayBuffer.prototype.end=function(raw){var buff=this._buff,length=buff.length,tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i,ret;for(i=0;i<length;i+=1){tail[i>>2]|=buff[i]<<(i%4<<3)}this._finish(tail,length);ret=hex(this._hash);if(raw){ret=hexToBinaryString(ret)}this.reset();return ret};SparkMD5.ArrayBuffer.prototype.reset=function(){this._buff=new Uint8Array(0);this._length=0;this._hash=[1732584193,-271733879,-1732584194,271733878];return this};SparkMD5.ArrayBuffer.prototype.getState=function(){var state=SparkMD5.prototype.getState.call(this);state.buff=arrayBuffer2Utf8Str(state.buff);return state};SparkMD5.ArrayBuffer.prototype.setState=function(state){state.buff=utf8Str2ArrayBuffer(state.buff,true);return SparkMD5.prototype.setState.call(this,state)};SparkMD5.ArrayBuffer.prototype.destroy=SparkMD5.prototype.destroy;SparkMD5.ArrayBuffer.prototype._finish=SparkMD5.prototype._finish;SparkMD5.ArrayBuffer.hash=function(arr,raw){var hash=md51_array(new Uint8Array(arr)),ret=hex(hash);return raw?hexToBinaryString(ret):ret};return SparkMD5});
	var utils=function(){
			var getRandomStr=function(){
				var str='abcdefghijklmnopqrstuvwxyz';
				var specil='_$';
				var num='0123456789';
				var getChar=function(){
					var x=Math.random().toFixed(1)>=0.5?1:0;
					var c=str.substr(Math.floor(Math.random()*26),1);
					return x?c:c.toUpperCase();
				}
				var getSp=function(){
					return specil.substr(Math.floor(Math.random()*specil.length),1);
				}
				var getNum=function(){
					return num.substr(Math.floor(Math.random()*num.length),1);
				}
				var s1=Math.round(Math.random()*100000).toString(16);
				var len=Math.ceil(Math.random())*10+10;
				for(var i=0;i<len-s1.length;i++){
					var xx=Math.ceil(Math.random())*2-1;
					var xxx=Math.random().toFixed(1)>=0.5?1:0;
					if (xx==1) {
						xxx?s1+=getChar():s1=getChar()+s1;
					};
					if (xx=2) {
						xxx?s1=getSp()+s1:s1+=getSp();
					};
					if (xx=3) {
						xxx?s1=getNum()+s1:s1+=getNum();
					};
				}
				return s1;
			}
			var loc=window.location;
			var search=loc.search.substr(1);
			var searchArr=search.indexOf('&')!=-1?search.split('&'):[search];
			function getURLData(k) {
			    var param = {};
			    for (var i = 0; i < k.length; i++) {
			    	if(k[i]!=""){
			    		var v = k[i].split('=');
				        for (var j = 0; j < v.length; j++) {
				            var key = decodeURIComponent(v[0]);
				            var value = decodeURIComponent(v[1]);
				            param[key] = value;
				        }
			    	}else{
			    		return false;
			    	}
			    }
			    return param;
			}
			var url={
			    query:getURLData(searchArr),
			    setParam:function(name,value){
			    	// return search
					var param=getURLData(searchArr);
					param[name]=value;
					var parArr=[];
					for(var i in param){
						parArr.push(i+'='+param[i]);
					}
					//location.href=location.pathname+"?"+parArr.join('&');
					return parArr.join('&');
				},
			    param:function(par){
			    	return getURLData(searchArr)[par];
			    }
			}
			var cookie={
				setCookie:function(name,value,timeout){//timeout以分来记
					var timeout=timeout||99999999;//生命周期默认为10分钟
					var date=new Date();
					date.setTime(date.getTime()+(timeout*60*1000));
					document.cookie=name+'='+escape(value)+'; expires='+date.toGMTString();
				},
				getCookie:function(name){
					if(document.cookie!=''){
						var cokArr=document.cookie.split('; ');
						for(var i=0;i<cokArr.length;i++){
							var kv=cokArr[i].split('=');
							if(kv[0]==name){
								return unescape(kv[1]);
							}
						}
					}
				},
				clearCookie:function(name){
					this.setCookie(name,'',-1);
				}
			}
			var cookies=function () {
				var cks=document.cookie.split(';'),obj={};
				for(var i=0;i<cks.length;i++){
					obj[cks[i].split('=')[0].replace(/\s+/ig,'')]=unescape(cks[i].split('=')[1]);
				}
				return obj;
			}();
			var ie=function(ua){
				var iebool=/msie/ig.test(ua);
				return {
					is:function(){
						return iebool;
					},
					v:iebool?ua.match(/msie (\d+)/)[1]:undefined
				}
			}(navigator.userAgent.toLowerCase());

			var Browser={
				isIE:ie.is(),
				IEVersion:ie.v
			}
			var fileInfo=function(obj){
				var s={};
				if (obj.files&&obj.files[0]) {
					s.size=obj.files[0].size;
				}else{
					// if (obj.value) {
					// 	var fso = new ActiveXObject("Scripting.FileSystemObject");

					// 	obj.select();
				 //        obj.blur();
				 //        var realpath = document.selection.createRange().text;
				 //        s.size=fso.GetFile(realpath).size;

					// };
				};
				if (obj.value) {
					var prefix=obj.value.toLowerCase().substr(obj.value.lastIndexOf('.')+1);
					s.type=prefix;
					s.name=escape(obj.value.substr(obj.value.lastIndexOf('\\')+1));
				};
				return s;
			}
			var fileLimits=function(){
				var accepts=url.query.accept?url.query.accept.toLowerCase():'jpeg,png',s={};

				if (accepts) {
					var acpts=[];
					if (accepts.indexOf(',')!=-1) {
						acpts=accepts.split(',');
					}else{
						acpts=[accepts];
					};
					s.accepts=acpts;
				};

				return s;
			}();
			var format=function(){
				var spe=['B','K','M','G'];
				return {
					fileSize:function(s){
						var fmed='';
						if (s<1000) {
							fmed=s+spe[0];
						}else if(s>=1000&&s<=1024*1000){
							fmed=parseFloat(s/1024).toFixed(2)+spe[1];
						}else if(s>1024*1000&&s<1024*1024*1000){
							fmed=parseFloat(s/1024/1024).toFixed(2)+spe[2];
						}else{
							fmed=parseFloat(s/1024/1024/1024).toFixed(2)+spe[3];
						};
						return fmed;
					},
					ss2hhmmss:function(ss){
						var h=0,m=0,s=0;
						if (ss<60) {
							s=ss;
						}else if(ss>=60&&ss<60*60){
							m=parseInt(ss/60);
							s=ss-(m*60);
						}else if(ss>=60*60){
							h=parseInt(ss/60/60);
							m=parseInt((ss-(h*60*60))/60);
							s=ss-(h*60*60+m*60);
						}
						var add0=function(z){
							return z.toString().length<2?'0'+z:z;
						}
						return add0(h)+':'+add0(m)+':'+add0(s);
					}
				}
			}();
			function Files(obj){
			    this.files=obj.files;
			    this.__token__=utils.getRandomStr();
			    this.url=obj.url||location.href;
			    this.chunkSize=obj.chunkSize||200*1024;
			    this.chunks=Math.ceil(this.files.size/this.chunkSize);
			    this.index=0;
			    this.fieldIndex=obj.fieldIndex||0;
			    this.hash='';
				this.startTime=new Date().getTime();
				this.speed=0;
			    this.onprogress=obj.onprogress||function(p){console.log(p);};
			  }
			  Files.prototype={
			    postFiles:function(){
				  var $self=this;
				  if (this.files.size>50*1024*1024) {

				    var fileReader = new FileReader(),spark = new SparkMD5.ArrayBuffer();
				    fileReader.onload = function (e) {
				          spark.append(e.target.result);
						  spark.append($self.files.lastModifiedDate.toString());
						  var spark1 = new SparkMD5();
						  spark1.append($self.files.name);
						  var spark2 = new SparkMD5();
						  spark2.append($self.files.lastModifiedDate.toString());
						  var spark3 = new SparkMD5();
						  spark3.append($self.files.size);
						  var spark4 = new SparkMD5();
						  spark4.append(spark.end()+spark1.end()+spark2.end()+spark3.end());
						  $self.hash=spark4.end();
				          // window.__hash__=$self.hash;
				          var stored=localStorage.getItem('fileUploadInfos');
				          var odata=utils.url.query.other_data,
				                ins=0;
				              if (odata) {
				                ins=JSON.parse(odata).index;
				              }
				          if (stored&&JSON.parse(stored).length) {
				            var c=0,tk=0;
				            JSON.parse(stored).forEach(function(sd){
				              if (odata) {
				                if (sd&&sd.hash==$self.hash&&ins==sd.ins) {
				                  tk=sd.__token;
				                  c++;
				                }
				              }else{
				                if (sd&&sd.hash==$self.hash) {
				                  tk=sd.__token;
				                  c++;
				                }
				              }
				            });
				            if (c) {
				              var _data={
				                token:tk,
				                getfileinfo:1
				              }
				              if (odata) {
				                _data.ins=ins;
				              };
				              $.post('http://localhost:5000/uploader',_data).then(function(data){
				                if (data.mes==1) {
				                  $self.index=data.index*1+1;
				                }
				                $self.__token__=tk;
				                $self.postSlice();
				              });
				            }else{
				              var willload={
				                __token:$self.__token__,
				                status:'will',
				                hash:$self.hash
				              }
				              if (odata) {
				                willload.ins=ins;
				              };
				              var lodd=JSON.parse(stored);
				              lodd.push(willload);
				              localStorage.setItem('fileUploadInfos',JSON.stringify(lodd));
				              $self.postSlice();
				            };
				          }else{
				            var willload={
				              __token:$self.__token__,
				              status:'will',
				              hash:$self.hash
				            }
				            if (odata) {
				              willload.ins=ins;
				            };
				            localStorage.setItem('fileUploadInfos',JSON.stringify([willload]));
				            $self.postSlice();
				          }
				      };
				    fileReader.readAsArrayBuffer(this.files.slice(0, 10240));
				  }else{
				    this.postSlice();
				  };
				},
			    postSlice:function(){
			      var $self=this;
			      if (this.index>=this.chunks) {
			        return false;
			      };
			      this.start=this.index*this.chunkSize;
			      this.end=Math.min(this.files.size,this.start+this.chunkSize);

			      var self=this;
			      var fd = new FormData();
			      fd.append("sliceData", this.files.slice(this.start,this.end));
			      var other_data=utils.url.query.other_data;
			      other_data=other_data?other_data:'';

			      this.url='http://localhost:5000/uploader?index='+this.index+'&chunks='+this.chunks+'&host='+(location.protocol+'//'+location.host)+'&__token__='+this.__token__+'&isIE=0&lens='+(this.end-this.start)+'&name='+escape(this.files.name)+'&other_data='+other_data+'&fieldIndex='+this.fieldIndex+'&__hash__='+this.hash;
			      var xhr = new XMLHttpRequest();
			      xhr.upload.addEventListener("progress", function(evt){
			        if (evt.lengthComputable) {
			          var led=self.index*self.chunkSize*1+evt.loaded*1;
			          var p=parseFloat((led)/self.files.size*100).toFixed(2);
			          p=p>=100?100:p;
					  self.speed=led/((new Date().getTime()-self.startTime)/1000);
					  var restTime=self.files.size/self.speed*1000-(new Date().getTime()-self.startTime);
					  var probar=$('.prograssInfo[data-index="'+self.fieldIndex+'"]');
					  probar.find('.speed').html(format.fileSize(self.speed)+'/s');
					  probar.find('.rest').html(format.ss2hhmmss(Math.ceil(restTime/1000)));

			          self.onprogress&&self.onprogress(p);
			        }else {
			          console.log('unable to compute');
			        }
			      }, false);
			      xhr.addEventListener("load", function(){
			      	eval(xhr.responseText);
			        self.index++;
			        self.postSlice();

			      }, false);
			      xhr.open("POST", this.url);
			      // xhr.addEventListener("error", uploadFailed, false);
			      xhr.addEventListener("abort", function () {
			        //记录断点信息
			      }, false);
			      xhr.send(fd);
			    }
			  }

			return {
				Browser:Browser,
				getRandomStr:getRandomStr,
				url:url,
				cookie:cookie,
				cookies:cookies,
				getFileInfo:fileInfo,
				fileLimits:fileLimits,
				format:format,
				Files:Files
			}
		}();
	$(function(){

		window.dropedCouldStart=true;
		// utils.cookie.setCookie('__token__',utils.getRandomStr());

		var uploader=function(){
			return {
				init:function(o){
					var contID=o.id,
						accept=utils.fileLimits.accepts,
						dragArea=o.dragArea||document,
						btnText=o.btnText||'选择上传文件',
						btnClass=o.btnClass,
						maxFileSize=o.ms||utils.url.query.ms||200,//K
						btnStyle={
							padding:'0.7em 0',
							width:'140px',
							textAlign:'center',
							fontSize:'14px',
							color:'#fff',
							background:'blue',
							position :'relative',
							borderRadius:'3px'
						},
						prograssWidth=o.prograssWidth*1||280;

					var ltIE10=utils.Browser.IEVersion<10?true:false;
					var other_data=utils.url.query.other_data;
					other_data=other_data?other_data:'';
					var formToken=utils.getRandomStr();
					var action='http://localhost:5000/uploader?isIE=1&__token__='+formToken+'&host='+(location.protocol+'//'+location.host)+'&other_data='+other_data;
					var form=$('<form method="POST" action="" target="uploadFileHideFrame" enctype="multipart/form-data" id="uploaderForm"></form>');

					var uploadBtn=$('<div id="uploadBtn" class="'+(btnClass?btnClass:'')+'">'+btnText+'</div>');
					var isMultiple='';
					if (window.top==window) {
						isMultiple='multiple';
					}
					var inputFile=$('<input name="uploadfile" accept=".'+accept.join(',.')+'" type="file" '+isMultiple+' id="uploadFile">');

					inputFile.attr('style','position:absolute;top:10px;left:-100px;right:0;bottom:0;opacity:0;filter:alpha(opacity=0);');
					(!btnClass)&&uploadBtn.css(btnStyle);

					form
					.append(uploadBtn.append(inputFile));

					$(contID)
					.append(form);

					if (!ltIE10) {
						$(contID).append('<div class="dragmask" style="line-height:'+$(window).height()+'px;">+</div>');
					}

					var fieldItem=function (index,name,size) {
						var delthis='delthis';
						var dn='';
						if (index==0&&window.top==window&&!ltIE10) {
							dn='display:none;';
						}
						if (window.top!=window||ltIE10) {
							delthis='';
						}
						return [
							'<div data-index="'+index+'" status=0 class="prograssInfo" style="width:'+(prograssWidth+150)+'px;">',
								'<div class="sptip" style="display:none;">speed:<span class="speed"></span>&nbsp;&nbsp;rest:<span class="rest"></span></div>',
								'<div style="overflow:hidden;">',
									'<p class="uploadFileName" style="margin-bottom: 6px;max-width:'+prograssWidth+'px;float:left;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+name+'</p>',
									'<span style="float:left;">（<span class="uploadFileSize">'+size+'</span>）</span>',
								'</div>',
								'<div style="overflow:hidden;">',
									'<div class="prograssBar" style="float:left;width:'+prograssWidth+'px;height:8px;border:1px solid #F36A0E;top:2px;border-radius:5px;position:relative;">',
										'<div class="prograssWidth" style="position:absolute;left:0;top:0;bottom:0;background:#f60;border-radius:4px;"></div>',
									'</div>',
									'<span class="prograssPercent" style="float:left;margin-left:10px;">0%</span>',
									'<a class="cancelUpload '+delthis+'" style="'+dn+'float:left;margin-left:10px;color:#29b0ea;cursor:pointer;">取消</a>',
									'<a class="lookUploadedFile" style="display:none;float:left;margin-left:10px;color:#29b0ea;cursor:pointer;">预览</a>',
								'</div>',
							'</div>'
						].join('');
					}
					var filesArr=null;
					var startFile=function(files) {
						var ff=$('.prograssInfo[status=0]').first();
						var ins=ff.attr('data-index');
						if (ins&&window.dropedCouldStart) {
							ff.find('.delthis').hide();
							var Files=new utils.Files({
								files:files[ins],
								chunkSize:10*1024*1024,
								fieldIndex:ins,
								onprogress:function(p){
									window.dropedCouldStart=false;
									callbk(p,ins);
									if(p>=100){
										window.dropedCouldStart=true;
										$('.prograssInfo[data-index='+ins+']').attr('status',1).find('.delthis').show();
										startFile(filesArr);
									}
								}
							});
							Files.postFiles();
						}
					}

					var dropCount=0;
					var createField=function (files) {
						if (files) {
							var _filesArr=[].slice.call(files,0);
							var _files=[];//过滤type size
							for(var i=0;i<_filesArr.length;i++){
								var _name=_filesArr[i].name;
								if(_filesArr[i].size<maxFileSize&&
									$.inArray(_name.substr(_name.lastIndexOf('.')+1).toLowerCase(),accept)!=-1){
									_files.push(_filesArr[i]);
								}else{
									console.warn('file:'+_name+' is too big or is not access type.please check it!');
								};
							}
							if (filesArr&&filesArr.length) {
								filesArr=filesArr.concat(_files);
							}else{
								filesArr=_files;
							}
							for (var i = filesArr.length-_files.length; i < filesArr.length; i++) {
								$(contID)
								.append(fieldItem(i,filesArr[i].name,utils.format.fileSize(filesArr[i].size)))
							}
							if (window.dropedCouldStart==true&&filesArr&&filesArr.length) {
								$('#uploadBtn').hide();
								startFile(filesArr);
							}
						}
					}
					if (!ltIE10) {
						dragArea.addEventListener("dragenter", function(e){
					    	e.stopPropagation(); e.preventDefault();
					    	$(".dragmask").addClass('dragmask_over').removeClass('dragmask_out');
					    }, false);
					　　dragArea.addEventListener("dragover" , function(e){
							e.stopPropagation(); e.preventDefault();
						}, false);
						dragArea.addEventListener("dragleave" , function(e){
							e.stopPropagation(); e.preventDefault();
							$(".dragmask").removeClass('dragmask_over').addClass('dragmask_out');
						}, false);
						dragArea.addEventListener("drop", function(e){
							$(".dragmask").removeClass('dragmask_over').addClass('dragmask_out');
							dropCount++;
					　　　　e.stopPropagation();
					　　　　e.preventDefault();
							if (window.top==window) {
								createField(e.dataTransfer.files);
							}else{
								if (dropCount>1) {
									return false;
								}
								createField([e.dataTransfer.files[0]]);
							}
					　　　　

					　　}, false);
					}
					$('body')
					.append('<iframe src="" frameborder="0" name="uploadFileHideFrame" style="display:none;"></iframe>')
					.append('<iframe src="" frameborder="0" class="hifram" style="display:none;"></iframe>')
					.on('change','#uploadFile',function(){

						// var fileSize=finfo.size;


						// if (fileSize/1024>maxFileSize) {
						// 	console.log('too much big');
						// 	return false;
						// };

						if (this.files) {
						  	createField(this.files);
						}else{
							$('#uploadBtn').hide();
							var finfo=utils.getFileInfo(this);
							var fileType=finfo.type;
							if ($.inArray(fileType, accept)==-1) {
								console.log('not access type');
								return false;
							};

							action+='&name='+finfo.name;
							$(contID).append(fieldItem(0,finfo.name,'--'));
							$('#uploaderForm').attr('action',action).submit();
							// var getData=function(){
							// 	$.post('http://localhost:5000/uploader',{
							// 		getfileinfo:1,
							// 		uploadtoken:utils.cookie.getCookie('__token__')
							// 	}).then(function(data){
							// 		console.log(data);
							// 		if (data.mes<0) {
							// 			getData();
							// 		}else{
							// 			var pros=data.info;
							// 			callbk(pros.percent);
							// 			if (pros.percent!='100') {
							// 				getData();
							// 			};
							// 		};
							// 	});
							// }
							// getData();
							var getLoaded=setInterval(function(){
								$.post('http://localhost:5000/uploader',{
									getfileinfo:2,
									uploadtoken:formToken
								}).then(function(data){
									if (data) {
										var pros=data.info;
										if (pros) {
											callbk(pros.percent);
											$('.uploadFileSize').html(utils.format.fileSize(pros.lens));
											if (pros.percent>='100') {
												clearInterval(getLoaded);
											};
										}
									};
								});
							}, 500)
						};
						// $('#uploaderForm').submit();

						// var o=0;
						// var getLoaded=setInterval(function(){
						// 	$.post('http://localhost:5000/uploader',{
						// 		getfileinfo:1,
						// 		uploadtoken:utils.cookie.getCookie('__token__')
						// 	}).then(function(data){
						// 		if (data) {
						// 			var pros=data.info;
						// 			callbk(pros.percent);
						// 			console.log(o++)
						// 			if (pros.percent>='100') {
						// 				clearInterval(getLoaded);
						// 				console.log('end')
						// 			};
						// 		};
						// 	});
						// }, 500)
					})
					.on('click','.cancelUpload',function(){
						if ($(this).hasClass('delthis')) {
							$(this).parents('.prograssInfo').slideUp('fast',function(){
								$(this).remove();
								if (!$('.prograssInfo').length) {
									$('#uploadBtn').show();
								}
							});
							return false;
						}
						location.reload();
					})
					.on('click','.lookUploadedFile',function(){
						var oper=window.open($(this).attr('_src'));
						oper.document.body.innerHTML='<img src="'+$(this).attr('_src')+'">';
					})
					.on('mouseenter','.prograssInfo',function(){
						$(this).find('.sptip').slideDown('fast');
					})
					.on('mouseleave','.prograssInfo',function(){
						$(this).find('.sptip').slideUp('fast');
					});
				}
			}
		}();


		uploader.init({
			id:'#uploadFilePlaceholder',
			accept:utils.url.query.accept,
			btnText:utils.url.query.btnText,
			btnClass:utils.url.query.btnClass,
			ms:1024*1024*2//2G
		});
	});
function callbk(n,f){
	if (f!=undefined) {
		var fb=$('.prograssInfo[data-index="'+f+'"]');
		fb.find('.prograssPercent').html(n+'%');
		fb.find('.prograssWidth').width($('.prograssBar').width()*n/100);
	}else {
		$('.prograssPercent').html(n+'%');
		$('.prograssWidth').width($('.prograssBar').width()*n/100);
	}

}
window.callback_=function(data){
	 if (localStorage&&(!utils.Browser.IEVersion||utils.Browser.IEVersion>=10)) {
	    var odata=utils.url.query.other_data,
	        ins=0;
	      if (odata) {
	        ins=JSON.parse(odata).index;
	      }
	    var storedInfo=localStorage.getItem('fileUploadInfos');
	    if (data.__hash__) {
	      storedInfo=JSON.parse(storedInfo);
	      var okToken=[];
	      for(var i=0;i<storedInfo.length;i++){
	        if (odata) {
	          if (storedInfo[i].hash==data.__hash__&&ins==storedInfo[i].ins) {
	            okToken.push(storedInfo[i].__token);
	          }
	        }else{
	          if (storedInfo[i].hash==data.__hash__) {
	            okToken.push(storedInfo[i].__token);
	          }
	        }
	        var okInfo=[];
	        for(var k=0;k<storedInfo.length;k++){
	        	if ($.inArray(storedInfo[k].__token,okToken)==-1) {
	        		okInfo.push(storedInfo[k]);
	        	}
	        }
	      }
	      localStorage.setItem('fileUploadInfos',JSON.stringify(okInfo));
	    }
	  }
	$('.lookUploadedFile').attr('_src',data.path);
	$('.prograssInfo[data-index="'+data.fieldIndex+'"]').attr('fileurl',data.path);
	var acrossDomainPath=utils.url.query.setDomainPath;
	if (window.top!=window) {
		$('.hifram').attr('src',acrossDomainPath+'?datas='+JSON.stringify(data));
	}

	if (utils.url.query.show==1) {
		if (window.top==window) {
			$('.prograssInfo[data-index="'+data.fieldIndex+'"]').find('.lookUploadedFile').show();
		}else{
			$('.lookUploadedFile').show();
		}
	}
}