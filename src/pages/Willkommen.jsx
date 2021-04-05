import React from "react";
import Typist from 'react-typist';

function Willkommen () {
    return (
        <Typist cursor={{show: false}}>
            <div>
                <h2>Herzlich Willkommen zu meiner Seite</h2>
                <Typist.Delay ms={500} />
                <p>Nehmen Sie Kontakt mit mir hier!</p>
            </div>
        </Typist>
        
    )
}

export default Willkommen