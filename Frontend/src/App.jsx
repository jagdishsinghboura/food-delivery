import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./components/ui/Home"
import Cart from "./components/ui/Cart"
import Signup from "./components/ui/Signup"
import SignIn from "./components/ui/SignIn"
import Order from "./components/ui/Order"

function App() {

  return (
    <div className="bg-slate-800">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
