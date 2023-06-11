import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import Web3Token from 'web3-token';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authToken = request.headers.authorization;

    try {
      const { address } = await Web3Token.verify(authToken);
      request.headers.address = address;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
