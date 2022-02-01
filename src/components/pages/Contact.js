import React from "react";

function ContactPage() {

    return (
        <>
            <div className="email-query">
                <form action="/action_page.php">
                    <input type="text" id="fname" name="First Name"></input>
                    <br />
                    <input type="text" id="email" name="Email Address"></input>
                    <br />
                    <input type="text" id="query-box" name="What is your Query?" ></input>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactPage;