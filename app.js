var quotes = [
    "i love beautiful women....",
    "i love beautiful simbie....",
    "i love beautiful tatenda....",
    "i love beautiful Lisah....",
    "i love beautiful rihamna....",
    "i love beautiful wom....",
    "i love beautiful wombbb....",
    "i love beautiful Rutendo...."
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}