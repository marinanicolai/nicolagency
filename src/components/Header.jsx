import { faBars, faChevronRight, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import logo2 from '../assets/logos/logo-w-bg.png';
import styles from './styles/Header.module.scss';

function Header() {
  const location = useLocation();
  const aboutUsActive = location.pathname === '/about';
  const teamActive = location.pathname === '/team';

  const headerRef = useRef(null);
  const [isFixed, setFixed] = useState(false);
  const menuPanelRef1 = useRef(null);

  const timeout1 = useRef(undefined);

  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openAboutCollapse, setOpenAboutCollapse] = useState(false);

  // Show menu panel "about"
  const handleShowMenuPanel1 = useCallback(() => {
    clearTimeout(timeout1.current);
    menuPanelRef1.current.style.display = 'block';

    setTimeout(() => {
      menuPanelRef1.current.style.opacity = 1;
      menuPanelRef1.current.style.transform = 'translateY(0)';
    }, 0);
  }, []);

  // Hide menu panel "about"
  const handleHideMenuPanel1 = useCallback(() => {
    menuPanelRef1.current.style.opacity = 0;
    menuPanelRef1.current.style.transform = 'translateY(30px)';

    timeout1.current = setTimeout(() => {
      menuPanelRef1.current.style.display = 'none';
    }, 310); // transition duration: 0.3s
  }, []);

  // Show search modal
  const handleShowSearchModal = useCallback(() => {
    if (!openSearch) {
      setOpenSearch(true);
      document.body.classList.add('no-scrollbar');
    } else {
      setOpenSearch(false);
      document.body.classList.remove('no-scrollbar');
    }
  }, [openSearch]);

  // Fixed header on scroll
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

        <nav className={styles.navBar}>
          <div className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Home
            </NavLink>
          </div>
          <div
            className={styles.navItem}
            onMouseOver={handleShowMenuPanel1}
            onMouseLeave={handleHideMenuPanel1}
          >
            <NavLink
              to="/about"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              About
            </NavLink>

            <div className={styles.menuPanel} ref={menuPanelRef1}>
              <NavLink
                to="/about"
                className={`${styles.menuPanelItem} ${aboutUsActive ? styles.active : ''}`}
              >
                About Us
              </NavLink>
              <NavLink
                to="/team"
                className={`${styles.menuPanelItem} ${teamActive ? styles.active : ''}`}
              >
                Our Team
              </NavLink>
            </div>
          </div>
          <div className={styles.navItem}>
            <NavLink
              to="/services"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Services
            </NavLink>
          </div>
          <div className={styles.navItem}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Portfolio
            </NavLink>
          </div>
          <div className={styles.navItem}>
            <NavLink
              to="/blog"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Blog
            </NavLink>
          </div>
          <div className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Contact
            </NavLink>
          </div>

          <div className={`${styles.navItem} ${styles.searchIcon}`} onClick={handleShowSearchModal}>
            <FontAwesomeIcon icon={openSearch ? faX : faSearch} />
          </div>
        </nav>

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

        {/* Menu Modal */}
        <div className={`${styles.menuModal} ${openMenu ? styles.open : ''}`}>
          <button className={styles.closeMenuBtn} onClick={() => setOpenMenu(!openMenu)}>
            <FontAwesomeIcon icon={faX} />
          </button>

          <div className={styles.navMenu}>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                Home
              </NavLink>
            </div>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/about"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                About
              </NavLink>
            </div>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/services"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                Services
              </NavLink>
            </div>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                Portfolio
              </NavLink>
            </div>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/blog"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                Blog
              </NavLink>
            </div>
            <div className={styles.navMenuItem}>
              <NavLink
                to="/contact"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
