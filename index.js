const express = require ('express');
const app = express();
const PORT = 3000;


app.listen(
    PORT,
    () => console.log(`It is live on Port: ${PORT}`)
);

app.get('',(req,res) =>{
    res.status(200).send({
        String: "Wellcome to our page"
        })

});


//Param
app.get('/users/:id/:name', (req,res)=>{
    res.status(200).send(
        req.params
        )
})


