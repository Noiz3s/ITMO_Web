window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Рендеринг полученных данных о пользователях
            const userList = document.createElement('ul');
            data.forEach(user => {
                if( Math.random() < 0.5) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Username: ${user.username}, Name: ${user.name}, Email: ${user.email}`;
                    userList.appendChild(listItem);
                }
            });
            document.body.appendChild(userList);

            preloader.style.display = 'none'; // Скрыть preloader после получения данных
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            preloader.textContent = 'Error - something went wrong';
        });
});