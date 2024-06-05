import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

import logoURL from '../assets/relative-ci.svg';
import css from './header.module.css';

export function Header() {
  return (
    <Layout.Header className={css.root}>
      <div className={css.inner}>
        <Link href="/" className={css.logo}>
          <img src={logoURL.src} height={32} alt="RelativeCI" />
        </Link>
        <Menu mode="horizontal" className={css.menu}>
          <Menu.Item key="home">
            <Link href="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="repos">
            <Link href="/repos">
              Examples
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
}
