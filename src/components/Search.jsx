"use client"

import Button from "./Button";

const Search = () => {
    const handleSumit = () => {
        
    }
    return (
        <form onSubmit={handleSumit}>
            <input type="text" />
            {/* <button type="submit">Search</button> */}
            <Button action={handleSumit} text="submit" type="submit"/>
        </form>
    );
};

export default Search;