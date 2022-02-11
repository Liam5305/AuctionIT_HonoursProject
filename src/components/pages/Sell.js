import React from "react";
import SellItems from "../SellItems";
import PastAuctions from "../PastAuctions";

function SellPage() {
    return (
        <div>
            <div className="sellitemsPage">
                <SellItems />
            </div>
            <div className="pastauctionspage">
                <PastAuctions />
            </div>
        </div>
    )
}

export default SellPage;