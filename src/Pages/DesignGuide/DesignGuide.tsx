import React from "react";
import RatioList from "../../Componentes/RatioList/RatioList";
import Table from "../../Componentes/Table/Table";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Componentes/Table/testData";


type Props = {};
const tableConfig = [
    {
        label: "Market Cap",
        render: (company: any) => company.marketCapTTM,
        subTitle: "Total value of all a company's shares of stock",
    },
];

const DesignGuide = (props: Props) => {
    return (
        <>
            <h1>
                Design guide- This is the design guide for Fin Shark. These are reuable
                components of the app with brief instructions on how to use them.
            </h1>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table data={testIncomeStatementData} config={tableConfig}/>
            <h3>
                Table - Table takes in a configuration object and company data as
                params. Use the config to style your table.
            </h3>
        </>
    );
};
export default DesignGuide;