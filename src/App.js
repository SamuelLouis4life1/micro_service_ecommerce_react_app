import EcommerceRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <EcommerceRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;