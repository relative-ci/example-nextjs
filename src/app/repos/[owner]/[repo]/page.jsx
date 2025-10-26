"use client"

import { useRouter } from 'next/router';

import { PageHeader } from '../../../../layout/page-header';
import { Main } from '../../../../layout/main';
import { RepoDetails } from '../../../../components/repo-details';

export default function RepoDetailsPage(all) {
  const router = useRouter();
  const { owner, repo } = router.query;

  return (
    <>
      {repo && <PageHeader title={repo} onBack={router.back} />}
      <Main>
        {repo && <RepoDetails owner={owner} repo={repo} /> }
      </Main>
    </>
  );
}
