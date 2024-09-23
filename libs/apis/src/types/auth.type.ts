import type { User } from '../entity/user.entities';

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /auth
 */
export type TokenAuthenticateResponse = undefined | null;

/**
 * @METHOD POST
 * @AUTH NEED
 * @URI /auth
 */
export type AccountCreateRequest = Pick<User, 'alias' | 'positions'>;
export type AccountCreateResponse = undefined | null;

/**
 * @METHOD PATCH
 * @AUTH NEED
 * @URI /auth
 */
export type AccountDeleteResponse = undefined | null;

/**
 * @METHOD POST
 * @AUTH NEED
 * @URI /auth/logout
 */
export type LogoutResponse = undefined | null;
