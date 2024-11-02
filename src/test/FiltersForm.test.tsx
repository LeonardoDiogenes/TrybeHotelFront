import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Should show the search hotel and rooms form at the home page', () => {
  it('Should show FiltersForm component elements', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const findHeader = screen.getByRole('heading', { level: 1, name: /Encontrar/i });
    const HotelBtn = screen.getByRole('button', { name: /Hotéis/i });
    const RoomBtn = screen.getByRole('button', { name: /Quartos/i });
    const LocationInput = screen.getByLabelText('Localização:');
    const CheckinInput = screen.getByLabelText('Check-in:');
    const CheckoutInput = screen.getByLabelText('Check-out:');
    const GuestQuantInput = screen.getByLabelText('Quantidade de hóspedes:');
    const SubmitBtn = screen.getByRole('button', { name: /Pesquisar/i });

    expect(findHeader).toBeInTheDocument();
    expect(HotelBtn).toBeInTheDocument();
    expect(RoomBtn).toBeInTheDocument();
    expect(LocationInput).toBeInTheDocument();
    expect(CheckinInput).toBeInTheDocument();
    expect(CheckoutInput).toBeInTheDocument();
    expect(GuestQuantInput).toBeInTheDocument();
    expect(SubmitBtn).toBeInTheDocument();
  })
})