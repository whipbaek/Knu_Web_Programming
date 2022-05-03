var fs = require('fs');
var rs = fs.createReadStream("input.txt"); //파일이 존재해야함
rs.on('open', function(){
    console.log('The file is open');
});