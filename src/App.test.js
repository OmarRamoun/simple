import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ramoun link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ramoun/i);
  expect(linkElement).toBeInTheDocument();
});
