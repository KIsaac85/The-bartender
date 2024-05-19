import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let data;
let result;
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/portofolio", (req,res)=>{
  res.redirect("//www.youtube.com");
})

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
app.get("/home", async (req, res) => 
{
    try 
    {
      data=null;
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
      result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.choice}`);
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