import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App/App';

test('Results rendered after submitting', async () => {
  render(<App />);
  const button = screen.getByTestId('button');
  fireEvent.submit(button, { target: { url: { value: 'https://jsonplaceholder.typicode.com/users' }, method: { value: 'GET' } } })
  const results = await waitFor(() => screen.getByTestId('test'));
  expect(results).toBeInTheDocument();
});