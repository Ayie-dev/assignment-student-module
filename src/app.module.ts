import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssStudentModule } from './ass-student/ass-student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ayieedb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AssStudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
