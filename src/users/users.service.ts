import { Injectable, NotFoundException } from '@nestjs/common';
import type { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Nadia', email: 'nadia@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' },
  ];
  private currentId = 3;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException(`Користувача з ID ${id} не знайдено`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.currentId++,
      name: createUserDto.name,
      email: createUserDto.email,
    };
    this.users.push(newUser);
    return newUser;
  }
}
