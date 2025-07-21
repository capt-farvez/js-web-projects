const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Detect if browser is Firefox
const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

if (isFirefox) {
    alert("Picture-in-Picture is not supported in Firefox. Try using Chrome.");
}

// Prompt user to share screen
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            videoElement.hidden = false; // Show the video
        };
    } catch (error) {
        console.error('Error accessing display media:', error);
    }
}

// Handle Picture-in-Picture button click
button.addEventListener('click', async () => {
    // If Firefox, show a message and exit
    if (isFirefox) {
        alert('Picture-in-Picture is not supported in Firefox with screen sharing.\nPlease use Chrome or Edge for PiP.');
        return;
    }

    try {
        button.disabled = true;
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.error('Error starting Picture-in-Picture:', error);
    } finally {
        button.disabled = false;
    }
});

// Initialize on page load
selectMediaStream();