import React, { SyntheticEvent } from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortolio from '../Portfolio/AddPortfolio/AddPortolio';

interface Props {
    id: string,
    searchResult: CompanySearch,
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) : JSX.Element => {
    return <div className='card'>
        <img alt="company logo" />
        <div className="details">
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className="info">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPortolio 
        onPortfolioCreate={onPortfolioCreate} 
        symbol={searchResult.symbol}/>
    </div>
};

export default Card;
