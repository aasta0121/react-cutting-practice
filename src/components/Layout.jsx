import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;