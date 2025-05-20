const hireForm = document.querySelector(".hire-form");
const email = "thiagoborgespedro570@gmail.com";

if (hireForm) {
  document.getElementById("send-button").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    if (email && message) {
      window.location.href = `mailto:${email}?subject=Contato&body=${encodeURIComponent(
        message
      )}`;
    } else {
      alert("Por favor, preencha o email e a mensagem.");
    }
  });
}

window.addEventListener("scroll", animateStats);
