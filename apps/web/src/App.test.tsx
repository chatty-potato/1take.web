import { render, screen } from '@testing-library/react';
import App from './App';

describe('App 컴포넌트를 렌더링 하라', () => {
  test('App 컴포넌트를 렌더링', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
