// frontend/src/components/relationship/PendingRelationships.tsx

import React, { useEffect, useState } from 'react';
import { getPendingRequests, acceptRequest, declineRequest } from '../../utils/api';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


interface User {
    firstName: string;
    lastName: string;
    profilePic: string;
    accountType: string;
  }
  
interface Request {
    id: string;
    relatedUser: User;
}
  
interface PendingRelationshipsProps {
    user: any;
    requests: Request[];
  }

const PendingRelationships: React.FC<PendingRelationshipsProps> = ({ user }) => {
    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
      getPendingRequests().then(setRequests);
    }, []);

  return (
    <div className="requests">
      {requests.map(request => (
        <div className="request">
          <img src={request.relatedUser.profilePic} alt="Profile"/>
          <Typography>{request.relatedUser.firstName} {request.relatedUser.lastName}</Typography>
          <Typography>{request.relatedUser.accountType}</Typography>
          <Button onClick={() => acceptRequest(request.id)}>Accept</Button>
          <Button onClick={() => declineRequest(request.id)}>Decline</Button>
        </div>
      ))}
    </div>
  );
};

export default PendingRelationships;