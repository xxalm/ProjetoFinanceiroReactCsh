import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import App from "../App";
import CompanyProfile from "../Componentes/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Componentes/IncomeStatement/IncomeStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { 
                path: "company/:ticker", 
                element: <CompanyPage />,
                children: [
                    {path: "company-profile", element: <CompanyProfile />},
                    {path: "income-statement", element: <IncomeStatement />}
                ],
            },


        ],
    },
]);