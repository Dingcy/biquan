import React from 'react';
import {Button,Menu, Dropdown,message} from 'antd';
import { useTranslation } from 'react-i18next';
import './index.scss';

function handleMenuClick(e:any) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" >
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd menu item
    </Menu.Item>
  </Menu>
);

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="Home">
      <Button type="primary">你好</Button>
      <div className='all'>{t('Welcome to React')}</div>
      <Dropdown overlay={menu}>
      <Button>
        Button
      </Button>
    </Dropdown>
    </div>
  );
}

export default Home;
