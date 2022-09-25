import Router from 'pages/router';
import { AuthProvider } from 'contexts/AuthContext';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
