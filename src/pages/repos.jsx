import React from 'react';

import { PageHeader } from '../layout/page-header';
import { Layout } from '../layout';
import { Main } from '../layout/main';
import { RepoList } from '../components/repo-list';

export default function ReposPage() {
  return (
    <Layout>
      <PageHeader title="Examples" />
      <Main>
        <RepoList />
      </Main>
    </Layout>
  );
}
