import React from "react";

function Kontakt () {
    return (
        <div>
            <h1>Kontakt</h1>
            <div className="kontakt-container">
                <img src="/images/user.png" className="kontakt-img" href="user" alt="user"></img>
                <h2 className="kontakt-text">Luisa Egoavil</h2><br />
                <img src="/images/phone.png" className="kontakt-img" href="phone" alt="phone"></img>
                <h2 className="kontakt-text">017653832422</h2><br />
                <img src="/images/mail.png" className="kontakt-img" href="mail" alt="mail"></img>
                <h2 className="kontakt-text">lupe.egoavil@gmail.com</h2>
            </div>
        </div>
    )
}

export default Kontakt