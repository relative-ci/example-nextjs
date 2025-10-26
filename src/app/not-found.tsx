"use client"

import { PageHeader } from '../layout/page-header';
import { Main } from '../layout/main';
import { NotFound } from '../components/not-found';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader title="Not found" />
      <Main>
        <NotFound />
      </Main>
    </>
  );
}
