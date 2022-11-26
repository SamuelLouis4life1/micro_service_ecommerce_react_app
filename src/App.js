import EcommerceRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <EcommerceRoutes />
    </BrowserRouter>
  );
}

export default App;