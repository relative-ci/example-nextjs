"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography } from 'antd';

export function NotFound() {
  const pathname = usePathname();

  return (
    <div>
      <Typography.Paragraph>
        <code>{pathname}</code>
        {' '}
        does not exit.
      </Typography.Paragraph>
      <Link href="/">Go to homepage</Link>
    </div>
  );
}
