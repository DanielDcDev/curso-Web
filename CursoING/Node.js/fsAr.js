const fs = require('fs');

fs.writeFileSync('newMessage.txt', 'Hello from my friend NODE', (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});
fs.readFile('newMessage.txt', 'utf8', function(err, data){
    console.log(data);
})
fs.writeFileSync('newMessage.txt', 'Hello from my friend Code');
fs.readFile('newMessage.txt', 'utf8', function(err, data){
    console.log(data);
})