const http =require("http")
const server =http.createServer((req,res)=>{
    res.end("hello wrold vue")
})
server.listen(3000, '127.0.0.1', (err) => {
    console.log('服务器启动成功')
})
