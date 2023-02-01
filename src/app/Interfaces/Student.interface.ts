import { Courses } from "./Courses.interface";

export interface Student {
    name: string;
    lastName: string;
    isActive: boolean;
    courses?: Array<Courses>;
}