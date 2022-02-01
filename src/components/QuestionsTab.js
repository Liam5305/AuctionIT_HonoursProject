import react, { useState } from "react";
import { FrequentQuestions } from "./AuctionArray/FreqQuestions";
import Data from "../components/AuctionArray/FreqQuestions";


function FreqQuestions() {
    const [query, setQuery] = useState([]);

    return (
        <div className="questions-header">
            <h3>Frequently Asked Questions</h3>

            <div className="freq-questions-box">
                
            </div>
        </div>
    )
}

export default FreqQuestions;