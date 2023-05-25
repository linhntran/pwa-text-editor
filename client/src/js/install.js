const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (e) => {
    window.eventForLater = e;
    installButton.classList.remove("hidden");
});

installButton.addEventListener('click', async () => {
    const storedEvent = window.eventForLater;
    if (!storedEvent) {
        return;
    }
    storedEvent.prompt();
    window.eventForLater = null;
    installButton.classList.add("hidden");
});

window.addEventListener('appinstalled', (evt) => {
    window.eventForLater = null;
});
