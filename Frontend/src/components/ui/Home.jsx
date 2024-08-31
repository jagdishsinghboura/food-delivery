import Main from "./Main"
import NavBar from "./NavBar"
import {useSelector} from "react-redux"
function Home() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className="bg-slate-800 relative z-50">
      {/* <div className="bg-[url('https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-screen bg-scroll bg-center bg-cover"> */}
      <NavBar />
      <Main />

    </div>

      
  )
}

export default Home
