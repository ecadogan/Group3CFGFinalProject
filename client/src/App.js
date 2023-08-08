// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap import
// import { Route, Routes } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import Error from './components/Error';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';

// function App() {
//   return (
//     <main>
//       <HeaderComponent />
      
//       <Routes>
//         {/* <Route path="/" element={<Homepage />} /> */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         {/* Routes to other pages will go here */}
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <FooterComponent />
//     </main>
//   );
// };

// export default App;

import React from 'react';

const TeamMember = ({ name, hobby, reason }) => (
  <div>
    <h1>{name}</h1>
    <h2>Favourite Hobby</h2>
    <p>{hobby}</p>
    <h2>Why I Enjoy It</h2>
    <p>{reason}</p>
  </div>
);

const App = () => (
  <div>
    <TeamMember 
      name="Eleri" 
      hobby="Baking" 
      reason="It allows me to express my creativity and relax. I also get something tasty to eat at the end!"
    />
    <TeamMember 
      name="Maddy" 
      hobby="Singing" 
      reason="I sing with a choir and it is incredibly uplifting and rewarding to make music with other people."
    />
     <TeamMember 
      name="Megan" 
      hobby="House Renovations" 
      reason="I like to take on the challenge of turning an old house into a wonderful living space."
    />
      <TeamMember 
      name="Kudzai" 
      hobby="Filming" 
      reason="I enjoy creating. I enjoy expressing. And in the process of acting, I somehow discover more about myself. And it's beautiful."
     />       
    {/* Add more your details here as I have done above from the TeamMember part */}
  </div>
);

export default App;

