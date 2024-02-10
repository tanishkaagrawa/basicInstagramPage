const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public/css"));  //for css
app.use(express.static("public/js"));  //for js







app.set("view engine" , "ejs"); // for html

app.get("/" , (req, res) => {
    res.render("home.ejs");
});


app.get("/rollDice" , (req, res)=>{
    const dice =  Math.floor(Math.random()*6)+1;
    res.render("roll.ejs" , {dice});
});

// app.get("/ig/:username", (req , res) =>{
//     let {username} = req.params;
//     res.render("insta.ejs" , {username});
// })


app.get("/ig/:username", (req , res) =>{
    let {username} = req.params;
    const instaData =  require("./data.json");
    const data = instaData[username];
    if(data){
        console.log(data);
    res.render("insta.ejs" , {data});
    }
    else{
        res.render("error.ejs");
    }
    
})


app.listen(port , () =>{
    console.log("asdfghj");
});