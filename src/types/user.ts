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
	tags: (string | boolean | null)[];
	preferences: (string | boolean | null)[];
	excludes: (string | boolean | null)[];
}
