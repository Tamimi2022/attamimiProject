import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <section className='error-page section'>
            <div className="error-container">
                <h1>Not Found</h1>
                <Link to='/' className='btn btn-primary'>
                    Menu page
                </Link>
            </div>
        </section>
    )
}

export default Error