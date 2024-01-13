import './App.css'
import { useState } from 'react';

import logo from './assets/images/logo.svg'
import arrowDown from './assets/images/icon-arrow-down.svg'
import arrowUp from './assets/images/icon-arrow-up.svg'
import iconMenu from './assets/images/icon-menu.svg'
import iconMenuClose from './assets/images/icon-close-menu.svg'
import todoListIcon from './assets/images/icon-todo.svg'
import calendarIcon from './assets/images/icon-calendar.svg'
import remindersIcon from './assets/images/icon-reminders.svg'
import planningIcon from './assets/images/icon-planning.svg'
import contentImage from './assets/images/image-hero-desktop.png'
import contentImageMobile from './assets/images/image-hero-mobile.png'
import contentIcon1 from './assets/images/client-databiz.svg'
import contentIcon2 from './assets/images/client-audiophile.svg'
import contentIcon3 from './assets/images/client-meet.svg'
import contentIcon4 from './assets/images/client-maker.svg'

export default function App(){

  function DropdownItem({text, icon, activeIcon, children}) {

    const [enableDropdown, setEnableDropdown] = useState(false);

    const cssStyle = text.toLowerCase() + "-content";

    function ifClicked() {
      setEnableDropdown(!enableDropdown);      
    }
    return (
      <li className="dropdown">
        <div className="dropdown-title" onClick={ifClicked}>
          <div className="dropdown-text"><a href="#">{text}</a></div>
          <div className="dropdown-icon">
            {enableDropdown?
            <img src={activeIcon} alt="Dropdown image" />
            :
            <img src={icon} alt="Dropdown image" />
            }
          </div>
        </div>
        {enableDropdown?  
        <ul className={cssStyle}>
          {children}
        </ul>
        :
        <></>
        }
      </li>
    );
  }
  function Navigation() {
    const [onMobileClick, setOnMobileClick] = useState(false);
    const [currentStyle, setCurrentStyle] = useState('vnav');
    const [currentIconStyle, setCurrentIconStyle] = useState('pos-relative');
    const [currentMiniFeaturesStyle, setCurrentMiniFeaturesStyle] = useState('mini-dropdown-features-content-hidden');
    const [currentMiniCompanyStyle, setCurrentMiniCompanyStyle] = useState('mini-dropdown-company-content-hidden');
    
    function ifClicked() {
      setOnMobileClick(!onMobileClick);

      if(!onMobileClick){
        setCurrentStyle('vnav-shown vnav');
        setCurrentIconStyle('hnav-right-mobile pos-fixed')
      }else{
        setCurrentStyle('vnav-hidden vnav');
        setCurrentIconStyle('hnav-right-mobile pos-relative')
      }
    }

    function onMiniFeaturesClicked() {
      if(currentMiniFeaturesStyle === 'mini-dropdown-features-content-hidden'){
        setCurrentMiniFeaturesStyle('mini-dropdown-features-content-shown');
      }else{
        setCurrentMiniFeaturesStyle('mini-dropdown-features-content-hidden');
      }
    }
    function onMiniCompanyClicked() {
      if(currentMiniCompanyStyle === 'mini-dropdown-company-content-hidden'){
        setCurrentMiniCompanyStyle('mini-dropdown-company-content-shown');
      }else{
        setCurrentMiniCompanyStyle('mini-dropdown-company-content-hidden');
      }
    }
    
    return (
      <>
      <nav className="hnav">
        <div className="nav-left">
          <div className="logo-container">
            <img src={logo} alt="Logo image" />
          </div>
          <ul className="nav-left-content">
            <DropdownItem text="Features" icon={arrowDown} activeIcon={arrowUp}>
              <li className="dropdown-item">
                <div className="dropdown-item-image">
                  <img src={todoListIcon} alt="Todo list icon" />
                </div>
                <p><a href="#">Todo List</a></p>
              </li>

              <li className="dropdown-item">
                <div className="dropdown-item-image">
                  <img src={calendarIcon} alt="Calendar icon" />
                </div>
                <p><a href="#">Calendar</a></p>
              </li>

              <li className="dropdown-item">
                <div className="dropdown-item-image">
                  <img src={remindersIcon} alt="Reminders icon" />
                </div>
                <p><a href="#">Reminders</a></p>
              </li>

              <li className="dropdown-item">
                <div className="dropdown-item-image">
                  <img src={planningIcon} alt="Planning icon" />
                </div>
                <p><a href="#">Planning</a></p>
              </li>
            </DropdownItem>
            <DropdownItem className="dropdown-company" text="Company" icon={arrowDown} activeIcon={arrowUp}>
              <li className="dropdown-item"><a href="#">History</a></li>
              <li className="dropdown-item"><a href="#">Our Team</a></li>
              <li className="dropdown-item"><a href="#">Blog</a></li>
            </DropdownItem>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <ul className="nav-right">
          <li><a href="#">Login</a></li>
          <button>Register</button>
        </ul>
      </nav>

      <nav className="hnav-mobile">
        <div className="hnav-left-mobile">
          <img src={logo} alt="Logo image" />
        </div>
        <div className={currentIconStyle} onClick={ifClicked}>
          {onMobileClick?
            <img src={iconMenuClose} alt="Menu icon"/>
            :
            <img src={iconMenu} alt="Menu icon"/>
          }
        </div>
        <div className={currentStyle}>
          <ul>
            <li className="mini-dropdown-features" onClick={onMiniFeaturesClicked}>
              <div className="mini-dropdown-features-title">
                <a href="#">Features</a>
                <img src={arrowDown} alt="Features tab" />
              </div>
              <div className={currentMiniFeaturesStyle}>
                <ul>
                  <li className="mini-dropdown-item">
                  <div className="mini-dropdown-item-image">
                    <img src={todoListIcon} alt="Todo list icon" />
                  </div>
                  <p><a href="#">Todo List</a></p>
                  </li>

                  <li className="mini-dropdown-item">
                  <div className="mini-dropdown-item-image">
                    <img src={calendarIcon} alt="Calendar icon" />
                  </div>
                  <p><a href="#">Calendar</a></p>
                  </li>

                  <li className="mini-dropdown-item">
                  <div className="mini-dropdown-item-image">
                    <img src={remindersIcon} alt="Reminders icon" />
                  </div>
                  <p><a href="#">Reminders</a></p>
                  </li>

                  <li className="mini-dropdown-item">
                  <div className="mini-dropdown-item-image">
                    <img src={planningIcon} alt="Planning icon" />
                  </div>
                  <p><a href="#">Planning</a></p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mini-dropdown-company" onClick={onMiniCompanyClicked}>
              <div className="mini-dropdown-company-title">
                <a href="#">Company</a>
                <img src={arrowDown} alt="Company tab" />
              </div>
              <div className={currentMiniCompanyStyle}>
                <ul>
                  <li className="mini-dropdown-item"><a href="#">History</a></li>
                  <li className="mini-dropdown-item"><a href="#">Our Team</a></li>
                  <li className="mini-dropdown-item"><a href="#">Blog</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">About</a></li>
          </ul>

          <p style={{marginTop: '5rem', textAlign: 'center'}}>Register</p>
          <div style={{textAlign: 'center', marginTop: '2rem'}}><button>Login</button></div>
        </div>
      </nav>
      </>
    );
  }

  function Content() {
    return(
      <div className="content">
        <div className="content-left">
          <h1>Make</h1>
          <h1 className="desktop-only">remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.</p>
          <button>Learn more</button>
          <div className="images-container">
            <div className="image1">
              <img src={contentIcon1} alt="Content Icon 1" />
            </div>
            <div className="image1">
            <img src={contentIcon2} alt="Content Icon 2" />
            </div>
            <div className="image1">
            <img src={contentIcon3} alt="Content Icon 3" />
            </div>
            <div className="image1">
            <img src={contentIcon4} alt="Content Icon 4" />              
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="right-image-container">
            <img src={contentImage} alt="Content Image" />
          </div>
          <div className="right-image-container-mobile">
            <img src={contentImageMobile} alt="Content Image" />
          </div>
        </div>
      </div>
    );
  }
 
  return (
    <>
      <Navigation />
      <Content />
    </>

  );
}
