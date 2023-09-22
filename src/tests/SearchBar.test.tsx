import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('SearchBar', () => {
  it('should render the SearchBar component', async () => {
    const { user } = renderWithRouter(<App />, { route: '/meals' });
    const bntShowSearchBar = screen.getByRole('img', { name: /search-icon/i });
    await user.click(bntShowSearchBar);
    const inputSearch = screen.getByRole('textbox');
    expect(inputSearch).toBeInTheDocument();
    await user.type(inputSearch, 'chicken');
  });
});
