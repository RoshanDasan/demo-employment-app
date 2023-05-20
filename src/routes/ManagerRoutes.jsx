import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/AdminHome';
  import Department from '../pages/Department';
import AddDepartment from '../pages/AddDepartment';
import AdminHeader from '../components/AdminHome/Navbar';
import { Box } from '@mui/material';

function ManagerRoutes() {
  return (
    <Box
      sx={{
        display: 'flex',
       
      }}
    >
      {/* <DrawerComponent /> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <AdminHeader />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<AdminHome />} />
          </Routes>
          <Routes>
            <Route path="/department" element={<Department />} />
          </Routes>
          <Routes>
            <Route path="/add_department" element={<AddDepartment />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default ManagerRoutes;
