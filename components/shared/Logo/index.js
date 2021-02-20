import { useState, useRef } from 'react';
import './style.scss';
import cx from 'classnames';
import { ReactComponent as MenuIcon } from 'icons/menu.svg';

const Logo = ({ type }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const navEleRef = useRef(null);
  const handleVisibleMenu = (visible) => {
    navEleRef.current.classList[visible ? 'add' : 'remove']('visibleNav');
    setVisibleMenu(visible);
  };
  return (
    <div className="logo-wrapper">
      <div className={`logo-container ${type}`} ref={navEleRef} onMouseLeave={() => handleVisibleMenu(false)}>
        <div className="back-blog" />
        <div className="logo">
          <MenuIcon onClick={() => handleVisibleMenu(!visibleMenu)} />
          <h2>EXP|CON</h2>
        </div>
        <ul className="nav" hidden={!visibleMenu}>
          <li>What is it</li>
          <li>Perks</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
