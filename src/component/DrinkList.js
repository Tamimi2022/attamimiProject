import React from 'react';
import { useGlobalContext } from './Overview';
import Loading from './Loading';
import Cocktail from './Cocktail';

function DrinkList() {
    const { cocktails, loading } = useGlobalContext();
    console.log(cocktails);
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return <h2 className="section-title">not Found</h2>
    }
    return (
        <section className="section">
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default DrinkList