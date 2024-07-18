import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Componentes/Sidebar/Sidebar';
import CompanyDashboard from '../../Componentes/CompanyDashboard/CompanyDashboard';
import Tile from '../../Componentes/Tile/Tile';
import Spinner from '../../Componentes/Spinner/Spinner';
import CompFinder from '../../Componentes/CompFinder/CompFinder';

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
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
            <CompFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default CompanyPage;
