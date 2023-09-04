import { BrowserRouter as Brouter, Routes as RouteContainer, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Adm } from "./Pages/AdmLogin";

export function Routes() {
    return(<>
        <Brouter>
            <RouteContainer>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/adm" element={<Adm/>}></Route>
                
            </RouteContainer>
        </Brouter>
    </>)
}