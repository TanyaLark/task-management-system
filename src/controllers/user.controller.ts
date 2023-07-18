import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/core/dtos/user.dto";
import { User } from "src/core/entities/user.entity";
import { UserUseCases } from "src/use-cases/user/user.use-case";

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(id: any): Promise<User> {
    return await this.userUseCases.getUserById(id);
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  async updateUser( @Param() id: string,@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userUseCases.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userUseCases.deleteUser(id);
  }
}