import { Header } from "./components";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import { Routes, Route } from "react-router-dom";

import './scss/app.scss';



const App = () => {

        return (
            <div className="wrapper">

                <Header />

                <div className="content">
                    <Routes>
                        <Route path='/' element={<Main />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='*' element={<Error404 />}/>
                    </Routes>

                </div>
            </div>
        );
}

export default App;
