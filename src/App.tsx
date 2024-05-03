import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';
import Layout from 'components/Layout/Layout';
import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';

// Lessons
// import Lesson06 from 'lessons/Lesson06/Lesson06';
// import Lesson07 from 'lessons/Lesson07/Lesson07';
// import Lesson08 from 'lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
// import Lesson12 from 'lessons/Lesson12/Lesson12';


// Homeworks
// import Homework07 from 'homeworks/Homework07/Homework07'
// import Homework08 from 'homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';

// Consultations
// import Consultation04 from 'consultations/Consultation04/Consultation04';
// import Consultation05 from 'consultations/Consultation05/Consultation05';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element='Page Not Found'/>
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}
      {/* <Consultation04/> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework11 /> */}
      {/* <Lesson12 /> */}
      {/* <Consultation05 /> */}
    </BrowserRouter>
  );
}

export default App;
