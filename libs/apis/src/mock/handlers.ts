import { http, HttpResponse } from 'msw';

export const handler = [
  http.get('http://localhost:4000/api/v1/category', () => {
    return HttpResponse.json({ categories: ['hello'] });
  }),
  http.post('http://localhost:4000/api/v1/interviews', async ({ request }) => {
    return HttpResponse.json({ sessionID: '1234' });
  }),
  http.get(
    'http://localhost:4000/api/v1/interviews/:sessionId/questions',
    ({ params }) => {
      console.log(params);
      return HttpResponse.json({
        questions: [
          {
            question: 'hello',
            questionIndex: 0,
            answer: null,
          },
        ],
      });
    },
  ),
];
