import './App.css';
import Layout  from './pages';
import { ToastProvider } from 'react-toast-notifications';


const App = () => {
  return (
      <ToastProvider>
        <Layout/>
      </ToastProvider>
  );
}

export default App;
