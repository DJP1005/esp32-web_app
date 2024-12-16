self.addEventListener('notificationclick', function(event) {
    console.log('Powiadomienie kliknięte:', event.notification.tag);
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://twoja-strona.pl') // Link do otwarcia po kliknięciu
    );
});
