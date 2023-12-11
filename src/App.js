import logo from './logo.svg';
import './App.css';
import {Button, message} from "antd";
import { SearchOutlined } from '@ant-design/icons'
import Logo from './MIREA_Gerb_Colour 1.png'
import PersonalAccount from './iconamoon_profile-light.png'
import AddAdministrator from './eos-icons_admin-outlined.png'
import Map from './material-symbols_map-outline.png'
import StudentRessetlment from './ph_student.png'
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  { MenuProps } from 'antd';
import { Dropdown} from 'antd';

function App() {
    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items= [
        {
            label: 'Этаж 1',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Этаж 2',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: 'Этаж 3',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: 'Этаж 4',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
        {
            label: 'Этаж 5',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ]
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
      <>
          <div style={{display: "grid", gridTemplateColumns: "25% auto", maxHeight: "100vh"}}>
          <div style={{borderRight: "thin solid rgba(0, 0, 0, 0.25)"}}>
              <div className="border">
                  <div className='Logo'> <img src={Logo} alt={'Логотип МИРЭА'}/>
                      <span>MIREA Hostel</span>
                  </div>
              </div>
              <div className='menu'>
                  <div className='menuItem'><img src={PersonalAccount} alt={'Личный кабинет'}/>
                      <span style={{}}>Личный кабинет</span>
                  </div>
                  <div className='menuItem'><img src={AddAdministrator} alt={'Добавление Администратора'}/>
                      <span style={{}}>Добавление администратора</span>
                  </div>
                  <div className='menuItem'><img src={Map} alt={'Карта'}/>
                      <span style={{}}>Карта</span>
                  </div>
                  <div className='menuItem'><img src={StudentRessetlment} alt={'Расселение студентов'}/>
                      <span style={{}}>Расселение студентов</span>
                  </div>
              </div>
          </div>
              <div>
          <header>
              <div className='header'>
                  <div className='Site-header'>
                      <div className='search'>
                          <Button size={'large'}  style={{borderRadius: "50px"}} icon={<SearchOutlined />}>Поиск...</Button>
                      </div>
                  </div>
                  <div className='button'>
                      <Button size={"large"}  style={{borderRadius: "50px"}} onClick={() => {alert('clicked')}}>Войти</Button>
                  </div>
              </div>
          </header>
              <div style={{paddingBlock:"2em", paddingInline: "1em", backgroundColor: "#F5F5F5", minHeight: "100%"}}>
                  <main>
                      <div className='main'>
                          <div className="mainHeader">
                              <div className='ChoosingHostel'>
                                  <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                                      Выбор общежития...
                                  </Dropdown.Button>
                              </div>
                              <div className='ChoosingFloor'>
                                  <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                                      Выбор этажа...
                                  </Dropdown.Button>
                              </div>
                              <div className='ChoosingaRoom'>
                                  <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                                      Выбор комнаты...
                                  </Dropdown.Button>
                              </div>
                          </div>
                          <div className="contentContainer">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa delectus ea laudantium, molestiae neque quisquam sed? Ab ad adipisci aliquam amet animi assumenda aut beatae blanditiis culpa deleniti deserunt dolor dolores enim esse hic iusto labore laboriosam laborum laudantium libero magni maiores minus, molestiae nisi nostrum odio officia pariatur placeat porro quia quidem, quos repellendus similique sunt tempore veritatis vero! Accusamus ad, doloremque ea maxime modi molestias odio, quae quam quas repellat, repellendus repudiandae sed similique. Accusamus ad assumenda blanditiis commodi debitis, dicta dolores ex excepturi expedita fugit in ipsa molestiae necessitatibus nemo nesciunt nulla porro possimus quas quisquam recusandae rem sed, similique sit tempore totam unde veritatis vitae voluptate voluptatem voluptatum. Aliquid blanditiis commodi exercitationem fugiat fugit obcaecati perspiciatis sint. Asperiores beatae illum ipsum nobis saepe, soluta tenetur vel vitae voluptate! A, accusamus aliquam architecto asperiores at deserunt facere magni repellendus ut voluptates. Ad aut deserunt ducimus, ipsam iusto, minus mollitia natus nesciunt non quam qui quo ratione recusandae sapiente sit tenetur ut, velit. Ab accusantium aliquid architecto aut autem cupiditate deleniti deserunt dignissimos dolorem, doloribus dolorum ducimus error esse explicabo fuga hic iusto laboriosam magni minus modi nam obcaecati odio officia quibusdam quidem quis quos ratione repudiandae rerum sed sit soluta, tempora ut vel velit voluptas voluptate. Accusantium alias amet dignissimos, distinctio doloremque ea quibusdam voluptatem. Assumenda atque ea laborum molestiae nulla temporibus vero! Alias autem debitis delectus, ducimus eum illum in, inventore perspiciatis provident quo sit soluta voluptatibus. Autem consectetur consequatur corporis, cupiditate dicta dignissimos, doloribus eaque eos et ex ipsam itaque maiores minima natus neque omnis perspiciatis possimus quidem, rem repellat saepe ut voluptatibus! A ad architecto aspernatur autem commodi debitis dolor doloribus eius est excepturi fugiat inventore ipsa ipsam ipsum libero molestiae omnis, perspiciatis praesentium provident quasi quo reiciendis repellat sequi sunt temporibus totam.
                         <div className='Check'>
                             <Button type="primary">Заселить студента</Button>
                         </div>
                          </div>
                      </div>
                  </main>
              </div>
              </div>
          </div>
      </>
  );
}

export default App;
