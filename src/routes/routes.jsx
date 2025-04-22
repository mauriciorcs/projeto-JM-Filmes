// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Cadastro from "../pages/Cadastro";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route  path="/cadastro" element={<Cadastro />} />
//       <Route  path="/" element={<Login />} />
//       {/* <Route  path="/home" element={<Home />} /> */}
//    </Routes>
//   );
// }


import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
