const express=require('express')
const app=express()
const port=5656
app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})