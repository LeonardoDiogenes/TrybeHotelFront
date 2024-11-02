import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Should show Login Form elements' , () => {
  it('Should show Login Form elements after clicking on Login button', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();

    userEvent.click(loginButton);

    const loginHeading = await screen.findByRole('heading', { level: 2, name: /LOGIN/i });
    const emailInput = await screen.findByPlaceholderText('Email');
    const passwordInput = await screen.findByPlaceholderText('Password');
    expect(loginHeading).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});