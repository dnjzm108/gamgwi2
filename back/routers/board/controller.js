const {Board,User,Comment} = require('../../models')
// 주석 부분이 코드 짜둔거!!!!!!!! 나중에 프론트랑 연결 우선 오류 나지 않게끔 주석 처리
// const multer = require('multer')
const path = require('path')

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,callback){
//             callback(null,'uploads')
//         },
//         filename:function(req,file,callback){
//             callback(null,new Date().valueOf()+path.extname(file.originalname))
//         }
//     })
// })


let view_reply = async (req,res) =>{
    // 이부분은 특정 글귀를 본 페이지
    // 해당 페이지에서 좋아요를 누르거나 댓글 작성시!
    //let {url} = req.query(
    await Comment.create({commenter_name:'algml',category:'글귀',titleIdx:1})
    let comment = await Comment.findAll({})
    res.send(comment)
}

let write = async(req,res) =>{
    await Board.create({title:'tt',nickName:'al',watch:0,report:0,content:'d',category:'고민',commentIdx:1})
    res.send('write')
}

let list = async (req,res) =>{
    let {url} = req.query;
    let list
        
    switch (url){
        case undefined :
            list = await Board.findAll({where:{watch:1,category:'글귀'},attributes:['title','like']})
            // return res.render('처음list페이지',{list})
            // list페이지 들어오면 가장 먼저 개인 글귀 리스트를 보여줌
            // 나중에 writer_name 일치하는 경우로 특정 사용자 각각의 리스트를 보여줄 수 있도록 하기=======================나중에 팀원과 논의============
            return res.json(list)
        case '공개' :
            list = await Board.findAll({where:{watch:0,category:'글귀'},attributes:['title','like']})
            // 공개 항목 선택시 보여주는 공개된 글귀 리스트
            return res.json(list)
        case '고민' :
            list = await Board.findAll({where:{category:'고민'},attributes:['title','like']})
            // 위의 개인/공개/고민 항목 중 고민 선택시 보여주는 리스트
            return res.json(list)
        case '하트' :
            list = await Board.findAll({where:{like:1,category:'글귀'},attributes:['title','like']})
            return res.json(list)
            // 하트 누른 글만 보여주기
            // 이때 글귀만 보여줄기 고민글을 함께 보여줄지 물어볼 것?????????????????????????????????????????????????
        case '메인' :
            list = await Board.findAll({where:{watch:1,category:'글귀'},attributes:['title','like']})
            return res.json(list)
        case '글쓰기' :
            // return res.render('/board/write')
            return res.json({return:'글쓰기'})
        case '사용자정보' :
            //let userInfo = await User.findOne({where:{조건}})
            //return res.json(userInfo)
        default :            
            console.log(url,'===============================')
            list = await Board.findAll({where:{id:url}})
            // return res.render('리스트가 선택된 특정 글귀의 페이지',{list})
            return res.json(list)
    } 
    
}
let modify = async (req,res) =>{
    let {idx} = req.query
    let list = await Board.findAll({where:{id:idx}})
    res.json(list)

}

let Delete = async(req,res) =>{
    //let {idx} = req.body or req.query
    //await Board.destroy({where:{id:idx}})
    let deletedRes = await Board.findAll({})
    // "해당 글이 삭제되었습니다." 알림창이 뜬 후에 다시 글리스트를 보여주게끔 -> 알림창 뜬후 다른 페이지 어떻게 렌더링????????????????????????????????? 
    res.json(deletedRes)
}

let write_succece = async (req,res) =>{
    //let {title,writer_name,report,content,category} = req.body
    await Board.create({title:'tt',nickName:'al',report:0,content:'d',category:'글귀',})
    let sucWrite = await Board.findAll({})
    res.json(sucWrite)
    // 작성완료된 후 작성된 내용을 보여주는 
}
let modify_succece = async (req,res)=>{
    //let {idx,title,content,category} = req.body
    //await Board.update({where:{id:idx}})
    res.json({report:'수정이 완료되었습니다.'})
}

module.exports={
    view_reply,
    write,
    list,
    modify,
    Delete,
    write_succece,
    modify_succece
}