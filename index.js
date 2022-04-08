//sidebar
const menuItem = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');

// ============= sidebar =================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// =============== Messages =================
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
})