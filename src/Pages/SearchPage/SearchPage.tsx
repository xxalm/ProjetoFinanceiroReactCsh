import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Componentes/Navbar/Navbar';
import Search from '../../Componentes/Search/Search';
import ListPortfolio from '../../Componentes/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Componentes/CardList/CardList';

interface Props {

}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
        console.log(searchResult);
    };
    return (
        <div className="App">
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
            <CardList
                searchResults={searchResult}
                onPortfolioCreate={onPortfolioCreate}
            />
            {serverError && <h1>{serverError}</h1>}
        </div>
    );
}

export default SearchPage;
