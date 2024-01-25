import prisma from "./db.js";

export const addSkill = async (_skill) => {
	try {
		const skill = await prisma.skill.create({ data: _skill });
		return skill;
	} catch (e) { 
		console.log(e);
		return null
	}
}