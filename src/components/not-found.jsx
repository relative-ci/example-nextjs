import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';

export function NotFound({ location }) {
  return (
    <div>
      <Typography.Paragraph>
        <code>{location}</code>
        {' '}
        does not exit.
      </Typography.Paragraph>
      <Link href="/">Go to homepage</Link>
    </div>
  );
}
