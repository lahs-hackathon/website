import { RoomIdType } from "./city";

export interface AgePreference {
	max: number;
	min: number;
}

export type GenderType = 'male' | 'female' | 'other';

export type SocialType = 'extroverted' | 'introverted';

export type ScheduleType = 'morning' | 'evening';

export type EmploymentStatus = 'employed' | 'unemployed' | 'unknown';

export interface UserData {
	name: string;
	age: number;
	gender: GenderType;
	agePreference: AgePreference;
	maxRent: number;
	tags: (string | null)[];
	preferences: (string | null)[];
	excludes: (string | null)[];
	roomIds?: RoomIdType[];
}
