import React from 'react'
import "./Indicator.css";
import { TailSpin } from 'react-loader-spinner';

function Indicator() {
    return (
        <div id='tail-spin'>
            <TailSpin height="80"
                width="80"
                color="#DC8C37"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <div className='message'>Fetching Data...</div>
        </div>
    )
}

export default Indicator