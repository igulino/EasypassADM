import { BrowserRouter as Brouter, Routes as RouteContainer, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export function Routes() {
    return(<>
        <Brouter>
            <RouteContainer>
                <Route path="/" element={<Home/>}></Route>
            </RouteContainer>
        </Brouter>
    </>)
}