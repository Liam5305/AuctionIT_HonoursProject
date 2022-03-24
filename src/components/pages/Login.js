import React from "react";

function JoinPage() {
    return (
        <form action="action_page.php">
            <div className="login-form-header">
                <label>AuctionIt Login Page</label>
                <hr />

                <br />

                <div className="login-form">
                    <h3>Sign in</h3>
                    <h5>Stay updated on Auctions!</h5>
                    <input type="email" placeholder="Email or Phone" name="email/phone" id="email/phone" required></input>
                    <br />
                    <input type="password" placeholder="Enter your Password" name="psw" id="psw" required></input>

                    <br />

                    <div className="forgot-password">
                        <p>Forgot Password?</p>
                    </div>

                    <div className="login-btns">
                        <button class="login-sign-in">Sign In</button>
                        <p>or</p>
                        <button class="sign-in-btn">Sign In with Google</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default JoinPage;