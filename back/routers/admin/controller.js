const {Board,User} = require('../../models')

let admin = (req,res) =>{
    res.send('admin')
}

let board_list = async (req,res) =>{
    let list = await Board.findAll({})
    res.json(list)
}

let board_view = async (req,res) =>{
    let {idx} = req.query
    let boardView = await Board.findAll({where:{id:idx}})
    res.json(boardView)
}

let report_list = async (req,res) =>{
    let reportList = await Board.findAll({where:{report:1}})
    res.json(reportList)
}

let report_detail = async (req,res) =>{
    let {idx} = req.query
    let reportView = await Board.findAll({where:{id:idx}})
    res.json(reportView)
}

let user_list_get = async (req,res) =>{
    let userList = await User.findAll({})
    res.json({return:'안녕하세요'})
}

let user_detail = async (req,res) =>{
    let {idx} = req.query
    let userDetail = await User.findAll({where:{id:idx}})
}

//post====================================================================
let user_list_post = (req,res) => {
    res.send('user_list_post')
}
module.exports={
    admin,
    board_list,
    board_view,
    report_list,
    report_detail,
    user_list_get,
    user_list_post,
    user_detail
}