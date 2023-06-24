// 전역 변수 및 모듈 임포트 
    const express = require("express");
    const path = require("path");
    const socketio = require("socket.io");
    const session = require("express-session");
    const cors = require("cors")

    // 라우팅 처리 어떻게 되는지 보기 위한 모듈 
    // const morgan = require('morgan');


const app = express();
const { sequelize } = require("./models")
const mainInfoRouter = require("./routers/mainRouter");
const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");
// const mainloginaccessRouter = require("./routers/mainloginRouter");
const gameReady = require('./routers/gameReadyRouter');
const game = require('./routers/game');
const logoutUser = require("./routers/logoutRouter");
const mypageRouter = require("./routers/mypageRouter");
const adminRouter = require("./routers/adminRouter");
const gameRouter = require("./routers/game");
const gamestartRouter = require("./routers/gameStartRouter");
const { Cookie } = require('express-session');

const boardRouter = require("./routers/boardRouter");

// 오류나서 임시 코드 by gtp
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());


app.use("/img", express.static(path.join(__dirname, "image")));


app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}
));


app.use(session({
    name : "token",
    secret : process.env.REFRESH_TOKEN_KEY,
    resave : false,
    saveUninitialized : false
}))

app.use(express.json());


// 라우터로 연결
app.use('/main',mainInfoRouter);
app.use('/join',joinRouter);
app.use('/login',loginRouter);
// app.use('/mainlogin',mainloginaccessRouter);
app.use('/logout',logoutUser);
app.use("/mypage",mypageRouter);
app.use("/admin",adminRouter);
app.use("/game",gameRouter);
app.use("/gamestart",gamestartRouter);




// db 
sequelize.sync({forse : false}).then(()=>{
    console.log("연결성공")
}).catch((err)=>{
    console.log(err)
})



// // db 연결 되었나 확인
//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err);
//     });


app.listen(4000, ()=>{
    console.log("서버열림")
})
