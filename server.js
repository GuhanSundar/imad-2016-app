var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    
articleOne: {
    title: 'Article One | Guhan',
    heading: 'Article One',
    date : '14-09-1996',
    content: `<p>
                This is the new game i discovered!
                Pretty Awesome!
            </p>
            <p> 
                Future of racing
            </p>`
},
articleTwo: {
    title: 'Article Two | Guhan',
    heading: 'Article Two',
    date : '07-09-2016',
    content: `<p>
                iPhone. This is 7.
                Pretty Awesome!
            </p>
            <p> 
                Future of Smartphone Photography
            </p>`
},
articleThree: {
    
    title: 'Article Three | Guhan',
    heading: 'Article 3',
    date : '21-10-2016',
    content: `<p>
                This is the newest MacBook Pro!
                Damn cool stuff!
            </p>
            <p> 
                Future of computing
            </p>`
}
};


function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initia;-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
   <div class="container">
        <h3>  ${heading}   </h3>
        <div> ${date} </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.ger('/counter',function(req,res) {
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res) {
    //articleName == articleOne
    //articles[articleName= {} content of the article
    var articleName= req.params.articleName;
  res.send(createTemplate(articles[articleName]));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
