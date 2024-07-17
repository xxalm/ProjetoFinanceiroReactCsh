import React, { useEffect, useState } from 'react';
import { CompanyBalanceSheet, CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';


type Props = {};

const config = [
    {
        label: "Date",
        render: (company: CompanyBalanceSheet) => company.date,
    },
    {
        label: "Total Assets",
        render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
        label: "Total Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
        label: "Stockholders Equity",
        render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
        label: "Net Receivables",
        render: (company: CompanyBalanceSheet) => company.netReceivables,
    },
    {
        label: "Short Term Debt",
        render: (company: CompanyBalanceSheet) => company.shortTermDebt,
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Cash Equivalents",
        render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
        label: "Long Term Investments",
        render: (company: CompanyBalanceSheet) => company.longTermInvestments,
    },
];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyBalanceSheet>();
    useEffect(() => {
        const getCompanyData = async () => {
            const value = await getBalanceSheet(ticker!);
            setCompanyData(value?.data[0]);
        };
        getCompanyData();
    }, []);
    return (
        <>
            {companyData ? (
                <RatioList config={config} data={companyData} />
            ) : (
                <Spinner/>
            )}
        </>
    );
};

export default BalanceSheet;
