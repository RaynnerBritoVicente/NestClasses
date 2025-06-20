import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}
    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDTO: any) {
        return this.coursesService.create(createCourseDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDTO: any) {
        return this.coursesService.update(id, updateCourseDTO);
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.coursesService.remove(id);
    }


}