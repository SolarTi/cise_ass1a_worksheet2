/*
 * @Author: your name
 * @Date: 2022-03-18 03:05:00
 * @LastEditTime: 2022-03-18 03:45:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \CISE_Repos\cise_ass1a_worksheet2\backend\server.js
 */
const express = require("express");

const articles = require("./dummydata/articles");

const server = express();

server.get('/', (req, res) => {
    res.send("嗨害嗨 API is running")
})

server.get('/api/articles', (req, res) => {
    res.json(articles);
});


// server.get('/api/articles/:id', (req, res) => {
//     const article = articles.find((n) => n._id === req.params.id);
//     res.send(article);
//     console.log(req.params);
// });

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;


server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));
