// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 


document.addEventListener("DOMContentLoaded", async () => {
    const usersList = document.querySelector(".usersList");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        usersList.innerHTML = users.map(user => `<li>${user.name}</li>`).join("");
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
