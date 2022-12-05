import React from 'react';
import './slidingMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faBowlFood ,faBrain, faLineColumns,faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../../components/MenuItem';
import logo from '../../assets/images/savelife.png'
const SlidingMenu = () => {

  return (
    <div className="sliding-bar">
        <nav class="main-menu">
            <div class="logo"></div>
            <div class="settings"></div>
            <ul class="top-icon">
                {/* <MenuItem
                name={'Home'}
                href={'http://startific.com'} 
                icon={faHome}
                /> */}
                <li>
                <a href="http://startific.com">
                    <i class="fa fa-home fa-lg">
                        <FontAwesomeIcon icon={faHome} />
                    </i>
                    <span class="nav-text">Home</span>
                </a>
                </li>

                <li>
                <a href="#">
                    <i class="fa fa-dumbbell fa-lg">
                        <FontAwesomeIcon icon={faDumbbell} />
                    </i>
                    <span class="nav-text">Entrenamiento</span>
                </a>
                </li>

                <li>
                <a href="#">
                    <i class="fa fa-pot-food fa-lg">
                        <FontAwesomeIcon icon={faBowlFood} />
                    </i>
                    <span class="nav-text">Alimentación</span>
                </a>
                </li>

                <li>
                <a href="#">
                    <i class="fa fa-brain fa-lg">
                    <FontAwesomeIcon icon={faBrain} />
                    </i>
                    <span class="nav-text">Salud</span>
                </a>
                </li>
            </ul>
            <ul class="mid-icon">
                <li>
                    <i class="fa fa-line-columns fa-lg">
                    ---
                    </i>
                </li>
            </ul>
            <ul class="bottom-icon">
                <li>
                    <a href="#">
                    <i class="fa fa-person-from-portal fa-lg">
                        <FontAwesomeIcon icon={faPersonCircleXmark} />
                        </i>
                        <span class="nav-text">Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default SlidingMenu;
