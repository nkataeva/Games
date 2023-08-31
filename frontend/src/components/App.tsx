import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APPRoute } from "../paths";

const Layout = lazy(() => import("./Layout/Layout"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const GamePage = lazy(() => import("../pages/GamePage/GamePage"));
const NotFound = lazy(() => import("./notFound/notFound"));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path={APPRoute.MAIN} element={<MainPage />} />
                        <Route path={APPRoute.GAME + APPRoute.ID } element={<GamePage />} />
                    </Route>
                    <Route path={APPRoute.NOTFOUND} element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;