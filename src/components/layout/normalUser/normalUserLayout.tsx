import { Outlet } from "react-router-dom"
import Header from "./header/header"
import Footer from "./footer/footer"

const NormalUserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default NormalUserLayout