const { User } = require('../../models')
const chash = require('../../chash')
const token = require('../../jwt')

// 로컬로그인 대신에 구글이랑 카카오 로그인 하기로 했는데 여기에 그러면 우리가 받는 건 오직 nickname?==============================
// 고민유형 받는 건?==========================================


let login = (req, res) => {
    res.send('login 입니다')
}

let login_success = async (req, res) => {
    let userid = req.body.userid
    let userpw = req.body.userpw
    let hash = chash(userpw);
    let login_info = await User.findOne({
        where: { userid, userpw:hash }
    });
    let result = {}
    if (login_info !== null) {
        let {userIdx}=login_info.dataValues;
        let ctoken = token(userpw,userid,userIdx);

        result = {
            result: 'OK',
            msg: '로그인 성공'
        }
        let test = { login_info, ctoken, result }
        //res.clearCookie('SeongjinToken');
        res.cookie('AccessToken', ctoken, { httpOnly: true, secure: true, })
        res.json(test)

    } else {
        result = {
            result: 'Fail',
            msg: '로그인 실패'
        }
        let test = { result }
        res.json(test)
    }
}

let join_success = async (req, res) => {
    let userid = req.body.userid
    let userpw = req.body.userpw
    let hash = chash(userpw);
    let result = await User.create({
        userid, userpw:hash
    })
    res.json(result)
}

let join = (req, res) => {
    res.send('회원가입 입력하는 란')
}

let info = async (req, res) => {
    res.send('info')
}

let info_modify = (req, res) => {
    res.send('info_modify')
}

let logout = (req,res) =>{
    res.clearCookie('AccessToken');
    res.send('로그아웃')
}

let id_check = async (req,res) =>{
    let userid = req.body.data;
    let result = await User.findOne({
        where: {userid}
    });
    console.log('skdyrldi');
    console.log(result);
    if(result == null){
        check={
            Id_check:false
        }
        res.json(check)
    }else{
        check={
            Id_check:true
        }
        res.json(check)
    }
}

module.exports = {
    login,
    join,
    info,
    info_modify,
    login_success,
    join_success,
    logout,
    id_check
}