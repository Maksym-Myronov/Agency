import { Layout } from "components/Layout";
import { AboutUs } from "pages/AboutUs";
import { ContactUs } from "pages/ContactUs";
import { Gallery } from "pages/Gallery";
import { Home } from "pages/Home";
import { Interior } from "pages/Interior";
import { Styles } from "pages/Styles";
import { Route, Routes } from "react-router-dom";
import { Route as RouteEnum } from "routes/route.enum.ts";

export const App = () => {
    return (
        <Routes>
            <Route path={RouteEnum.General} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={RouteEnum.AboutUs} element={<AboutUs />} />
                <Route path={RouteEnum.Gallery} element={<Gallery />} />
                <Route path={RouteEnum.Styles} element={<Styles />} />
                <Route path={RouteEnum.Interior} element={<Interior />} />
                <Route path={RouteEnum.ContactUs} element={<ContactUs />} />
            </Route>
        </Routes>
    );
};
