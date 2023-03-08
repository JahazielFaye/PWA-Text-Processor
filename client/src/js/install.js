const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; //stores the trigger event

    butInstall.classList.toggle("hidden", false); //shows the button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // when button is clicked, access the stored event.
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }
    //shows prompt
    promptEvent.prompt();
//resets the defered prompt variable (can only be used once)
    window.deferredPrompt = null;
//hides the button
    butInstall.classList.togglee("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clears prompt
    window.deferredPrompt = null;
});
