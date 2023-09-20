import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

const MainLayout = () => {


// const isLoadingData = navigation.state==="loading"



  return (
    <div>
      <section className="flex shadow-md py-7 justify-between px-10 items-center">
        <div>
          <h1 className="text-xl font-bold">AmazoneBD</h1>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashbord</a>
            </li>
          </ul>
        </nav>
      </section>
  <div className="min-h-screen">
  <Outlet></Outlet>
  </div>
  <Footer></Footer>


      
    </div>
  );
};

export default MainLayout;
