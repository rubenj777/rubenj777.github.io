const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#send");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
  testAuth(username.value, password.value);
});

function testAuth(user, pass) {
  //console.log(user, pass)
  let url = "https://desolate-basin-28826.herokuapp.com/api/login_check";
  let body = {
    username: user,
    password: pass,
  };
  let request = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      getData(data.token);
    });
}

function getData(token) {
  let url = "https://desolate-basin-28826.herokuapp.com/api/truc";
  let request = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      data.forEach((pizza) => {
        content.innerHTML += pizza.name;
      });
    });
}
