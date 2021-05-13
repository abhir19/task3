import React from 'react';
import {useHistory} from 'react-router-dom';

 const Clear = () => {
     let history=useHistory();
    return (
        <>
            <button className="btn btn-light" onClick={()=>{history.push('/')}}>Clear</button>
        </>
    )
}
export default Clear;
