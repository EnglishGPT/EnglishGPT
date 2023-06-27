import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Avatar } from '@mui/material';
import { Student } from '../../utils/api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StudentDetails from './StudentDetails';
import '../../assets/styles/components/Students.module.css';

interface Props {
  student: Student;
}

const StudentItem: React.FC<Props> = ({ student }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleExpand}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Avatar src={student.picture} />
        <Typography>{student.name}</Typography>
        <Typography>{student.knowledgePower}</Typography>
        <Typography>{student.homeworkStatus}</Typography>
        <Typography>{student.classNo}</Typography>
        <Typography>{student.studentNo}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <StudentDetails student={student} />
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentItem;
