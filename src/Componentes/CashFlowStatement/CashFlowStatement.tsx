import React, { useEffect, useState } from 'react';
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';

type Props = {};

const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
    useEffect(() => {
        const fetchCashflow = async () => {
            const result = await getCashflowStatement(ticker!);
            setCashflow(result!.data);
        };
        fetchCashflow();
    }, []);
  return (
    <>
        {cashflowData ? (
            <Table config={config} data={cashflowData} />
        ) : (
            <h1>No results!</h1>
        )}
    </>
  );
}

export default CashFlowStatement;
