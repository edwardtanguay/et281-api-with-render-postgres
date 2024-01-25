import prisma from "./db.js";
import { INewSkill, ISkill } from "./interfaces.js";

export const addSkill = async (_skill: INewSkill) => {
	try {
		const skill:ISkill = await prisma.skill.create({ data: _skill });
		return skill;
	} catch (e) { 
		return null
	}
}