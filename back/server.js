const express = require('express')
const app = express()
const router = require('./routers/index')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const {sequelize} = require('./models')
const cors = require('cors')
const expressSession = require('express-session');

app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors({
	origin: true, // 요청 주소와 같게
    credentials: true, // cors, axios에서 둘 다 true로
}))

app.use(expressSession({
    resave: false, // 매번 session 강제 저장
    saveUninitialized: false, // 빈 값도 저장
    secret: 'VEBENEKEOWNDK', // cookie 암호화 키. dotenv 라이브러리로 감춤
    cookie: {
      httpOnly: true, // javascript로 cookie에 접근하지 못하게 하는 옵션
      secure: false, // https 프로토콜만 허락하는 지 여부
    },
    name: 'token', //cookie 이름을 변경하여 브라우저의 cookie 정보에서 cookie이름을 지워준다
}))



sequelize.sync({force:false})
.then(()=>{
    console.log('db success')
})
.catch((err)=>{
    console.log('db fail',err)
})

app.use(bodyParser.urlencoded({extended:false}))


app.use('/',router)

app.listen(3500,(e)=>{
    console.log('server start port:3500',e);
})