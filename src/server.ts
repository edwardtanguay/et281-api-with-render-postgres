import express from 'express';
import prisma from "./db.js";
import { addSkill } from './handlers.js';
import { INewSkill, ISkill } from './interfaces.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
const port = 3889;

app.get('/', (req, res) => {
	res.send(`
<h1>Skills API</h1>
<ul>
	<li><a href="/skills">/skills</a> - web developer skills</li>
</ul>
	`);
});

app.get('/skills', async (req, res) => {
	const skills: ISkill[] = await prisma.skill.findMany();
	res.json(skills);
});

app.post('/skills', async (req, res) => {
	if (process.env.API_ENVIRONMENT === 'development') {
		const _skill: INewSkill = req.body;
		try {
			const skill = await addSkill(_skill);
			if (skill !== null) {
				res.status(201);
				res.json(skill);
			} else {
				res.status(400);
				res.json({ message: "there was an error" });
			}
		} catch (e) {
			res.status(400);
			res.json({ message: "there was an error" });
		}
	} else {
		res.status(401).send('not authorized');
	}
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});