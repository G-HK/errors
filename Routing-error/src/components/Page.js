import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pages from './Pages';

import { Outlet } from 'react-router-dom';

function Page() {

    let { id } = useParams();

    useEffect(() => {
        console.log(id);
    });


    return (
        <div>
            <h1>Page Nav</h1>
            <Outlet />
        </div>
    )

}

export default Page
