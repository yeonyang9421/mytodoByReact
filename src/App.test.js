import { render, screen } from '@testing-library/react';
import TodoStore from './TodoStore';

test('renders learn react link', () => {
  render(<TodoStore />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
