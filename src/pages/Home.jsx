import '../style/home.scss';
import { Route, Routes,NavLink} from "react-router-dom";
import Organization from './Organization';
import Agency from './Agency';
import Counter from './Counter';
import Operation from './Operation';
import { FaDiceSix, FaElementor, FaCalendarDay } from "react-icons/fa";
import { AiTwotoneDashboard } from "react-icons/ai";
import { RiOrganizationChart } from "react-icons/ri";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import {IoIosArrowForward } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import Dashboard from './DashBoard';
import DayOfWeek from './DayOfWeek';
import Province from './Province';
import Zone from './Zone';
import Commune from './Commune';
import {useState} from 'react';
import StatusBar from '../components/StatusBar';


function Home() {

  const [register, setRegister] = useState(false)
  const [drawer, setDrawer] = useState(false);

  const optionClicked = () => {
    setDrawer(false)
  }
  const handleRegisterClicked = () => {
    setRegister(!register)
    setDrawer(false)
  }

  return (
    <div className='home'>
      <div className='main-row'>
        <div className={drawer ? 'vertical-menu_close' : 'vertical-menu'}>
          <div className='row vertical-menu__header d-flex flex-row align-items-center justify-content-between'>
            <i className={drawer ? "fa-solid fa-bars main_icon_selected" : "fa-solid fa-bars icon"} onClick={() => setDrawer(!drawer)}></i>
            <img src='profile.png' alt="le profile de l'utilisateur" />
            <div className='d-flex flex-column justify-content-center identiy-container'>
              <p className='name'> François Tshi</p>
              <p className='role'> Super Admin</p>
            </div>
          </div>
          <div className='row vertical-menu__body'>
            <ul>
              <NavLink to={"/home"} className={({ isActive }) => isActive ? 'active__nav__li'
                : 'nav__li'} onClick={() => optionClicked()} >
                <AiTwotoneDashboard className='option_menu_icon' /><span>Tableau de bord</span>
              </NavLink>
              <NavLink to={"/organization"} className={({ isActive }) => isActive ?
                'active__nav__li ' : 'nav__li'} onClick={() => optionClicked()}>
                <RiOrganizationChart className='option_menu_icon' /> <span>Organisation <span className='indicator'></span></span>
              </NavLink>
              <NavLink to={"/agency"} className={({ isActive }) => isActive ?
                'active__nav__li ' : 'nav__li'} onClick={() => optionClicked()}>
                <FaWarehouse className='option_menu_icon' /><span>Agence</span>
              </NavLink>
              <NavLink to={"/counter"} className={({ isActive }) => isActive ?
                'active__nav__li ' : 'nav__li'} onClick={() => optionClicked()}>
                <FaDiceSix className='option_menu_icon' /> <span>Guichet</span>
              </NavLink>
              <NavLink to={"/operation"} className={({ isActive }) => isActive ?
                'active__nav__li ' : 'nav__li'} onClick={() => optionClicked()}>
                <FaElementor className='option_menu_icon' /> <span>Opération</span>
              </NavLink>
              <NavLink to={"/day"} className={({ isActive }) => isActive ?
                'active__nav__li ' : 'nav__li'} onClick={() => optionClicked()}>
                <FaCalendarDay className='option_menu_icon' /> <span>Journée de service</span>
              </NavLink>
              <NavLink to={"/province"} onClick={() => { handleRegisterClicked() }}
                className={({ isActive }) => isActive ? 'active_nav__li_register' : 'nav__li_register'}>
                <BsFileEarmarkTextFill className='option_menu_icon' /> <span>Registre</span>
                <IoIosArrowForward className={register ? 'option_menu_icon_register_open' : 'option_menu_icon_register'} />
              </NavLink>
              <div className={register ? 'under_options_item_container' : 'under_options_item_container_close'}>
                <ul>
                  <NavLink to={"/registre/province"}
                    className={({ isActive }) => isActive ?
                      'active_sub__nav__li' : 'sub__nav__li'} onClick={() => optionClicked()}>
                    <span>Province</span>
                  </NavLink>
                  <NavLink to={"/registre/zone"} className={({ isActive }) => isActive ?
                    'active_sub__nav__li' : 'sub__nav__li'} onClick={() => optionClicked()}>
                    <span>Zone</span>
                  </NavLink>
                  <NavLink to={"/registre/commune"} className={({ isActive }) => isActive ?
                    'active_sub__nav__li' : 'sub__nav__li'} onClick={() => optionClicked()}>
                    <span>Commune</span>
                  </NavLink>
                </ul>
              </div>

            </ul>
          </div>
        </div>

        <div className={'main-container'}>
          <StatusBar/>
          <div className='page-container'>
            <Routes>
              <Route element={<Dashboard />} path="/home" />
              <Route element={<Organization itemsPerPage={8}/>} path="/organization" />
              <Route element={<Agency />} path="/agency" />
              <Route element={<Counter />} path="/counter" />
              <Route element={<Operation />} path="/operation" />
              <Route element={<DayOfWeek />} path="/day" />
              <Route path='/province' />
              <Route element={<Province />} path="/registre/province" />
              <Route element={<Zone />} path="/registre/zone" />
              <Route element={<Commune />} path="/registre/commune" />
            </Routes>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
