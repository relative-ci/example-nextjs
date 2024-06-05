import React from 'react';

import { PageHeader } from '../layout/page-header';
import { Layout } from '../layout';
import { Main } from '../layout/main';
import { About } from '../components/about';

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader title="About" />
      <Main>
        <About />
      </Main>
    </Layout>
  );
}
