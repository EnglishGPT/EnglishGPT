// frontend/src/components/relationship/IDCard.tsx

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { generateHashcode } from '../../utils/api';

interface IDCardProps {
  user: any;
}

const IDCard: React.FC<IDCardProps> = ({ user }) => {
  const [hashcode, setHashcode] = useState<string>('');

  useEffect(() => {
    generateHashcode().then(({ hashcode }) => {
      setHashcode(hashcode);
    });
  }, []);

  return (
    <div className="center">
      <Card>
        <CardContent>
          <Typography variant="h5">{user.firstName} {user.lastName}</Typography>
          <Typography variant="body2">{user.accountType}</Typography>
          <img src={user.profilePic} alt="Profile"/>
          <Typography variant="body1">{hashcode}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default IDCard;
