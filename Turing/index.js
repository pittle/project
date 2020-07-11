var http = require('http');

var url = require('url');//处理url的对象

var fs = require('fs');

var req = require('request'); //发送请求的模块 npm install request --save

http.createServer(function (request,response) {
       //必须知道要请求什么东西(request)
       //所以需要获取请求的url(request.url是个字符串)
       // console.log(request.url); ///robot.html?a=1
       var pathname = url.parse(request.url).pathname;
       console.log(url.parse(request.url).pathname);
       //拿到url后就需要将这个请求的url对应的文件返回给浏览器(就需要读取文件了)
        isStatic = isStaticFile(pathname);
       //如果是静态文件
       if(isStatic){
              try{//能找到页面，返回页面数据
                     var data = fs.readFileSync(__dirname + '/page' + pathname);
                     response.writeHead(200);
                     response.write(data);
                     response.end();
              }catch(e){//找不到页面404
                     response.writeHead(404);
                     response.write("<html><body><h1>404 NotFound</h1></body></html>");
                     response.end();
              }
       }else{ //如果不是静态文件,执行这个部分
              console.log(pathname);
            if(pathname == '/api/chat'){
                   var param = url.parse(request.url,true).query;
                   var data = {
                          "reqType":0,
                          "perception": {
                                 "inputText": {
                                        "text": param.text
                                 }
                          },
                          "userInfo": {
                                 "apiKey": "ed84df4a74e24b0c918081060d4a9aa4",
                                 "userId": "123456"
                          }
                   };
                   var content = JSON.stringify(data);
                   req({
                          url:"http://openapi.tuling123.com/openapi/api/v2",
                          method:'POST',
                          headers:{
                                 'content-type':"application/json"
                          },
                          body:content
                   },function (error,resp,data) {//错误 响应 数据
                            if(!error && resp.statusCode == 200){
                                   //把结果返回给前端页面
                                   var head = {'Access-Control-Allow-Origin':'*',
                                        "Access-Control-Allow-Methods":'GET',
                                       'Access-Control-Allow-Headers':'x-request-with,content-type'}
                                   response.writeHead(200,head);
                                   var obj = JSON.parse(data);
                                   //为啥要一层一层写？ 严谨性判断
                                   //如果你因为某一层没写,而这一层如果为空的话,你写下一层就会导致报错
                                   if(obj && obj.results && obj.results.length > 0 && obj.results[0].values){
                                          response.write(JSON.stringify(obj.results[0].values));
                                          console.log(obj.results[0].values);
                                          response.end();
                                   }else{//格式不正确
                                          response.write("{text:'不知道你说的是什么'}");
                                          response.end();
                                   }

                            }else{
                                   //返回给自己前端一个400错误
                                   resp.writeHead(400);
                                   resp.write('数据异常');
                                   resp.end();
                            }
                   });

            }else{//接口访问错了
                   console.log('接口错误404');
            }
       }

}).listen(12307);

function  isStaticFile(pathname) {
       var staticFile = ['.html','.css','.jpg','.jpeg','.png','.gif','.ico'];
       for(var i = 0;i < staticFile.length; i ++){
              if(pathname.indexOf(staticFile[i]) == pathname.length - staticFile[i].length){
                     return true;
              }
       }
       return false;
}