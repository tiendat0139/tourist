import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import routes from "~/routes/FrontendRouters.js";
const FrontendLayout = function () {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    {
                        routes.map((route, id) => {
                            return route.component &&
                                <Route
                                    key={id}
                                    path={route.path}
                                    element={<route.component />}
                                />
                        })
                    }
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default FrontendLayout