import React from 'react';
import { Layout as UILayout } from 'antd';
import 'antd/dist/antd.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import css from './index.module.css';

export function Layout({ children }) {
  return (
    <UILayout>
      <Header />
      <div className={css.contentContainer}>
        <UILayout.Content className={css.content}>
          {children}
        </UILayout.Content>
      </div>
      <Footer />
    </UILayout>
  );
}
