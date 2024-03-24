// exercice 1
import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ErrorBoundary from "./ErrorBoundary";
// import { HomeScreen, ProfileScreen, ShopScreen } from "./Screens";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             Home
//           </NavLink>
//           <NavLink className="navbar-brand" to="/profile">
//             Profile
//           </NavLink>
//           <NavLink className="navbar-brand" to="/shop">
//             Shop
//           </NavLink>
//         </div>
//       </nav>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ErrorBoundary>
//               <HomeScreen />
//             </ErrorBoundary>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <ErrorBoundary>
//               <ProfileScreen />
//             </ErrorBoundary>
//           }
//         />
//         <Route
//           path="/shop"
//           element={
//             <ErrorBoundary>
//               <ShopScreen />
//             </ErrorBoundary>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// exercice 2

import PostList from "./Component/PostList";

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
