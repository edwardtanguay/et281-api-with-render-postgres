import express from 'express';

const app = express();
const port = 3889;

app.get('/', (req, res) => {
	res.send(`
<h1>Skills API</h1>
<ul>
	<li><a href="/skills">/skills</a> - web developer skills</li>
</ul>
	`);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});