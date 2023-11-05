let user = localStorage.getItem("user");
if (user) {
    user = JSON.parse(localStorage.getItem("user"));

document.addEventListener("DOMContentLoaded", () =>{
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const avatarEl = document.getElementById("avatar");

    nameEl.innerHTML = user.displayName;
    emailEl.innerHTML = user.email;
    avatarEl.src = user.photoURL;
// logout
    const logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", () =>{
        localStorage.removeItem("user");
        window.location.href = "/login.html";
    });
});
} else {
    window.location.href = "/login.html";
}