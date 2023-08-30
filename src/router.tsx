import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Menu from './pages/Menu';
import NotFoundPage from './pages/NotFoundPage';


const queryClient = new QueryClient()
function router() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/meus-registros' element={<Register />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default router;
