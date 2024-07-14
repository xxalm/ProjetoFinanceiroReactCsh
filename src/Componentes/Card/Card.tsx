import React from 'react';
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card : React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
    return <div className='card'>
        <img
            src="https://s3-symbol-logo.tradingview.com/apple--big.svg"
            alt="Image"
        />
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae voluptatibus impedit inventore iusto accusantium ratione reiciendis ab, deleniti delectus saepe nobis omnis? Quo obcaecati praesentium alias assumenda quia saepe.</p>
    </div>
};

export default Card;
