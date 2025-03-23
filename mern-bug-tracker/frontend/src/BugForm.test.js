import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from './BugForm';
import axios from 'axios';

jest.mock('axios');

describe('BugForm', () => {
  test('renders form inputs correctly', () => {
    render(<BugForm />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    axios.post.mockResolvedValue({ data: { title: 'New Bug' } });

    render(<BugForm />);
    
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Bug' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Bug description' } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/bug created/i)).toBeInTheDocument(); // Ensure the bug creation message is displayed
  });
});
