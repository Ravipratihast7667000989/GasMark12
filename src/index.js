

const  express = require('express');
const mongooes = require('mongoose'); 
 const bodyParser = require('body-parser');
const info = require('./model');
const model = require('./model');
const app = express()
const port = 4000
 app.use(bodyParser.urlencoded({extended : false}));
 app.use(bodyParser.json());
mongooes.connect("mongodb+srv://ravipratihast71:LCtQ1SB82Dr5ITu3@cluster0.hkwcuwh.mongodb.net/GasMark").then( function(){
    console.log("db connected");




const sch ={
    firstname:String,
    lastname:String,
    mobilenumber:Number,
    email:String,
    idproof:String,
    address:String,
    pincode:Number,
    gender:String,
    dob:String,
    agency:String,
    nationality:String,
    cylindertype:String

}
const monmodel1 = mongooes.model("newconnection_user",sch);


app.post("/post", async(req,res)=>{
    const data = new monmodel1({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    mobilenumber:req.body.mobilenumber,
    email:req.body.email,
    idproof:req.body.idproof,
    address:req.body.address,
    pincode:req.body.pincode,
    gender:req.body.gender,
    dob:req.body.dob,
    agency:req.body.agency,
    nationality:req.body.nationality,
    cylindertype:req.body.cylindertype


    });
    const val = await data.save();
    res.send(val);


});


const sch1 ={
    delivery_type:String,
    day:String,
    time:String,
    consumer_id:String

}
const monmodel2 = mongooes.model("order_cylinder",sch1);


app.post("/booking", async(req,res)=>{
    const data = new monmodel2({
    delivery_type:req.body.delivery_type,
    day:req.body.day,
    time:req.body.time,
    consumer_id:req.body.consumer_id,

    });
    const val = await data.save();
    res.send(val);


});


// //update database

// app.put("/:consumer_id",async(req,res)=>{
//     id=req.params.consumer_id;
//     console.log(id);
//     let deliverytype= req.body.delivery_type;
//     console.log(deliverytype);
//     let day1 = req.body.day;
//     console.log(day1);
//     let time1 = req.body.time;
//     console.log(time1);
    
//     monmodel2.findByIdAndUpdate({consumer_id:id},{$set:{delivery_type:deliverytype,day:day1,time:time1}},(err,data)=>{
//      if(data == null)
//         {
//             res.send("nothing found");
//         }   else{
//             res.send(data);
//                 console.log("updated sucess");
//         }
//     });

// });



    // app.post('/details/insertdatabase', async function(req,res){
    // //  res.json(req.body);
    //    await info.deleteOne({price: req.body.price})
    
    //     const Inserdata = new info({
    //         laptopname: req.body.laptopname,
    //           model: req.body.model,
    //           screensize: req.body.screensize,
    //            price: req.body.price,
    //          manufactringdate: req.body.manufactringdate,
    //     });
        
    //       Inserdata.save();
    //       res.send(Inserdata);

    // }); 
    
// Fetch data from database 

    app.get('/details', async function(req,res){
        var getinfo= await monmodel1.find();
        res.json(getinfo);
        

    });
    
    // app.post('/details/delete', async function(req,res){
    //      await info.deleteOne({price:req.params.price});
    
    //     const Response = {message : "Deleted node sucessfully"};
    //     res.json(Response);
        

    // });
    
    // app.get('/details/add', async function(req,res){
    //     var addinfo = await info({
    //         laptopname: "HP Lptop",
    //         model : "APP",
    //         screensize : "10.5 inch",
    //         price: "090050"
    //     });
    //       addinfo.save();
        
    //     const Response = {message : "Added new node sucessfully"};
    //     res.json(Response);
        

    // });

    // app.get('/details', async function(req,res){

    //     const newnotes = new info({
    //         laptopname : "Dell Laptop",
    //         model : " TTTuT56",
    //         screensize : " 12'5 inch",
    //         price : "700000",
    //         manufactringdate : "09/09/2023",
    //     })
    //     res.json(newnotes);
        

    // });


 
});

   
    app.listen(port, () => console.log(
        `Server is Started ${port}`
    
    ));

