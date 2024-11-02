import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Should show Layout elements', () => {
  it('should show Header elements', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /TrybeHotels/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sobre/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contato/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  it('should show Footer elements', () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )

      expect(screen.getByText(/Leonardo Diógenes/i)).toBeInTheDocument();
      const links = screen.getAllByRole('link');
      // 3 links header + 2 links footer
      expect(links).toHaveLength(5);
  });
});
