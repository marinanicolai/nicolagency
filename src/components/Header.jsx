import { faBars, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import logo2 from '../assets/logos/logo-big-wo-bg.png';

import styles from './styles/Header.module.scss';

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);
  const [isFixed, setFixed] = useState(false);

  // Refs for dropdown panels
  const menuPanelRef1 = useRef(null); // About
  const menuPanelRef2 = useRef(null); // Services
  const menuPanelRef3 = useRef(null); // Blog

  const timeout1 = useRef(undefined);
  const timeout2 = useRef(undefined);
  const timeout3 = useRef(undefined);

  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // ABOUT handlers
  const handleShowMenuPanel1 = useCallback(() => {
    clearTimeout(timeout1.current);
    if (menuPanelRef1.current) {
      menuPanelRef1.current.style.display = 'block';
      setTimeout(() => {
        menuPanelRef1.current.style.opacity = 1;
        menuPanelRef1.current.style.transform = 'translateY(0)';
      }, 0);
    }
  }, []);

  const handleHideMenuPanel1 = useCallback(() => {
    if (menuPanelRef1.current) {
      menuPanelRef1.current.style.opacity = 0;
      menuPanelRef1.current.style.transform = 'translateY(30px)';
      timeout1.current = setTimeout(() => {
        if (menuPanelRef1.current) {
          menuPanelRef1.current.style.display = 'none';
        }
      }, 310);
    }
  }, []);

  // SERVICES handlers
  const handleShowMenuPanel2 = useCallback(() => {
    clearTimeout(timeout2.current);
    if (menuPanelRef2.current) {
      menuPanelRef2.current.style.display = 'block';
      setTimeout(() => {
        menuPanelRef2.current.style.opacity = 1;
        menuPanelRef2.current.style.transform = 'translateY(0)';
      }, 0);
    }
  }, []);

  const handleHideMenuPanel2 = useCallback(() => {
    if (menuPanelRef2.current) {
      menuPanelRef2.current.style.opacity = 0;
      menuPanelRef2.current.style.transform = 'translateY(30px)';
      timeout2.current = setTimeout(() => {
        if (menuPanelRef2.current) {
          menuPanelRef2.current.style.display = 'none';
        }
      }, 310);
    }
  }, []);

  // BLOG handlers
  const handleShowMenuPanel3 = useCallback(() => {
    clearTimeout(timeout3.current);
    if (menuPanelRef3.current) {
      menuPanelRef3.current.style.display = 'block';
      setTimeout(() => {
        menuPanelRef3.current.style.opacity = 1;
        menuPanelRef3.current.style.transform = 'translateY(0)';
      }, 0);
    }
  }, []);

  const handleHideMenuPanel3 = useCallback(() => {
    if (menuPanelRef3.current) {
      menuPanelRef3.current.style.opacity = 0;
      menuPanelRef3.current.style.transform = 'translateY(30px)';
      timeout3.current = setTimeout(() => {
        if (menuPanelRef3.current) {
          menuPanelRef3.current.style.display = 'none';
        }
      }, 310);
    }
  }, []);

  // Search modal toggle
  const handleShowSearchModal = useCallback(() => {
    if (!openSearch) {
      setOpenSearch(true);
      document.body.classList.add('no-scrollbar');
    } else {
      setOpenSearch(false);
      document.body.classList.remove('no-scrollbar');
    }
  }, [openSearch]);

  // Sticky header
  const handleScroll = useCallback(() => {
    const position = window.scrollY || window.pageYOffset;
    if (position > 0 && !isFixed) {
      setFixed(true);
    } else if (position <= 0 && isFixed) {
      setFixed(false);
    }
  }, [isFixed]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`${styles.Header} ${isFixed ? styles.fixed : ''}`} ref={headerRef}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          <img src={isFixed ? logo2 : logo} alt="logo" />
        </Link>
        <span className={styles.agencyName}>Nicolagency</span>
        <nav className={styles.navBar}>

          {/* HOME */}
          <div className={styles.navItem}>
            <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Home</NavLink>
          </div>

          {/* ABOUT */}
          <div className={styles.navItem} onMouseOver={handleShowMenuPanel1} onMouseLeave={handleHideMenuPanel1}>
            <NavLink to="/about" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>About</NavLink>
            <div className={styles.menuPanel} ref={menuPanelRef1}>
              <NavLink to="/about" className={styles.menuPanelItem}>About Us</NavLink>
              <NavLink to="/team" className={styles.menuPanelItem}>Our Team</NavLink>
            </div>
          </div>

          {/* SERVICES */}
          <div className={styles.navItem} onMouseOver={handleShowMenuPanel2} onMouseLeave={handleHideMenuPanel2}>
            <NavLink to="/services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Services</NavLink>
            <div className={styles.menuPanel} ref={menuPanelRef2}>
              <NavLink to="/website" className={styles.menuPanelItem}>Building Website</NavLink>
              <NavLink to="/design" className={styles.menuPanelItem}>Designing Website</NavLink>
              <NavLink to="/content" className={styles.menuPanelItem}>Creating Social Media Content</NavLink>
            </div>
          </div>

          {/* BLOG */}
          <div className={styles.navItem} onMouseOver={handleShowMenuPanel3} onMouseLeave={handleHideMenuPanel3}>
            <NavLink to="/blog" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Blog</NavLink>
            <div className={styles.menuPanel} ref={menuPanelRef3}>
              <NavLink to="/news" className={styles.menuPanelItem}>News</NavLink>
              <NavLink to="/articles" className={styles.menuPanelItem}>Articles</NavLink>
              <NavLink to="/guides" className={styles.menuPanelItem}>Guides</NavLink>
            </div>
          </div>

          {/* CONTACT */}
          <div className={styles.navItem}>
            <NavLink to="/contact" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Contact</NavLink>
          </div>

          {/* Search Icon */}
          <div className={`${styles.navItem} ${styles.searchIcon}`} onClick={handleShowSearchModal}>
            <FontAwesomeIcon icon={openSearch ? faX : faSearch} />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.menuBtn} onClick={() => setOpenMenu(!openMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Search Modal */}
        <div className={`${styles.searchModal} ${openSearch ? styles.open : ''}`}>
          <div className={styles.inputWrap}>
            <input type="text" name="search" placeholder="Start typing to search..." />
            <button className={styles.closeSearchBtn} onClick={handleShowSearchModal}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Modal */}
        <div className={`${styles.menuModal} ${openMenu ? styles.open : ''}`}>
          <button className={styles.closeMenuBtn} onClick={() => setOpenMenu(!openMenu)}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <div className={styles.navMenu}>
            <NavLink to="/" className={styles.navMenuItem}>Home</NavLink>
            <NavLink to="/about" className={styles.navMenuItem}>About</NavLink>
            <NavLink to="/services" className={styles.navMenuItem}>Services</NavLink>
            <NavLink to="/portfolio" className={styles.navMenuItem}>Portfolio</NavLink>
            <NavLink to="/blog" className={styles.navMenuItem}>Blog</NavLink>
            <NavLink to="/contact" className={styles.navMenuItem}>Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
