import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, TextField } from '@mui/material';

const Department = () => {
  const rows = [
    { id: 1, name: 'John Doe', department: 'IT', category: 'Manager', location: 'New York', salary: 5000 },
    { id: 2, name: 'Jane Smith', department: 'HR', category: 'Executive', location: 'London', salary: 4000 },
    { id: 3, name: 'Mike Johnson', department: 'Sales', category: 'Associate', location: 'San Francisco', salary: 3000 },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [editDepartment, setEditDepartment] = useState(null);

  const handleEdit = (department) => {
    setEditDepartment(department);
    setOpenModal(true);
  };

  const handleShowUsers = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setEditDepartment(null);
    setOpenModal(false);
  };

  const handleSave = () => {
    // Add the logic to save the edited department
    // You can access the edited values from the editDepartment state
    handleCloseModal();
  };

  return (
    <div style={{ width: '1000px', margin: '20px auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" size="small" onClick={() => handleEdit(row)}>Edit</Button>
                  <Button variant="outlined" color="secondary" size="small">Delete</Button>
                  <Button variant="outlined" color="info" size="small" onClick={handleShowUsers}>Show Users</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
          {editDepartment ? (
            <>
              <h2>Edit Department</h2>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Salary</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{editDepartment?.id}</TableCell>
                      <TableCell>{editDepartment?.name}</TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          value={editDepartment?.department || ''}
                          onChange={(e) => setEditDepartment({ ...editDepartment, department: e.target.value })}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          value={editDepartment?.category || ''}
                          onChange={(e) => setEditDepartment({ ...editDepartment, category: e.target.value })}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          value={editDepartment?.location || ''}
                          onChange={(e) => setEditDepartment({ ...editDepartment, location: e.target.value })}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          value={editDepartment?.salary || ''}
                          onChange={(e) => setEditDepartment({ ...editDepartment, salary: e.target.value })}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                <Button variant="contained" color="secondary" onClick={handleCloseModal}>Cancel</Button>
              </div>
            </>
          ) : (
            <>
              <h2>Assign User</h2>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Render assigned users */}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Department;
