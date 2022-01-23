import React from "react";

function RegisterPage() {
    return (
        <form action="action_page.php">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <br />
                <div className="register-form">
                    <input type="text" placeholder="Enter Your First Name" name="fname" id="fname" required></input>
                    <br />
                    <input type="text" placeholder="Enter Your Last Name" name="lname" id="lname" required></input>
                    <br />
                    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
                    <br />
                    <input type="text" placeholder="Enter Password" name="psw" id="psw" required></input>
                    <br />
                    <input type="text" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>

                    <p>By creating an account you agree to our <a href="#"> Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>

                    <div class="container-signin">
                        <p>Already have an account? <a href="#/join">Sign in</a>.</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegisterPage;