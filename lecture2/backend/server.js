import express from 'express';// to use import add type module in package.json

const app = express();

app.get('/api/jokes', (req,res)=>{
    const jokes=[
        {
            id:1,
            title:"joke1",
            content:"this is joke1"
        },
        {
            id:2,
            title:"joke2",
            content:"this is joke2"
        },
        {
            id:3,
            title:"joke3",
            content:"this is joke3"
        },
        {
            id:4,
            title:"joke4",
            content:"this is joke4"
        }
    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is at ${port}`)
})