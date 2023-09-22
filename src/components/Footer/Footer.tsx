import { Link } from 'react-router-dom';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <nav>
      <footer data-testid="footer">
        <Link to="/drinks">
          <img
            src={ drinkIcon }
            alt="drink Icon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/meals">
          <img
            src={ mealIcon }
            alt="meals Icon"
            data-testid="meals-bottom-btn"
          />
        </Link>
      </footer>
    </nav>
  );
}

export default Footer;
