const container = document.getElementById('notifications-container');

// Icons (Simple SVGs)
const icons = {
    success: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
    error: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
    warning: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
};

window.addEventListener('message', function (event) {
    const data = event.data;

    if (data.action === 'notify') {
        createNotification(data);
    }
});

function createNotification(data) {
    const { message, type = 'info', length = 5000, title } = data;

    const notif = document.createElement('div');
    notif.classList.add('notification', `type-${type}`);

    // Default title based on type if not provided
    const displayTitle = title || (type.charAt(0).toUpperCase() + type.slice(1));

    notif.innerHTML = `
        <div class="notification-icon">
            ${icons[type] || icons.info}
        </div>
        <div class="notification-content">
            <div class="notification-title">${displayTitle}</div>
            <div class="notification-message">${message}</div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="color: inherit"></div>
        </div>
    `;

    // Set progress bar color for better visibility or just use opacity
    const progressFill = notif.querySelector('.progress-fill');
    // Using inline style for animation to match arbitrary duration
    progressFill.style.transition = `width ${length}ms linear`;

    // Determine color for progress bar based on type (matching CSS)
    let color = '#60a5fa';
    if (type === 'success') color = '#4ade80';
    if (type === 'error') color = '#f87171';
    if (type === 'warning') color = '#fbbf24';

    progressFill.style.backgroundColor = color;

    container.appendChild(notif);

    // Trigger reflow
    requestAnimationFrame(() => {
        progressFill.style.width = '0%';
    });

    setTimeout(() => {
        notif.classList.add('slide-out');
        notif.addEventListener('animationend', () => {
            notif.remove();
        });
    }, length);
}
