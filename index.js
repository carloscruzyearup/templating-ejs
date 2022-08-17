const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
	let title = 'Templating with EJS!'
	let heading = 'My favorite guitars 🎸';
	res.render('pages/index', {
		'title': title,
		'heading': heading
	})
})

app.get('/sg', (req, res) => {
	let title = 'Templating with EJS!'
	let heading = 'Gibson SG'
	res.render('pages/sg', {
		'title': title,
		'heading': heading
	})
})

app.get('/stratocaster', (req, res) => {
	let title = 'Templating with EJS!'
	let heading = 'Fender Stratocaster'
	res.render('pages/stratocaster', {
		'title': title,
		'heading': heading
	})
})

app.get('/lespaul', (req, res) => {
	let title = 'Templating with EJS!'
	let heading = 'Gibson Les Paul'
	res.render('pages/lespaul', {
		'title': title,
		'heading': heading
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
