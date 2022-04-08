//sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// ============= sidebar =================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
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

//searches chat messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight message when clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelectorAll('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// theme customization

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }

}

//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);