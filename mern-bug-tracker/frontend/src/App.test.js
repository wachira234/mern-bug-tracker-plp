import React from 'react'; // Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('creates bug and updates list', async () => {
  axios.post.mockResolvedValue({ data: { id: 1, title: 'New Bug', status: 'open' } });
  axios.get.mockResolvedValue({ data: [{ id: 1, title: 'New Bug', status: 'open' }] });

  render(<App />);
  
  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Bug' } });
  fireEvent.click(screen.getByText(/submit/i));

  expect(await screen.findByText('New Bug')).toBeInTheDocument();
});
