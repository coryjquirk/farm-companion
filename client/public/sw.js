self.addEventListener('message', async (event) => {
    console.log('Got message in the service worker', event);
});