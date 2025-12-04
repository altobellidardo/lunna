import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager'
import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthorizationToken } from 'src/common/enums/authorization-token'
import { CreateTokenDto, RevokeTokenDto, TokenPayloadDto } from './dto/tokens.dto'

@Injectable()
export class TokensService {
  constructor (
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  private readonly randomToken = () => Math.floor(100000 + Math.random() * 900000).toString()

  private readonly getKey = (type: AuthorizationToken, userId: string) => `token:${type}:user:${userId}`

  async generate (genToken: CreateTokenDto) {
    try {
      if (!genToken.ttl) genToken.ttl = 900000

      return await this.cacheManager.set(
        this.getKey(genToken.type, genToken.userId),
        { userId: genToken.userId, type: genToken.type, token: this.randomToken() },
        genToken.ttl
      )
    } catch (error) {
      throw new BadRequestException('There was an error generating the token')
    }
  }

  async validate (valToken: TokenPayloadDto) {
    try {
      const payload = await this.cacheManager.get<TokenPayloadDto>(this.getKey(valToken.type, valToken.userId))

      if (!payload || payload.token !== valToken.token) throw new UnauthorizedException('Invalid or expired token')
      return payload
    } catch (error) {
      throw new BadRequestException('There was an error validating the token')
    }
  }

  async revoke (revToken: RevokeTokenDto): Promise<boolean> {
    try {
      return await this.cacheManager.del(this.getKey(revToken.type, revToken.userId))
    } catch (error) {
      throw new BadRequestException('There was an error revoking the token')
    }
  }
}
