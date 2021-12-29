const express = require('express');
const path=require('path');
const http = require('http');
const app = express();
const ejs = require('ejs');
const util=require('util');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const cal = require('./js/Module.js');
app.use(cookieParser());
app.set('view engine','ejs');
//mongoose.connect('mongodb://172.21.2.236:27017/190110910528');
mongoose.connect('mongodb://localhost/190110910528');

// const TUser = mongoose.model('TDepartment', schema);
// const user = new TUser({ id: '1', username: 'abc', password: '123456', sex: '男', birth: new Date('2014-03-01T08:00:00Z'), department: '信息管理与人工智能学院', grade: '2019级' }
// );
// user.save().then(() => console.log('usermeow'));
app.use('/', express.static('js'));
app.use('/', express.static('css'));
app.use('/', express.static('images'));
app.use('/', express.static('views'));
app.use('/loge.JPG', express.static('/favicon.ico'));

const userschema = {
    username:String,
    password:String,
    sex:String,
    birth:Date,
    department:String,
    grade:String
}
const tuser = mongoose.model('tuser', userschema);
const courceschema = {
    name:String,
    grade:String,
    teacher:String
}
const tcource = mongoose.model('tcource', courceschema);
const departmentschema = {
    name:String,
    address:String
}
const tdepartment = mongoose.model('tdepartment', departmentschema);
const classroomschema = {
    address:String,
    size:String
}
const tclassroom = mongoose.model('tclassroom', classroomschema);


app.get('/',(req,res)=>{
    res.redirect('/index');
});
function isLogin(req,res,next){
    const { username } =req.cookies;
    if(username) next();
    else res.redirect('/login');
}
app.get('/index',isLogin,(req,res)=>{
    console.log(req.cookies);
    const { username } =req.cookies;
    console.log(username);
    res.render('index',{ username });
});
app.get('/loginorreg',(req,res)=>{
    const { username } =req.cookies;
    res.render('loginorreg',{username});
});

app.post('/reg',function(req,res){
    const r=req.body;
    const name=r.name;
    const password=r.password;
    const sex=r.sex;
    const birth=r.birth;
    const department=r.department;
    const grade=r.grade;
    tuser.insertMany({username:name,password:password,sex:sex,birth:birth,department:department,grade:grade});
    
    var t=tuser.find((err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    });
    res.redirect('/login');
});
app.get('/login',(req,res)=>{
    const { username } =req.cookies;
    res.render('loginorreg',{username});
});
app.post('/login',(req,res)=>{
    const r=req.body;
    const name=r.name;
    const password=r.password;
    tuser.find({username:name,password:password},(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data.length>0){
            // console.log(data);
            res.cookie("username",name);
            res.redirect('/index');
            res.end();
        }
    })
})

app.listen(3002);