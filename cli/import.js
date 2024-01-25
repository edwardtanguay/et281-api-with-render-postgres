import { addSkill } from "../src/handlers.js";
import { readJsonFile } from "../src/tools.js";

const locked = true;

const _skills = readJsonFile('cli/data/skills.json');

for (const _skill of _skills) {
	if (locked) {
		console.log(`TEST IMPORT OF SKILL "${_skill.name}"`);
	} else {
		const skill = await addSkill(_skill);
		console.log(`imported skill "${_skill.name}"`);
	}
}

console.log(`${_skills.length} skills`);