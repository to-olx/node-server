const {readFileSync, writeFileSync} = require('fs');

const express = require('express');
const app = express();

app.get('/', (req,res) => {
	const count = readFileSync('./count.txt', 'utf-8');
	console.log('count ', count);

	const newCount = parseInt(count) + 1

	writeFileSync('./count.txt', newCount);

	res.send(`
		<!DOCTYPR html>
		<html lang="en">
		 <head>
		 	<meta charset="utf-8" />
		 	<meta name="viewport" content="width=device-width, initial-scale=1" />
		 	<title>Hosted on Zorin OS | Thulani Ncube</title>
		 </head>
		 <body>
				<h1>Welcome to my website!</h1>
				<p> This page has been viewed ${newCount} many times!</p>
		 </body>
		</html>
	`);
});

app.listen(5000, () => console.log('http://localhost:5000/'));

