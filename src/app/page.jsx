"use client"

import Link from 'next/link';
import { Divider } from 'antd';

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { RepoList } from '../components/repo-list';

export default function HomePage() {
  return (
    <>
      <PageHeader title="Latest examples" />
      <Main>
        <RepoList limit={5} />
        <Divider />
        <Link href="/repos">
          View all
        </Link>
      </Main>
    </>
  );
}
