import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterHeading = screen.getByRole('heading');
  expect(counterHeading).toHaveTextContent('Counter');
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); 
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});
