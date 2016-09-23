var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleOne = {
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
    
};

Function createTemplate(date){
    var heading=data.heading;
    var date=data.date;
    varcontent=data.content;
    
var htmlTemplate =
   ` <html>
    <head>
        <title>
           $(heading)
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
        <h3>    Article One  </h3>
        <div> AG Drive </div>
        <div>
        <p>
            $(date)
        </p>
           $(content)
        </div>
    </div>
    </body>
</html>`;

returnHtmlTemplate;
}

var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/alpha',function(req,res) {
    res.sendFile(path.join(__dirname, '', 'article-one.html'));
});

app.get('/beta',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'beta.html'));
});

app.get('/gamma',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'gamma.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
