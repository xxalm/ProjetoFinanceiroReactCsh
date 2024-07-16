import React, { SyntheticEvent } from 'react';
import Card from '../../Card/Card';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
    return (
    <>
        <h4>{portfolioValue}</h4>
        <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue}/>
    </>
    );
};

export default CardPortfolio;
