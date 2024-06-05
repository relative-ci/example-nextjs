import React from 'react';
import Link from 'next/link';
import { Divider } from 'antd';

import { PageHeader } from '../layout/page-header';
import { Layout } from '../layout';
import { Main } from '../layout/main';
import { RepoList } from '../components/repo-list';

export default function HomePage() {
  return (
    <Layout>
      <PageHeader title="Latest examples" />
      <Main>
        <RepoList limit={5} />
        <Divider />
        <Link href="/repos">
          View all
        </Link>
      </Main>
    </Layout>
  );
}
