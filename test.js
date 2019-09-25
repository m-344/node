var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>", () => {
});

var clarinetUrl = "https://images.app.goo.gl/PdEqcfsaKh7jQS9u5";
/*argument: where the file is going to be saved*/
var clarinetFile = filesYo.createWriteStream(__dirname + "/clarinet.png");

var request = https.get(clarinetUrl, function(response){
	response.pipe(clarinetFile);
}); 