import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

// Dummy Components for Demo
const FakeLogin = ({ onLogin }) => (
  <div>
    <h2>Login</h2>
    <button onClick={() => onLogin({ displayName: 'Jane', email: 'jane@example.com' })}>
      Log in
    </button>
  </div>
);
const TemplateSelector = () => <div>Template Selector</div>;
const DragDropUpload = ({ onFileUpload }) => (
  <input type="file" onChange={(e) => onFileUpload(e.target.files[0])} />
);

// Home Component (uses `useNavigate`)
function Home({ user, setUser }) {
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  return user ? (
    <div>
      <h1>Welcome {user.displayName}</h1>
      <DragDropUpload onFileUpload={setProductImage} />
      {productImage && <p>Selected: {productImage.name}</p>}
      <button onClick={() => navigate('/templates')}>Go to Templates</button>
    </div>
  ) : (
    <FakeLogin onLogin={setUser} />
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/templates" element={<TemplateSelector />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;