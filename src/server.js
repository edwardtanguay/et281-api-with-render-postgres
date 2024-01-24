import express from 'express';
import prisma from "./db.js";

const app = express();
app.use(express.json());
const port = 3889;

app.get('/', (req, res) => {
	res.send(`
<h1>Skills API</h1>
<ul>
	<li><a href="/skills">/skills</a> - web developer skills 222</li>
</ul>
	`);
});

app.get('/skills', async (req, res) => {
	const skills = await prisma.skill.findMany();
	res.json(skills);
});

app.post('/skills', async (req, res) => {
	const _skill = req.body;
	try {
		const skill = await prisma.skill.create({ data: _skill });
		res.status(201);
		res.json({ data: skill });
	} catch (e) {
		res.status(400);
		res.json({ message: "there was an error" });
	}
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});