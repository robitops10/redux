const express = require('express');

const app = express();

app.use( (req, res, next) => {
	res.header('Access-Control-Allow-Methods', 	'HEAD, GET, POST, PATCH, DELETE'); 
	res.header('Access-Control-Allow-Headers', 	'Origin, Content-Type, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Origin', 	'*');

	next();
});

app.get('/bugs', (req, res) => {
	res.json({
		status: 'success',
		data: [
			{
				id: 1,
				description: 'bug 1',
				resolved: false
			},
			{
				id: 2,
				description: 'bug 2',
				resolved: false
			},
			{
				id: 3,
				description: 'bug 3',
				resolved: false
			},
		]
	})
});

app.listen( 5000, () => console.log('port: 5000') );
