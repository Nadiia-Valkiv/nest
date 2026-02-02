import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import express from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Res() res: express.Response) {
    res.status(HttpStatus.OK).send(this.usersService.findAll());
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number, @Res() res: express.Response) {
    res.status(HttpStatus.OK).send(this.usersService.findOne(id));
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto, @Res() res: express.Response) {
    res
      .status(HttpStatus.CREATED)
      .send(this.usersService.create(createUserDto));
  }
}
