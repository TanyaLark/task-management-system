import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/core/dtos/user.dto";
import { User } from "src/core/entities/user.entity";

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const updatedUser = new User();
    updatedUser.name = updateUserDto.name;
    updatedUser.email = updateUserDto.email;

    return updatedUser;
  }
}