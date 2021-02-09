import Course from '../infra/typeorm/entities/Course';

interface ICreateCourseDTO {
  name: string;
  image: string;
}

export default interface ICoursesRepository {
  create(data: ICreateCourseDTO): Promise<Course>;
  findByName(name: string): Promise<Course | undefined>;
}
