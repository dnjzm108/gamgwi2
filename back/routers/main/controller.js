

let first_main = (req,res) =>{
    res.send('first_main')
}

let main = (req,res) =>{
    console.log('여기까지 왔니?');
   return ;
}


module.exports={
    first_main,
    main,
    
}