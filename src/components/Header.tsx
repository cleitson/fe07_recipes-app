import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const profileIconBtn = () => {
    return (
      <button onClick={ () => navigate('/profile') }>
        <img src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
      </button>
    );
  };

  const searchIconBtn = () => {
    return (
      <div>
        {isSearchVisible && <input type="search" data-testid="search-input" />}
        <button onClick={ handleSearchClick }>
          <img src={ searchIcon } alt="Search icon" data-testid="search-top-btn" />
        </button>
      </div>
    );
  };

  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>

      {(title === 'Profile' || title === 'Done Recipes' || title === 'Favorite Recipes')
        && (profileIconBtn())}

      {(title === 'Drinks' || title === 'Meals')
        && (
          <>
            {profileIconBtn()}
            {searchIconBtn()}
          </>
        )}
    </header>

  );
}

export default Header;
