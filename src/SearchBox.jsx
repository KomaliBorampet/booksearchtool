import React, { useState } from 'react';

export function SearchBox(props) {
    const [searchKey, setSearchKey] = useState("");

    function onSearch() {
        props.onSearch(searchKey);
    }

    return (
        <>
            <div>
                Search for Books <input onChange={e => setSearchKey(e.target.value)} /> <button onClick={onSearch} > Search </button>
            </div>
        </>
    )
}