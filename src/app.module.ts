import { Module } from '@nestjs/common';
import { coursesModule } from './courses/courses.module';

@Module({
  imports: [coursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
