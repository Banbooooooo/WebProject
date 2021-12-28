const express = require('express')
const http = require('http');
const fs = require('fs');
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const cal = require('./js/Module.js');
var i = 0;

//mongoose.connect('mongodb://172.21.2.236:27017/190110910528');
mongoose.connect('mongodb://localhost/190110910528');

// const TUser = mongoose.model('TDepartment', schema);
// const user = new TUser({ id: '1', username: 'abc', password: '123456', sex: '男', birth: new Date('2014-03-01T08:00:00Z'), department: '信息管理与人工智能学院', grade: '2019级' }
// );
// user.save().then(() => console.log('usermeow'));


app.use('/', express.static('js'));
app.use('/', express.static('css'));
app.use('/', express.static('images'));
app.use('/', express.static('public'));
app.use('/images/loge.JPG', express.static('/favicon.ico'));

// const server = http.createServer((req, res) => {
//     const url0 = req.url.split('?')[0];
//     const url1=req.url;

//     res.statusCode = 200;
//     if (req.url === '/favicon.ico') {
//         res.setHeader('Content-Type', 'image/jpg');
//         fs.readFile('', function (err, data) {
//             if (err) return console.error(err);
//             // console.log(data.toString());
//             res.write(data);
//             res.end();
//         });
//     }
//     else if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         fs.readFile('index.html', function (err, data) {
//             if (err) return console.error(err);
//             // console.log(data.toString());
//             res.write(data);
//             res.end()
//         });
//     }
//     else if (req.url === '/testhref') {
//         res.setHeader('Content-Type', 'text/html');
//         fs.readFile('testhref.html', function (err, data) {
//             if (err) return console.error(err);
//             // console.log(data.toString());
//             res.write(data);
//             res.end()
//         });
//     }
//     else {
//         if (url0 === '/input') {
//             const x = parseFloat(url1.split('=')[1].split('&')[0]);
//             const y = parseFloat(url1.split('=')[2].split('&')[0]);
//             const submit1 = url1.split('=')[3];
//             if(submit1==="%2B"){
//                 ejs.renderFile('result.html',{result:cal.add(x,y)},function(err,str){
//                     //str=>输出渲染后的HTML字符串
//                     if(err){console.log('File is error.')}
//                     else{
//                         res.setHeader('Content-Type', 'text/html');
//                         res.end(str);
//                     }
//                 });
//             }
//             else if(submit1==="-"){
//                 ejs.renderFile('result.html',{result:cal.sub(x,y)},function(err,str){
//                     //str=>输出渲染后的HTML字符串
//                     if(err){console.log('File is error.')}
//                     else{
//                         res.setHeader('Content-Type', 'text/html');
//                         res.end(str);
//                     }
//                 });
//             }
//             else if(submit1==="*"){
//                 ejs.renderFile('result.html',{result:cal.mul(x,y)},function(err,str){
//                     //str=>输出渲染后的HTML字符串
//                     if(err){console.log('File is error.')}
//                     else{
//                         res.setHeader('Content-Type', 'text/html');
//                         res.end(str);
//                     }
//                 });
//             }
//             else if(submit1==="%2F"){
//                 ejs.renderFile('result.html',{result:cal.div(x,y)},function(err,str){
//                     //str=>输出渲染后的HTML字符串
//                     if(err){console.log('File is error.')}
//                     else{
//                         res.setHeader('Content-Type', 'text/html');
//                         res.end(str);
//                     }
//                 });
//             }
//             else{
//                 res.end('There is not our router.')
//             }
//         }
//         else {
//             res.setHeader('Content-Type', 'text/html');
//             res.end("input")
//         }
//     }
// })

app.listen(3000);