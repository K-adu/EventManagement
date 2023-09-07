import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
