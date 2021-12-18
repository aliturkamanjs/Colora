import NavBar from "../components/navbar/navBar";
import Footer from "../components/footer/footer";

const Layout = ({children}) => {
  return <>
    <NavBar />
    {children}
    <Footer />
  </>;
};

export default Layout;
