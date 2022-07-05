const http = require("http")
const server = http.createServer(function(req,res){
    const user={name:"Neela",age:22}
    res.write("<h1>hello</h1>");
    res.write(JSON.stringify(user));
    res.end(JSON.stringify(user));

})
server.listen(4000);
