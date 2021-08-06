

let first_main = (req,res) =>{
    res.send('first_main')
}

let main = (req,res) =>{
    
    res.send('main')
}


module.exports={
    first_main,
    main,
    
}