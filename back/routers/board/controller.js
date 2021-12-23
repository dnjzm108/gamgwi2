const { Board, User, Comment, Like } = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const path = require('path')
const { create } = require('../../models/weather')
const { callbackify } = require('util')

let view_reply = async (req, res) => {
    await Comment.create({ commenter_name: 'algml', category: '글귀', titleIdx: 1 })
    let comment = await Comment.findAll({})
    res.send(comment)
}

let post_view = async (req, res) => {
    let { idx } = req.body
    let result = {};
    try {
        let view_hit = await Board.findOne({ where: { id: idx }, attributes: ['hit']})
        await Board.update({ hit : view_hit.dataValues.hit + 1 }, { where: { id : idx } })
        let view = await Board.findOne({ where: { id: idx }, attributes: ['title', 'content', 'nickName', 'hit', 'id', 'likeIdx', 'date','weather']})
        let like = await Like.findOne({where:{likeBoardIdx:view.dataValues.id}})
        result = {
            result: 'OK',
            view: view.dataValues,
            like: like.dataValues
        }

    } catch (error) {
        result = {
            result: 'Fail',
            msg: '해당 페이지가 없어요'
        }
    }
    res.json(result)
}

let write = async (req, res) => {
    const { todayWeather, writeTitle, writeContent,userpw,userid } = req.body                 // 이걸로 db에 insert 하면 됩니다.
    let result = {};
    try {
        await Board.create({ title: writeTitle, nickName: userid, watch: 1, report: 0, content: writeContent, category: '글귀',weather:todayWeather})
        result = {
            result: 'OK',
            msg: '글 작성 성공'
        }
        let resu =  await Board.findAndCountAll({})
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
        let list = await Board.findAll({ where: { watch: 1, category: '글귀' }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'date', 'hit', 'id','weather'] })
        
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
    let result = {}
    let list = await Board.findAll({
        include: [{
            model: Like,
            where: { likeStatus: 1 }
        }]
    })
    result = {
        list,
        result: 'OK',
        msg: '좋아요 가져오기 성공'
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

        await Board.destroy({where:{id:idx}})
        await Like.destroy({
            include:[{
                model:Board,
                where:{id:idx}
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
        await Board.update({ title: writeTitle, content: writeContent, weather:todayWeather }, { where: { id } })
        let modifiedRes = await Board.findOne({where:{id},attributes:['title','content','hit','date']})
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
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id','hit','date','weather']
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
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id','hit','date','weather']
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
                    }, attributes: ['title', 'likeIdx', 'nickName', 'content', 'id','hit','date','weather']
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

let addLike = async (req,res) => {
    let {idx,likeState} = req.body.addLikeData
    try{
        if(likeState==true){
            await Like.update({likeStatus:0},{where:{likeBoardIdx:idx}})
        }else if(likeState==false){
            await Like.update({likeStatus:1},{where:{likeBoardIdx:idx}})
        }
        let likestate = await Like.findOne({where:{likeBoardIdx:idx}})

        let data = {
            result:'OK',
            likestate
        }
        res.json(data)
    }catch(err){
        console.log(err)
        result = {
            result: 'Fail',
            msg: '리스트 가져오기 실패'
        }
        res.json(result)
    }
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
    addLike
}