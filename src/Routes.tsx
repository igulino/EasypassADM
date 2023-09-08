import { BrowserRouter as Brouter, Routes as RouteContainer, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Adm } from "./Pages/AdmLogin";
import { AdmHome } from "./Pages/AdmHome";

export function Routes() {
    return(<>
        <Brouter>
        {/*login*/}
            <RouteContainer>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/adm" element={<Adm/>}></Route>
            </RouteContainer>
        {/*home*/}
            <RouteContainer>
                <Route path="/admhome" element={<AdmHome/>}></Route>
            </RouteContainer>
        </Brouter>
    </>)
}