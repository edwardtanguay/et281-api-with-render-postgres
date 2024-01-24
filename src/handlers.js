import prisma from "./db.js";

export const addSkill = async (skill) => {
	try {
		const skill = await prisma.skill.create({ data: skill });
		return skill;
	} catch (e) {
		return null
	}
}