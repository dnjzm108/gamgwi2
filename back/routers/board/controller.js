const { Board, User, Comment, Like, Subscribe } = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const path = require('path')
const { create, destroy } = require('../../models/weather')
const { callbackify } = require('util')
const { resourceLimits } = require('worker_threads')

let view_reply = async (req, res) => {
    await Comment.create({ commenter_name: 'algml', category: '글귀', titleIdx: 1 })
    let comment = await Comment.findAll({})
    res.send(comment)
}

let post_view = async (req, res) => {
    console.log(req.body)
    let { viewIdx,userid } = req.body
    let result = {};
    try {
        let view_hit = await Board.findOne({ where: { id: viewIdx }, attributes: ['hit'] })
        await Board.update({ hit: view_hit.dataValues.hit + 1 }, { where: { id: viewIdx } })
        let view = await Board.findOne({ where: { id: viewIdx }, attributes: ['title', 'content', 'nickName', 'hit', 'id', 'likeIdx', 'date', 'weather'] })
        let friend = await Subscribe.findOne({where:{userid:userid,writer_name:view.dataValues.nickName}})
        if(friend==null){
            result = {
                result: 'OK',
                view: view.dataValues,
                //like: like.dataValues
                like:null,
                friend:false
            }
        }else{
            result = {
                result: 'OK',
                view: view.dataValues,
                //like: like.dataValues
                like:null,
                friend:friend.dataValues.status
            }

        }

    } catch (error) {
        console.log(error);
        result = {
            result: 'Fail',
            msg: '해당 페이지가 없어요'
        }
    }
    res.json(result)
}

let write = async (req, res) => {
    const { todayWeather, writeTitle, writeContent, userpw, userid } = req.body                 // 이걸로 db에 insert 하면 됩니다.
    let result = {};
    try {
        await Board.create({ title: writeTitle, nickName: userid, watch: 1, report: 0, content: writeContent, category: '글귀', weather: todayWeather })
        result = {
            result: 'OK',
            msg: '글 작성 성공'
        }
        let resu = await Board.findAndCountAll({})
        //await Like.create({likeBoardIdx:resu.count})
    } catch (error) {
        console.log(error)
        result = {
            result: 'Fail',
            msg: '글 작성 실패..'
        }
    }
    res.json(result)
}

let get_list = async (req, res) => {
    let result = {};
    try {
        let list = await Board.findAll({ where: { watch: 1, category: '글귀' }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'date', 'hit', 'id', 'weather'] })

        result = {
            list,
            result: 'OK',
            msg: '리스트 가져오기 성공'
        }
    } catch (error) {
        result = {
            result: 'Fail',
            msg: '리스트 가져오기 실패'
        }
    }
    res.json(result)
    // switch (url){
    //     case undefined :
    //         list = await Board.findAll({where:{watch:1,category:'글귀'},attributes:['title','like','nickName','content']})
    //         return res.json(list)
    //     case '공개' :
    //         list = await Board.findAll({where:{watch:0,category:'글귀'},attributes:['title','like','nickName','content']})
    //         // 공개 항목 선택시 보여주는 공개된 글귀 리스트
    //         return res.json(list)
    //     case '고민' :
    //         list = await Board.findAll({where:{category:'고민'},attributes:['title','like','nickName','content']})
    //         // 위의 개인/공개/고민 항목 중 고민 선택시 보여주는 리스트
    //         return res.json(list)
    //     case '하트' :
    //         list = await Board.findAll({where:{like:1,category:'글귀'},attributes:['title','like','nickName','content']})
    //         return res.json(list)
    //         // 하트 누른 글만 보여주기
    //         // 이때 글귀만 보여줄기 고민글을 함께 보여줄지 물어볼 것?????????????????????????????????????????????????
    //     case '메인' :
    //         list = await Board.findAll({where:{watch:1,category:'글귀'},attributes:['title','like','nickName','content']})
    //         return res.json(list)
    //     case '글쓰기' :
    //         // return res.render('/board/write')
    //         return res.json({return:'글쓰기'})
    //     case '사용자정보' :
    //         //let userInfo = await User.findOne({where:{조건}})
    //         //return res.json(userInfo)
    //     default :            
    //         console.log(url,'===============================')
    //         list = await Board.findAll({where:{id:url}})
    //         // return res.render('리스트가 선택된 특정 글귀의 페이지',{list})
    //         return res.json(list)
    // } 
}


let get_likes = async (req, res) => {
    let { board_id, userid } = req.body;
    let check;
    let result;
    try {
        let one = await Like.findOne({ where:{userid,board_id} })
        console.log(userid);
        let all = await Like.findAll({ where:{board_id} })
        console.log('=========',one);
        if (one == null) {
            check = false
        } else {
            check = true
        }
        result={
            result:"OK",
            count:all.length,
            check
        }
        res.json(result)
    } catch (e) {
        console.log(e);
    }
}
let addLike = async (req, res) => {
    let { board_id, userid } = req.body.likeData;
    let check;
    let result;
    try {
        await Like.create({ board_id, userid })
        let one = await Like.findOne({where:{ board_id, userid} })
        let all = await Like.findAll({ where:{board_id} })
        if (one == null) {
            check = false
        } else {
            check = true
        }
        result={
            result:"OK",
            count:all.length,
            check
        }
    } catch (err) {
        console.log(err)
        result = {
            result: 'Fail',
            msg: '리스트 가져오기 실패'
        }
    }
    res.json(result)
}

let del_Like = async (req, res) => {
    let { board_id, userid } = req.body.data;
    try {
        await Like.destroy({ where:{board_id,userid} })
        let one = await Like.findOne({ where:{board_id, userid} })
        let all = await Like.findAll({ where:{board_id} })
        if (one == null) {
            check = false
        } else {
            check = true
        }
        result={
            result:"OK",
            count:all.length,
            check
        }
    } catch (err) {
        console.log(err)
        result = {
            result: 'Fail',
            msg: '리스트 가져오기 실패'
        }
    }
    res.json(result)
}


let get_write = (req, res) => {
    res.send('get_write')
}

// 글 수정에 들어왔을때===========================================
let modify = async (req, res) => {
    let { idx } = req.query
    let list = await Board.findAll({ where: { id: idx }, attributes: ['id', 'title', 'content', 'date'] })
    res.json(list)
}

let Delete = async (req, res) => {
    let { idx } = req.body
    try {

        await Board.destroy({ where: { id: idx } })
        await Like.destroy({
            include: [{
                model: Board,
                where: { id: idx }
            }]
        })

        let deletedRes = await Board.findAll({})
        result = {
            deletedRes,
            result: 'OK',
            msg: '삭제 성공'
        }
    } catch (error) {
        result = {
            result: 'Fail',
            msg: '삭제 실패'
        }
    }
    res.json(result)
}

let write_succece = async (req, res) => {
    await Board.create({ title: 'tt', nickName: 'al', report: 0, content: 'd', category: '글귀', })

    let sucWrite = await Board.findAll({})
    res.json(sucWrite)
    // 작성완료된 후 작성된 내용을 보여주는 
}
// 글 수정 완료시에 =============================================



let modify_succece = async (req, res) => {
    let { id, todayWeather, writeTitle, writeContent } = req.body.modifyData

    try {
        await Board.update({ title: writeTitle, content: writeContent, weather: todayWeather }, { where: { id } })
        let modifiedRes = await Board.findOne({ where: { id }, attributes: ['title', 'content', 'hit', 'date'] })
        result = {
            modifiedRes,
            result: 'OK',
            msg: '수정 성공'
        }
    } catch (error) {
        result = {
            result: 'Fail',
            msg: '수정 실패'
        }
    }
    res.json(result)
    // 수정후 보여지는게 list인 경우 => let modifiedRes = Board.findAll({})f
    // 수정후 보여지는게 수정완료된 view인 경우 => let modifiedReas = Board.findAll({where:{id:idx},attributes:['title','content','hit','date]})

}

//post =========================================================================
let post_list = async (req, res) => {
    let { search, searchedValue } = req.body
    let list
    let result = {}

    try {
        switch (search) {
            case 'nickName':
                list = await Board.findAll({
                    where: {
                        nickName: {
                            [Op.like]: "%" + searchedValue + "%"
                        }
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id', 'hit', 'date', 'weather']
                })
                result = {
                    list,
                    result: 'OK',
                    msg: 'search list 가져오기 성공'
                }
                res.json(result)
            case 'content':
                list = await Board.findAll({
                    where: {
                        content: {
                            [Op.like]: "%" + searchedValue + "%"
                        }
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id', 'hit', 'date', 'weather']
                })
                result = {
                    list,
                    result: 'OK',
                    msg: 'search list 가져오기 성공'
                }
                res.json(result)
            case 'title':
                list = await Board.findAll({
                    where: {
                        title: {
                            [Op.like]: "%" + searchedValue + "%"
                        }
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id', 'hit', 'date', 'weather']
                })
                result = {
                    list,
                    result: 'OK',
                    msg: 'search list 가져오기 성공'
                }
                res.json(result)
        }
    } catch (err) {
        console.log(err)
        result = {
            result: 'Fail',
            msg: '리스트 가져오기 실패'
        }

    }

}



let addComment = async (req, res) => {
    let { userid, content, board_id } = req.body;
    let result;
    try {
        await Comment.create({ content, commenter_name: userid, titleIdx: board_id })
        result = {
            result: 'OK',
            msg: '댓글등록 성공'
        }
    } catch (e) {
        result = {
            result: 'Fail',
            msg: '댓글등록 실패'
        }
    }
    res.json(result)
}

let get_comment = async (req, res) => {
    let { board_id } = req.body
    let comment = [];
    let data;
    try {
        let list = await Comment.findAll({
            where: {
                titleIdx: board_id
            },
            //  attributes: ['content']
        })
        list.map(v => {
            comment.unshift(v.dataValues)
        })
        data = {
            result: "OK",
            comment
        }
    } catch (e) {
        data = {
            result: "false",
            comment
        }
        console.log(e);
    }
    res.json(data)
}

let delete_comment = async (req, res) => {
    let { id } = req.body
    let data;
    try {
        let del_comment = await Comment.destroy({ where: { id } })
        data = {
            result: "OK"
        }
    } catch (e) {
        data = {
            result: "false"
        }
        console.log(e);
    }
    res.json(data)
}

let add_friend = async (req,res) => {
    let data
    try{
        let {userid,nickName} = req.body.data
        let resultData = await Subscribe.create({writer_name:nickName,userid,status:true})
        data = {
            result:'OK',
            data:resultData.dataValues.status
        }
    }catch(err){
        data = {
            result:'Fail',
        }
    }
    res.json(data)
}

let subscribe_writer = async (req,res) => {
    let data
    let resultData = []
    try{
        let { data, state } = req.body.data
        resultData = await Subscribe.findAll({where:{userid:data}})

        data = {
            result:'OK',
            list:resultData
        }
        res.json(data)
    }catch(err){
        data = {
            result:'Fail',
        }
    }
}

let subscribe_post = async (req,res) => {
    let data
    let resultData = []
    try {
        let {data} =  req.body.data
        let boardId = await Like.findAll({where:{userid:data},attributes:['board_id']})
        
        console.log(boardId.length)
        if(boardId.length==0){
            data = {
                result:'OK2',
                list:[]
            }
        }else{
            console.log(boardId[0].dataValues.board_id)
            for(let i=0; i<boardId.length;i++){
                let pushData = await Board.findAll({where:{id:boardId[i].dataValues.board_id},attributes:['id','title','hit','nickNAme','category']})
                resultData.push(pushData[i].dataValues)
            }
            data = {
                result:'OK2',
                list:resultData
            }

        }

        res.json(data)
    }catch(err){
        data = {
            result:'Fail',
        }
        res.json(data)
    }
}

let cancel_friend = async (req,res) => {
    let data
    
    try{
        let {userid,nickName} = req.body.data
        await Subscribe.destroy({where:{userid:userid,writer_name:nickName}})
        data = {
            result:'OK',
            data:false
        }

    }catch(err){
        data = {
            result:'Fail',
        }
    }
    res.json(data)
}

let cancel_post = async (req,res) => {
    let data
    try{
        let {id,userid} = req.body.data
        await Like.destroy({where:{userid:userid,board_id:id}})
        data = {
            result:'OK',
            data:false
        }
    }catch(err){
        data = {
            result:'Fail',
        }

    }
    res.json(data)
}

module.exports = {
    view_reply,
    write,
    get_list,
    get_likes,
    get_write,
    modify,
    Delete,
    write_succece,
    modify_succece,
    post_list,
    post_view,
    addLike,
    del_Like,
    addComment,
    get_comment,
    delete_comment,
    add_friend,
    subscribe_writer,
    subscribe_post,
    cancel_friend,
    cancel_post
}