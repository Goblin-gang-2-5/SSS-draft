import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import { SearchOutlined } from '@ant-design/icons'
import Logo from './MIREA_Gerb_Colour 1.png'
import PersonalAccount from './iconamoon_profile-light.png'
import AddAdministrator from './eos-icons_admin-outlined.png'
import Map from './material-symbols_map-outline.png'
import StudentRessetlment from './ph_student.png'

function App() {
  return (
      <>
          <div style={{display: "grid", gridTemplateColumns: "25% auto", minHeight: "100vh"}}>
          <div style={{borderRight: "thin solid rgba(0, 0, 0, 0.25)"}}>
              <div className="border">
                  <div className='Logo'> <img src={Logo} alt={'Логотип МИРЭА'}/>
                      <span style={{}}>MIREA Hostel</span>
                  </div>
              </div>
              <div className='menu'>
                  <div className='personal_account'><img src={PersonalAccount} alt={'Личный кабинет'}/>
                      <span style={{}}>Личный кабинет</span>
                  </div>
                  <div className='Add-administrator'><img src={AddAdministrator} alt={'Добавление Администратора'}/>
                      <span style={{}}>Добавление администратора</span>
                  </div>
                  <div className='Map'><img src={Map} alt={'Карта'}/>
                      <span style={{}}>Карта</span>
                  </div>
                  <div className='StudentRessetlment'><img src={StudentRessetlment} alt={'Расселение студентов'}/>
                      <span style={{}}>Расселение студентов</span>
                  </div>
              </div>
          </div>
              <div>
          <header className="App-header">
              <div className='header'>
                  <div className='Site-header'>
                      <div className='search'>
                          <Button  icon={<SearchOutlined />}>Поиск...</Button>
                      </div>
                  </div>
                  <div className='button'>
                      <Button  onClick={() => {alert('clicked')}}>Войти</Button>
                  </div>
              </div>
          </header>
              <main>
                  <div className='main'>
                      <div className='ChoosingHostel'>
                          <Button  icon={<SearchOutlined />}>Выбор общежития...</Button>
                      </div>
                      <div className='ChoosingFloor'>
                          <Button  icon={<SearchOutlined />}>Выбор этажа...</Button>
                      </div>
                      <div className='ChoosingaRoom'>
                          <Button  icon={<SearchOutlined />}>Выбор комнаты...</Button>
                      </div>
                  </div>
              </main>
              </div>
          </div>
      </>
  );
}

export default App;
