import React from "react";
import Data from "./contactinfo.json";
import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("")

    return (
        <div className="search-bar">
            <div className="title-search">
                <h2>How can the team help you today?</h2>
            </div>

            <input placeholder="Search AuctionIt Admins" onChange={event => setQuery(event.target.value)} />

            {
                Data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className="box" key={index}>
                        <p>{post.first_name}</p>
                        <p>{post.Country}</p>
                        <p>{post.email}</p>
                        <p>{post.username}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchBar;