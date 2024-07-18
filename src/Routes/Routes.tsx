import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import App from "../App";
import CompanyProfile from "../Componentes/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Componentes/IncomeStatement/IncomeStatement";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import BalanceSheet from "../Componentes/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Componentes/CashFlowStatement/CashFlowStatement";
import HistoricalDividend from "../Componentes/HistoricalDividend/HIstoricalDividend";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { path: "design-guide", element: <DesignGuide /> },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                    { path: "cashflow-statement", element: <CashFlowStatement /> },
                    { path: "historical-dividend", element: <HistoricalDividend /> },
                ],
            },


        ],
    },
]);