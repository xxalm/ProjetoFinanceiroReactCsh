import React, { ChangeEvent, useState, SyntheticEvent, HtmlHTMLAttributes } from 'react';

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
    onSearchSubmit, 
    search, 
    handleSearchChange,
}: Props): JSX.Element => {
    
    return (
        <>
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange} />
        </form>
        </>
    );
};

export default Search;
