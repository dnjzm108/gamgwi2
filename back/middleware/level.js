const session = require('express-session');

const level = (req,res,next)=>{
    let log = session.authData.local.level;
if(log < 2 ){
    res.redirect('/community?msg=글쓰기 권한이 없습니다.')
}else{
    next()
}
}
module.exports=level;