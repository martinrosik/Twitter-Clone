import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: { username: string; email: string; password: string }) {
    const existingUser = await this.usersService.findByEmail(data.email);
    if (existingUser) throw new BadRequestException('Email already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user: UserDocument = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });

    const payload = { sub: user._id.toString(), email: user.email };
    const token = this.jwtService.sign(payload);

    const safeUser = { ...user.toObject(), password: undefined };

    return { token, user: safeUser };
  }

  async login(email: string, password: string) {
    const user: UserDocument | null = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user._id.toString(), email: user.email };
    const token = this.jwtService.sign(payload);

    const safeUser = { ...user.toObject(), password: undefined };

    return { token, user: safeUser };
  }
}
