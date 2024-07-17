import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Componentes/Sidebar/Sidebar';
import CompanyDashboard from '../../Componentes/CompanyDashboard/CompanyDashboard';
import Tile from '../../Componentes/Tile/Tile';

interface Props {

}

const CompanyPage = (props: Props) => {

  //https:localhost:3000/
  let { ticker } = useParams();
  const [company, setcompany] = useState<CompanyProfile>();


  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setcompany(result?.data[0]);
    }
    getProfileInit();
  }, [])

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName}></Tile>
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage;
