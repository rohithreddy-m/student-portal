import AdminDashboard from "./pages/adminDashboard"
import Loginpage from "./pages/loginPage"
import StudentDashboard from "./pages/studentDashboard"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Error from "./pages/erroepage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/student" element={<StudentDashboard/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
