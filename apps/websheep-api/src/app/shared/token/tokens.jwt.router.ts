import { Router } from 'express';
import { bearerAuthMiddleware } from '../bearer-auth.middleware';
import { createToken } from './create-token';
import { tokensJwtService } from './tokens.jwt.service';

export const tokensJwtRouter = Router();

tokensJwtRouter.post(
  '/tokens',
  createToken({
    tokensService: tokensJwtService
  })
);

tokensJwtRouter.delete('/tokens/:tokenId', bearerAuthMiddleware, (req, res) => {
  /* @todo add jwt token to blacklist. */
  return res.sendStatus(204);
});
