import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './comp/layout/Header';
import Footer from './comp/layout/Footer';
import Home from './comp/pages/Home';
import Contact from './comp/pages/Contact';
import About from './comp/pages/About';
import All from './comp/pages/All';
import Blog from './comp/pages/Blog';
import Table from './comp/pages/Table';
import Create from './comp/pages/Create';
import Update from './comp/pages/Update';
import Read from './comp/pages/Read';
import Signin from './comp/pages/auth/Signin';
import PrivateRoute from './comp/pages/auth/PrivateRoute';
import Error from './comp/pages/Error';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={import.meta.env.VITE_APP_BASE_Home} element={<Home />} />
        <Route path={import.meta.env.VITE_APP_BASE_Contact} element={<Contact />} />
        <Route path={import.meta.env.VITE_APP_BASE_About} element={<About />} />
        <Route path={import.meta.env.VITE_APP_BASE_ALLId} element={<All />} />
        <Route path={import.meta.env.VITE_APP_BASE_Blogs} element={<Blog />} />
        <Route path="*" element={<Error />} />
        <Route
          path={import.meta.env.VITE_APP_BASE_Table}
          element={
            <PrivateRoute>
              <Table />
            </PrivateRoute>
          }
        />
        <Route path={import.meta.env.VITE_APP_BASE_Update} element={<Update />} />
        <Route path={import.meta.env.VITE_APP_BASE_Read} element={<Read />} />
        <Route path={import.meta.env.VITE_APP_BASE_Sign} element={<Signin />} />
        <Route
          path={import.meta.env.VITE_APP_BASE_Create}
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
