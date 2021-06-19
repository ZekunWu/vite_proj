import React, { FC, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.module.css';

export const Header: FC = () => {
  const history = useHistory();
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => history.push('./editor')}>
          CodeMirror
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      <div className={styles.avatarArea} onClick={() => history.push('')}>
        <img className={styles.avatar} src={import.meta.env.VITE_IMG_PATH + 'rem.png'} alt='rem' />
        <div className={styles.avatarText}>虚宿一Kino</div>
      </div>
      <div className={styles.navigation}>
        <Dropdown overlay={menu} arrow>
          <div className={styles.navItem}>
            <img className={styles.navIcon} src={import.meta.env.VITE_IMG_PATH + 'component.png'} alt='' />
            <div className={styles.navText}>组件</div>
          </div>
        </Dropdown>
        <div className={styles.navItem} onClick={() => history.push('./effect')}>
          <img className={styles.navIcon} src={import.meta.env.VITE_IMG_PATH + 'effect.png'} alt='' />
          <div className={styles.navText}>特效</div>
        </div>
        <div className={styles.navItem}>
          <img className={styles.navIcon} src={import.meta.env.VITE_IMG_PATH + 'test.png'} alt='' />
          <div className={styles.navText}>测试</div>
        </div>
      </div>
    </div>
  )
}