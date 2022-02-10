import React from "react";
import SearchBar from "../SearchBar";
import FreqQuestions from "../FrequentQuestions";
import EmailQuery from "../EmailQuery";

function ContactPage() {

    return (
        <div>
            <div className="search">
                <SearchBar />
            </div>
            <div className="freq_questions">
                <FreqQuestions />
            </div>
            <div className="query_us">
                <EmailQuery />
            </div>
        </div>

    )
}

export default ContactPage;