/**
 * Created by lenovo on 2018/3/22.
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.route('/')
    .get(function(req, res) {
        res.send({
            message: 'get',
            data: 'get success'
        });
    })
    .post(function(req, res) {
        res.send({
            message: 'post',
            data: req.body
        });
    })
    .put(function(req, res) {
        res.send({
            message: 'put',
            data: req.body
        })
    })
    .delete(function(req, res) {
        res.send({
            message: 'delete',
            data: req.body
        })
    });


app.listen(8089);