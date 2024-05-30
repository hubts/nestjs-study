import { Injectable } from '@nestjs/common';
import { IUserService } from '../user.service.interface';

@Injectable()
export class UserDevService implements IUserService {
  createUser(): string {
    return 'UserDevService';
  }
}
