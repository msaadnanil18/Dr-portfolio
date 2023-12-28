// import React from 'react';
// import { Layout } from 'antd';

// import About from './components/About';
// import Services from './components/Services';
// import Experience from './components/Experience';
// import Contact from './components/Contect';
// import Footer from './components/Footer';
// import AppHeader from './components/AppHeader';
// // import AppHeader from './components/Header';
// // import Header from './components/Header';
// // import About from './components/About';
// // import Services from './components/Services';
// // import Experience from './components/Experience';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div>
//       <AppHeader />
//       <About />
//       <Services />
//       <Experience />
//       <Contact />
//       <Footer />
//       <Layout/>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contect';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <AppHeader />
        {/* <About />
        <Services />
        <Experience />
        <Contact />
        <Footer /> */}
      
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<h1>Welcome to Home!</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
