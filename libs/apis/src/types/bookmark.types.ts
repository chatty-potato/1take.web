import { BookMark } from '../entity/bookmark.entities';

/**
  * @METHOD GET
  * @AUTH NEED
  * @URI /interview/question/bookmarks
  */
export type BookmarkListGetResponse = {
  bookmarks: BookMark[]
}

/**
  * @METHOD POST
  * @AUTH NEED
  * @URI /interview/question/bookmark
  */
export type BookmarkCreateRequest = Pick<BookMark, 'sessionID'> & Pick< BookMark['interviewQNA'], 'questionIndex'>;
export type BookmarkCreateResponse = Pick<BookMark, 'bookmarkID'>;

/**
  * @METHOD PATCH
  * @AUTH NEED
  * @URI /interview/question/bookmark
  */
export type BookmarkDeleteRequest = Pick<BookMark, 'bookmarkID'>;
export type BookmarkDeleteResponse = undefined | null;
