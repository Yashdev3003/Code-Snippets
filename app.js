const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const adminRoute=require('./routes/admin');
const nameRoute=require('./routes/name');
const path=require('path');

const app=express();
app.set('view engine', 'ejs');
app.set('views', 'views');

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({nope: true});
    } else {
      next();
    }
}
app.use(ignoreFavicon);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute.route);
app.use('/admin', nameRoute);

app.use('/', (req, res, next)=> {
    res.status(404).render('error', {
      pageTitle: 'Error',
    });
})
  
app.listen(3001);