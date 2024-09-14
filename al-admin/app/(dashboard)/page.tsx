import * as React from 'react';
import Typography from '@mui/material/Typography';
import { auth } from '../../auth';

export default async function HomePage() {
  const session = await auth();
  const user = session?.user?.name || 'User'
  const email = session?.user?.email || '-'
  return (
    <Typography>
      AU.LIfe Admin, {user} ({email})
    </Typography>
  );
}
