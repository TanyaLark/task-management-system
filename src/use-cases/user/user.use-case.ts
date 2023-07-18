import { Injectable } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { User } from 'src/core/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return this.dataServices.users.create(user);
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }

  deleteUser(userId: string) {
    return this.dataServices.users.delete(userId);
  }
}
