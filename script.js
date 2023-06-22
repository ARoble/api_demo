document.querySelector(".fetch").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(".image").src = data.message;
    });
});
