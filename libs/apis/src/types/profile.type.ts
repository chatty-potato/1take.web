import type { User } from '../entity/user.entities';

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /profile
 */
export type ProfileGetResponse = User;

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /category
 */
export type PositionTypeGetResponse = Pick<User, 'positions'>;

/**
 * @METHOD PATCH
 * @AUTH NEED
 * @URI /profile
 */
export type ProfilePatchRequest = Pick<User, 'alias' | 'positions'>;
export type ProfilePatchResponse = undefined | null;

/**
 * @METHOD PATCH
 * @AUTH NEED
 * @URI /profile
 */
export type ProfileImagePatchRequest = {
  img: File;
};
export type ProfileImagePatchResponse = Pick<User, 'imgUri'>;
