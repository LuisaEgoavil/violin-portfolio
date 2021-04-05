import React from "react";

function Kontakt () {
    return (
        <div>
            <h1>Kontakt</h1>
            <div className="kontakt-container">
                <img src="/images/user.png" className="kontakt-img" href="user" alt="user"></img>
                <p className="kontakt-text">Luisa Egoavil</p><br />
                <img src="/images/phone.png" className="kontakt-img" href="phone" alt="phone"></img>
                <p className="kontakt-text">017653832422</p><br />
                <img src="/images/mail.png" className="kontakt-img" href="mail" alt="mail"></img>
                <p className="kontakt-text">lupe.egoavil@gmail.com</p>
            </div>
        </div>
    )
}

export default Kontakt