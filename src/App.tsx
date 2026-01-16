import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { LoginPage } from './features/auth/LoginPage';
import { HomePage } from './features/dashboard/HomePage';
import ProtectedRoute from './layouts/ProtectedRoute';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;