import React, { useEffect, useState } from 'react';
import { Card, CardContent, TablePagination } from '@mui/material';
import { getStudents, Student } from '../../utils/api';
import StudentItem from './StudentItem';
import '../../assets/styles/components/Students.module.css';

interface Props {
  identifier: string;
}

const StudentList: React.FC<Props> = ({ identifier }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    getStudents(identifier).then(setStudents);
  }, [identifier]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardContent>
        {students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

export default StudentList;
