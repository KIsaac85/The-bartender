import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let data;
let result;
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", async (req, res) => 
{
    try 
    {
      res.render("index.ejs",{DrinkType: data});
    } 
    catch (error) 
    {
    console.log(error.response.data);
    }
});

app.post("/cocktail", async (req, res) => 
{
    try 
    {
    switch (req.body.choice) {
      case "wine":
        result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
        
        break;
         case "gin":
         result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
         
         break;
         case "whiskey":
           result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
           
           break;
          case "tequila":
           result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
           
           break;
           case "vodka":
           result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
           
           break;
           
    }
    data=result.data.drinks[Math.floor(Math.random()*result.data.drinks.length)]
    res.redirect("/");

    } 
    catch (error) 
    {
    console.log(error.response.data);
    }
      });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });