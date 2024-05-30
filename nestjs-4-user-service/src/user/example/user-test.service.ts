import { Injectable } from '@nestjs/common';
import { IUserService } from '../user.service.interface';

@Injectable()
export class UserTestService implements IUserService {
  createUser(): string {
    return 'UserTestService';
  }
}
