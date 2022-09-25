export type GenderType = 'male' | 'female' | 'other';
export type SocialType = 'extroverted' | 'introverted';
export type ScheduleType = 'morning' | 'evening';
export type EmploymentStatus = 'employed' | 'unemployed' | 'unknown';

export interface RoomType {
	city: string;
	name: string;
	rentPrice: number;
	age: number;
	isStudent: boolean;
	employed: EmploymentStatus | '';
	social: SocialType | '';
	gender: GenderType | '';
	schedule: ScheduleType | '';
	sqft: number;
	uid: string;
	address: string;
	id?: string;
}

export interface RoomIdType {
	id: string;
	city: string;
}
