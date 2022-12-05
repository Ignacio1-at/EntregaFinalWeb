import React, { useState, useEffect, useCallback, useRef } from 'react';
import './MenuSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faBowlFood ,faBrain, faLineColumns,faPersonCircleXmark, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../../components/MenuItem';
import logo from '../../assets/images/savelife.png'
import {Link} from 'react-scroll'
const MenuSection = () => {
    const [ScrollActive, setScrollActive] = useState(false);
    const [y, setY] = useState(window.scrollY);
    const [toggle, setToggle] = useState(true);

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            if (y < 200 && !ScrollActive) {
                setScrollActive(current => !current);
            }
          } else if (y < window.scrollY) {
            if (y < 200 && ScrollActive) {
                setScrollActive(current => !current);
            }
          }
          setY(window.scrollY);
        }, [y]
      );
    
    const HandlerClickProfile = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {        
        setY(window.scrollY);
        window.addEventListener('scroll', handleNavigation);

        return () => {
          window.removeEventListener('scroll', handleNavigation);
        };
      }, [handleNavigation]);
	
  return (
    <div className="menu-section" style={{ overflow: 'scroll' }}>
        <header className='headerMenuSection'>
            <nav className={`navMenuSection ${ScrollActive ? "" : "navShadow"}`}>
                <div id="brand">
                    <div id="logo" onClick={HandlerClickProfile}><img style={{ width: '100%', height: '100%'}} src={logo} alt="Logo"/></div>
                    <div id="word-mark">SAVE LIFE</div>
                </div>
                <div id="menu">
                    <div id="menu-toggle" onClick={() => setToggle(!toggle)} className={`${toggle ? "closeMenu" : ""}`}>
                        <div id="menu-icon">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul 
                    className={`ul-menuSection ${toggle ? "showMenu" : ""}`}
                    style={{
                        top: ScrollActive ? '100px' : '160px'
                    }}>
                        <Link className='li-menuSection' onClick={() => setToggle(!toggle)} to="section00" spy={true} smooth={true}>
                            <div className='iconMenu'>
                                <FontAwesomeIcon icon={faHome} />
                                <span className='spanMenuSection'>Home</span>
                            </div>
                        </Link>
                      

                        <Link className='li-menuSection' onClick={() => setToggle(!toggle)} to="section01" spy={true} smooth={true}>
                            <div className='iconMenu'>
                                <FontAwesomeIcon icon={faDumbbell} />
                                <span className='spanMenuSection'>Entrenamiento</span>
                            </div>
                        </Link>

                        <Link className='li-menuSection' onClick={() => setToggle(!toggle)} to="section02" spy={true} smooth={true}>
                            <div className='iconMenu'>
                                <FontAwesomeIcon icon={faBowlFood} />
                                <span className='spanMenuSection'>Alimentación</span>
                            </div>
                        </Link>

                        <Link className='li-menuSection' onClick={() => setToggle(!toggle)} to="section03" spy={true} smooth={true}>
                            <div className='iconMenu'>
                                <FontAwesomeIcon icon={faBrain} />
                                <span className='spanMenuSection'>Salud</span>
                            </div>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div id="hero-section">
                <div id="head-line"></div>
            </div>
        </header>
        <section className='sectionMenuSection' id="section00">
            <div id="heading"></div>
        </section>
        <section className='sectionMenuSection' id="section01">
            <div id="heading"></div>
        </section>
        <section className='sectionMenuSection' id="section02">
            <div id="heading"></div>
        </section>
        <section className='sectionMenuSection' id="section03">
            <div id="heading"></div>
        </section><a href="https://youtu.be/m1IU7zjl1k4" id="youtube"><i className="fa fa-youtube-play"></i></a>
    </div>
  );
}

export default MenuSection;
