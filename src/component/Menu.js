import React from "react";
import DrinkList from "./DrinkList";
import SearchForm from "./SearchForm";

function Menu () {
    return(
        <main>
            <SearchForm />
            <DrinkList />
        </main>
    )
}
export default Menu