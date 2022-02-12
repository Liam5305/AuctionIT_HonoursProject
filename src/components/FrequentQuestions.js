import React, { useState } from "react";
import { FrequentQuestions } from "../components/AuctionArray/FreqQuestions";

function DisplayQuestions() {

    const [questions] = useState("")
    return (
        <>
            <div className="freq_questions">
                <h2>Frequently Asked Questions</h2>
                <div>
                    {
                        FrequentQuestions.filter(post => {
                            if (questions === '') {
                                return post;
                            } else if (post.questions.toLowerCase().includes(questions.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="f_questions" key={index}>
                                <h3>{post.ques}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default DisplayQuestions;