import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get('/',(req,res)=>{
//     res.render('index.ejs')
//     });
app.get("/", async (req, res) => 
{
    try 
    {
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const obj = JSON.stringify(result.data)
    console.log(typeof result.data)
    console.log(result.data)
    res.render("index.ejs",{DrinkType: result});
    } 
    catch (error) 
    {
    console.log(error.response.data);
    }
      });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });