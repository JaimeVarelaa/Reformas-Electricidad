import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

import MoonIcon from '../../assets/icons/Dark.svg?react';
import SunIcon from '../../assets/icons/Light.svg?react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const IconComponent = theme === 'light' ? MoonIcon : SunIcon;

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      <IconComponent className="theme-icon" />
    </button>
  );
};

export default ThemeToggle;