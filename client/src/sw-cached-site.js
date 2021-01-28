const cacheName = 'v1';
window.addEventListener('activate', (e) =>{
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) { 
            return caches.delete(cache);
          }
        })
      )
    })
  )
});
window.addEventListener('fetch', e => { 
  e.respondWith(
      fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(cacheName)
                .then(cache => {
                    cache.put(e.request, resClone);
                }); 
                return res;
        }).catch(err => caches.match(e.request).then(res => res))
  );
});