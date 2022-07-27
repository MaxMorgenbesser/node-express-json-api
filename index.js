const express = require("express");
const cors = require("cors");
const data = require("./restaurants.json");

const app = express();
app.use(cors());
app.use(express.json());
const fs = require("fs");

app.listen(4000, () => {
  console.log("Now listening on 4000");
});

app.get("/", (req, res) => {
    //console.log(req.body)
  res.send(data);
});

app.post("/add-restaurant", (req, res) => {
    console.log(req.body)
  const newRestaurant = {
    address: "7024 Beracasa Way, Boca Raton, FL 33433",
    name: "mateos chili dogs",
    rating: "1",  
  };
  data.push(req.body)
  //data.push(newRestaurant)
  
  const dataJson=JSON.stringify(data)
  fs.writeFile('restaurants.json', dataJson, err => console.error(err))
  //console.log(jsonRestaurants)
  res.send(data)
});

//get all items from JSON
app.patch('/update', (req,res)=>{
    //console.log(req.query)
    const{ name } = req.query
    //console.log()
    const itemFound= data.find(eachRestaurant => eachRestaurant.name===name)
    console.log(itemFound)
})

