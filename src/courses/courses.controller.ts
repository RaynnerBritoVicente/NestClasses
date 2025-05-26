import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common'

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({message: "listagem de cursos"});
    }

    @Get(':id/:name')
    findOne(@Param('id') id: number, @Param('name') name: string) {
        return `Curso ID#${id} - Curso: ${name}`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        console.log(body);
        return `Update realizado no curso de id#${id}`;
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return `Removido o curso com ID#${id}`;
    }


}