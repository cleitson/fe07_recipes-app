import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('NotFound', () => {
  it('should render the NotFound component', () => {
    renderWithRouter(<App />, { route: '/random' });
    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
