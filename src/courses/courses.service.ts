import { Body, Injectable, Param } from "@nestjs/common";
import { Course } from "./courses.entity";

@Injectable()
export class CoursesService {
    private readonly courses: Course[] = []

    findAll() {
        return this.courses;
    }

    findOne(id: number) {
        return this.courses.find((c) => c.id === Number(id));
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO);
    }

    update(id: number, updateCourseDTO: any) {
        const existingCourse = this.findOne(Number(id));
        if (existingCourse) {
            const index = this.courses.findIndex((c) => c.id === Number(id));
            this.courses[index] = { id, ...updateCourseDTO };
        }
    }

    remove(@Param('id') id: number) {
        const index = this.courses.findIndex((c) => c.id === Number(id));
        if (index >= 0) {
            this.courses.splice(index, 1);
        }
    }

}