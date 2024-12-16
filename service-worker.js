self.addEventListener('notificationclick', function(event) {
    console.log('Powiadomienie kliknięte:', event.notification.tag);
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://djp1005.github.io/esp32-web_app/') // Link do otwarcia po kliknięciu
    );
});
