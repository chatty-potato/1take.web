import fetcher from './utils/fetcher';
import bookmarkApis from './bookmark';

/* EXMAPLE */
describe('login', async () => {
  test('login test', async () => {
    // TODO: login test
  });

  test('logout test', async () => {
    // TODO: Spyon will be switched to msw
    vi.spyOn(fetcher, 'get').mockResolvedValue({ data: 'test', status: 200 });
    const response = await bookmarkApis.getBookmarkList();
    expect(response.status).toEqual(200);
  });
});
