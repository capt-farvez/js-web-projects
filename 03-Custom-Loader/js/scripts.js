function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let cancelTask = false;

async function startLoading() {
    cancelTask = false;

    const loader = document.getElementById("loader");
    const delayInput = document.getElementById("delayInput");

    let delay = parseInt(delayInput.value);
    // console.log(delay);

    if (isNaN(delay) || delay < 10) {
        alert("Please enter a valid sleep time (at least 10 ms)");
        return;
    }

    // Counting 10 to visualize the waiting time
    for (let i = 1; i <= 10; i++) {
        if (cancelTask){
            break;
        } 
        loader.textContent = i + `\n ⏱ Waiting ${delayInput.value}ms for each Number.`;
        await sleep(delay);
    }

    if (!cancelTask) {
        loader.textContent = "✔ Done!";
    }
}

function cancelLoading() {
    cancelTask = true;
    const loader = document.getElementById("loader");
    loader.textContent = "⛔ Cancelled.";
}