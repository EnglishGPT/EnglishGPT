// frontend/src/components/relationship/Relationship.tsx

import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IDCard from './IDCard';
import ExistingRelationships from './ExistingRelationships';
import PendingRelationships from './PendingRelationships';
import { getRelationships, getPendingRequests } from '../../utils/api';

interface RelationshipProps {
  user: any;
}

const Relationship: React.FC<RelationshipProps> = ({ user }) => {
    const [value, setValue] = useState(0);
    const [relationships, setRelationships] = useState([]);
    const [requests, setRequests] = useState([]);
  
    useEffect(() => {
      getRelationships(user.id).then(setRelationships);
      getPendingRequests().then(setRequests);
    }, [user.id]);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My ID Card" />
          <Tab label="Existing Relationship" />
          <Tab label="Pending Relationship" />
        </Tabs>
      </Box>
      {value === 0 && <IDCard user={user} />}
      {value === 1 && <ExistingRelationships user={user} relationships={relationships} />}
      {value === 2 && <PendingRelationships user={user} requests={requests} />}
    </Box>
  );
};

export default Relationship;
