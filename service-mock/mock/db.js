const express = require('express')
const router = express.Router()
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jinx',
  password : 'xyuee4569244',
  database : 'jinx'
});

connection.connect();
router.use('/db', (req, res) => {
  console.log(req.body.data.size)
  console.log(typeof req.body)
  const  addSql = 'INSERT INTO think_submit_order(size) VALUES(?)'
  const  addSqlParams = [req.body.data.size]
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }
    console.log('INSERT ID:',result)
  })
})

module.exports = router
