import React from 'react';
import { useRouter } from 'next/router';

import { PageHeader } from '../layout/page-header';
import { Layout } from '../layout';
import { Main } from '../layout/main';
import { NotFound } from '../components/not-found';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Layout>
      <PageHeader title="Not found" />
      <Main>
        <NotFound location={router.pathname} />
      </Main>
    </Layout>
  );
}
