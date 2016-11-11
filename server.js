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
       `<body background="image/IMG_60327673164980.jpeg" >

<center>
<body>
      <br>
      <center> <h1>APM GROCERY SHOP<h1> </center> <a herf="hd.html"><img src="image/F_icon.svg.png" width="60px" height="60px" align="right"></a>
      <img src="image/grocery-shopping-feature.jpg" width="350px" height="115px" align="left"><br>
      &nbsp; <br>
     <hr>
     <h3><a href="win.html">HOME</a> | <a href="hd.html">SERVICES</a> | <a href="hd.html">HOME DELIVERY</a> | <a href="hd.html">CONTACT US</a> | <a href="hd.html">ABOUT US</a> | <a href="hd.html">PRIVACY POLICY</a><h3>
     <hr>
     <marquee><h4>Welcome To APM Grocery</h4> <h3>5% Cash Back On Every Purchasing</h3></marquee>

      <img src="image/biz_01Groceries04281_0.jpg" width="300px" height="180px">
      <img src="image/vegetables_625x350_81425560601.jpg" width="300px" height="180px">
      <img src="image/grocery_main_small.jpg" width="300px" height="180px">
     <img src="image/biz_01Groceries04281_0.jpg" width="300px" height="180px">
      <img src="image/grocery_main_small.jpg" width="300px" height="180px">
     <img src="image/vegetables_625x350_81425560601.jpg" width="300px" height="180px">
     <img src="image/vegetables_625x350_81425560601.jpg" width="300px" height="180px">
     <img src="image/vegetables_625x350_81425560601.jpg" width="300px" height="180px">
     <br>
      <br>
      <br>
  <br>
  <br>
  <br>

      <hr>
      Copyright & copy 2016 All Right Reserved: DKAN.in
      <hr>

</body>
</center>`
    
     },
     'article-two':{
         title: "IT'S DKA SELF",
         heading: "Dk Aswin",
    
         content:
       `<p>
                HE ALSO A SARGENT OFFICER OF 8 BATTALION NCC ARMY WING.....
            </p>
            <p>
                HE is HOMED at kurungulam village of tvr dist,pin 609608
            </p>
            <p>
                HE IS DREAM ALSO BECOME JOIN DEFENCE FORCE.....
            </p>
            <p>
                AND DREAM ABOUT MARY A SWEET GIRL.....
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

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    var articleName = req.params.articleName;
   res.send(createtemplete(articles[articleName]));
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
