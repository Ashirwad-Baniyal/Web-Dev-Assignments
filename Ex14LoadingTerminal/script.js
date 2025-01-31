
function randomDelay(min, max) {
    return new Promise(resolve => setTimeout(resolve, Math.random() * (max - min) + min));
}
async function hackingSimulator() {
    const terminal = document.getElementById('terminal');
    const messages = [
        'Initializing Hacking',
        'Reading your Files',
        'Password files Detected',
        'Sending all passwords and personal files to server',
        'Cleaning up'
    ];
    for (const message of messages) {       
        const messageElement = document.createElement('p');
        messageElement.innerHTML = `${message}<span class="blinking-dots"><span>.</span><span>.</span><span>.</span></span>`;
        terminal.appendChild(messageElement);

        await randomDelay(1000, 7000);

        const dots = messageElement.querySelector('.blinking-dots');
        if (dots) dots.remove();
    }

    const finalMessage = document.createElement('p');
    finalMessage.textContent = 'Hacking Completed!';
    terminal.appendChild(finalMessage);
}

hackingSimulator();
