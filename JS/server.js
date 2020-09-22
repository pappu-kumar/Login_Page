var express = require('express');
var app = express();
var port=3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at : ' + port);

app.post('/api/login', function(req, res){
    var results= [{
        title: "java script",
        instructor: "Pappu",
        level: "beginner"
    },{
        title: "c++",
        instructor: "Kumar",
        level: "medium"
    },{
        title: "c",
        instructor: "Saw",
        level: "advance"
    },{
        title: "html",
        instructor: "Dhananjay",
        level: "bignner"
    },{
        title: "css",
        instructor: "Martin",
        level: "bignner"
    },{
        title: "java",
        instructor: "Neuton",
        level: "bignner"
    },{
        title: "python",
        instructor: "Licon",
        level: "bignner"
    }];

    res.json(results);
})