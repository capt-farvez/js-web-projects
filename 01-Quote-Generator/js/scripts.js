const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

async function getQuote(){
    loading();
    try {
        const response = await fetch (
            'https://api.api-ninjas.com/v1/quotes', {
                method: 'GET',
                headers: {
                    'X-Api-Key': '/3tDvk9KZdX2GK6UYwEilw==qHnkjiPTQPxuMgPC',
                    'Content-Type': 'application/json'
                }
            }
        )
        //  console.log('response: ' , response);
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // while response is ok
        const data = await response.json();
        // console.log('Data: ' , data);
        // console.log(data[0].quote);

        if(data[0].quote){
            quoteText.innerText = data[0].quote;
        }
        else{
            quoteText.innerText = 'Missing Quote';
        }

        if(data[0].author){
            authorText.innerText = data[0].author;
        }
        else {
            authorText.innerText = 'Unknown';
        }

        if(data[0].quote.length >50){
            quoteText.classList.add('long-quote');
        }
        else{
            quoteText.classList.remove('long-quote');
        }

        complete();
    }
    
    catch (error) {
        // console.log(error);
        getQuote();
    }
}


// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();