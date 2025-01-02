import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Header from './comp/layout/Header'
import Home from './comp/pages/Home';
import Contact from './comp/pages/Contact';
import About from './comp/pages/About';
import All from './comp/pages/All';
import Create from './comp/pages/Create';
import Footer from './comp/layout/Footer';
import Blog from './comp/pages/Blog';
import Error from './comp/pages/Error';
import Table from './comp/pages/Table';
import Update from './comp/pages/Update';
import Read from './comp/pages/Read';
import Signin from './comp/pages/auth/Signin';
import PrivateRoute from './comp/pages/auth/PrivateRoute';

function App() {

 

  return (
<>
       <Router>
         <Header />
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Contact" element={<Contact/>} />
           <Route path="/About" element={<About />} />
           <Route path="/All/:id" element={<All/>} />
           <Route path="/Blogs" element={<Blog/>} />
           {/* <Route path="/Create" element={<Create/>} /> */}
           <Route path="*" element={<Error/>} />
           <Route path="/Table" element={<PrivateRoute>
              <Table />
            </PrivateRoute>} />
           <Route path="/Update/:BlogId" element={<Update/>} />
           <Route path="/Read/:BlogId" element={<Read/>} />
           <Route path="/Sign" element={<Signin/>} />
           <Route
          path="/Create"
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        />


           


         </Routes>
         <Footer/>
       </Router >
    
    </>
  )
}

export default App
