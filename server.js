var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one' :{
    title: "APM Grocery shop",
    heading: "APM GROCERY SHOP",
    content:
       ` <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>
        <p>
            the shop is located at kurungulam village of tvr dist,pin 609608
        </p>
        <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>
        <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>`
    
     },
     'article-two':{
         title: "IT'S DKA SELF",
         heading: "APM GROCERY SHOP",
    
         content:
       ` <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>
        <p>
            the shop is located at kurungulam village of tvr dist,pin 609608
        </p>
        <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>
        <p>
            All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
        </p>`},
        'article-three':{
         title: "DKAN GROUP OF COMPANY",
         heading: "dkan incredible india",
    
         content:
       `  <p>
                All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
            </p>
            <p>
                the shop is located at kurungulam village of tvr dist,pin 609608
            </p>
            <p>
                All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
            </p>
            <p>
                All grocerys,shop items,stationary,cool drinks,recharge cards available here.....
            </p>`},
    
};
function createtemplete (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
var htmltemplete=`<html>
    <head>
      <title>
         ${title}
      </title>
      <meta name="viewport" content="width-device-width, initial-scale-one">
      <link href="/ui/style.css" rel="stylesheet" />
    </head>  
        <body bgcolr = #aabbcc  text = #ff0000>
            
        <div class = "container">
            <div>
        <a href="/">Home></a>
            </div>
        </div>
        
        <h1>
           ${heading}
        </h1>
       
        <div>
            ${content}
            
        </div>
    </body>
</html>

`;
 return htmltemplete;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    var articleName = req.params.articlename;
   res.send(createtemplete(article[articleName]));
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
