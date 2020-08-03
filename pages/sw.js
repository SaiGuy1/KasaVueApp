// THIS FILE SHOULD NOT BE VERSION CONTROLLED

const cacheName = 'v1';

const cacheAssets = [
    
]

// Call Install Event
self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
});


// Call Activate Event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
})