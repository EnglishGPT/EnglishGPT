import React from 'react';
import { Button, Typography } from '@mui/material';
import { Student } from '../../utils/api';
import '../../assets/styles/components/Students.module.css';

interface Props {
  student: Student;
}

const StudentDetails: React.FC<Props> = ({ student }) => {
  return (
    <>
      <Typography variant="h5">{student.name}</Typography>
      <Button variant="outlined">Student statistics</Button>
      <Button variant="outlined">Message</Button>
    </>
  );
};

export default StudentDetails;
