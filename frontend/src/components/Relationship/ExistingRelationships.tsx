// frontend/src/components/relationship/ExistingRelationships.tsx

import React, { useEffect, useState } from 'react';
import { getRelationships, sendRelationshipRequest, declineRequest } from '../../utils/api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    profile_image: string;
    user_type: string;
}
  
interface Relationship {
    id: string;
    relatedUser: User[];
}

interface ExistingRelationshipsProps {
    user: any;
    relationships: Relationship[];
  }

const ExistingRelationships: React.FC<ExistingRelationshipsProps> = ({ user }) => {
    const [relationships, setUserRelationships] = useState<Relationship[]>([]);

    useEffect(() => {
      getRelationships(user.id).then(setUserRelationships);
    }, [user.id]);

    console.log(relationships);

    return (
        <div className="relationships">
            {relationships.map(relationship => (
                <Accordion>
                    <AccordionSummary>
                        {/* <img src={relationship.relatedUser.profile_image} alt="Profile"/>
                        <Typography>{relationship.relatedUser.first_name} {relationship.relatedUser.last_lame}</Typography>
                        <Typography>{relationship.relatedUser.user_type}</Typography> */}
                        <Button onClick={() => declineRequest(relationship.id)}>Remove</Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Here you can add a table or list to show the information of the related users */}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default ExistingRelationships;