export interface INewSkill {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

export interface ISkill extends INewSkill {
	id: string;
	createdAt: Date;
}