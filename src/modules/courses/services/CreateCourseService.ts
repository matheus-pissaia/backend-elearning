// import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICoursesRepository from '../repositories/ICoursesRepository';
import Course from '../infra/typeorm/entities/Course';

interface IRequestCourseData {
  name: string;
  image: string;
}

class CreateCourseService {
  constructor(private coursesRepository: ICoursesRepository) {
    // do nothing
  }

  public async execute({ name, image }: IRequestCourseData): Promise<Course> {
    const checkCourseExists = this.coursesRepository.findByName(name);

    if (checkCourseExists) {
      throw new AppError('This Course already exists!');
    }

    const course = this.coursesRepository.create({
      name,
      image,
    });

    return course;
  }
}

export default CreateCourseService;
