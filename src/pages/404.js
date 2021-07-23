import React from 'react';


export const E404 = () => {
    return(
        <div className="e404">
            <div>
                <h1>Error 404!</h1>
                <h2>Either your lost or we are lmao</h2>
            </div>
            <div id="404Div">
                <img src={window.location.origin + '/images/404.gif'} alt="Image not found lol"></img>
            </div>
        </div>
    );
}