var mysql=require('mysql');

var client=mysql.createConnection({
    user:'root',
    password:'123456',
    host:'192.168.31.142',
    port:3306,
    database:'newdb'
});

client.connect();
client.query('select * from zh_user',function(err,results,fields){
    if(err) throw err;
    if(results){
        for(var i=0;i<results.length;i++){
            console.log(results[i]);
            console.log(fields);
        }
    }
    client.end();
});