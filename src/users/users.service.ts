import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository
      .createQueryBuilder('users')
      .where(`users.username = :username`, {
        username: createUserDto.username,
      })
      .getOne();

    if (existingUser) {
      throw new BadRequestException('username is taken');
    }

    const insertResult = await this.userRepository
      .createQueryBuilder('users')
      .insert()
      .values(createUserDto)
      .execute();

    const createdUser = await this.userRepository
      .createQueryBuilder('users')
      .where(`users.id = :id`, {
        id: insertResult.identifiers[0].id,
      })
      .getOne();

    return createdUser;
  }
}
