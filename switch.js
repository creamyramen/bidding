let bid1 = document.querySelector(".bid1"),
    bid2 = document.querySelector(".bid2"),
    maxBid,
    fInput = bid1.querySelector("input"),
    fH1 = bid1.querySelector("h1"),
    fPar = bid1.querySelector("p"),
    sInput = bid2.querySelector("input"),
    sH1 = bid2.querySelector("h1"),
    sPar = bid2.querySelector("p"),
    fBid,
    sBid;
if (localStorage.getItem("currentBid") === null) {
    maxBid = 0;
} else {
    maxBid = localStorage.getItem("currentBid");
}
if (localStorage.getItem("fBid") === null) {
    fBid = 0;
} else {
    fBid = localStorage.getItem("fBid");
}
if (localStorage.getItem("sBid") === null) {
    sBid = 0;
} else {
    sBid = localStorage.getItem("sBid");
}
fH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${fBid}`;
sH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${sBid}`;
bid1.querySelector("button").addEventListener("click", function() {
    if (fInput.value > parseInt(maxBid)) {
        localStorage.setItem("currentBid", `${fInput.value}`);
        localStorage.setItem("fBid", `${fInput.value}`);
        maxBid = localStorage.getItem("currentBid");
        fBid = localStorage.getItem("yourBid");
        fH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${fBid}`;
        sH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${sBid}`;
        fInput.value = '';
        if (fBid == maxBid) {
            fPar.innerHTML = "You're in the lead!";
            sPar.innerHTML = "You've lost the lead!";
        }
    }
});

bid2.querySelector("button").addEventListener("click", function() {
    if (sInput.value > parseInt(maxBid)) {
        localStorage.setItem("currentBid", `${sInput.value}`);
        localStorage.setItem("yourBid", `${sInput.value}`);
        maxBid = localStorage.getItem("currentBid");
        sBid = localStorage.getItem("yourBid");
        fH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${fBid}`;
        sH1.innerHTML = `Current Bid: ${maxBid}<br>Your Bid: ${sBid}`;
        sInput.value = '';
        console.log(localStorage.getItem("currentBid"));
        if (sBid == maxBid) {
            sPar.innerHTML = "You're in the lead!";
            fPar.innerHTML = "You've lost the lead!";
        }
    }
});

document.querySelector(".clear").addEventListener("click", function() {
    localStorage.clear();
    fH1.innerHTML = `Current Bid: 0<br>Your Bid: 0`;
    sH1.innerHTML = `Current Bid: 0<br>Your Bid: 0`;
})