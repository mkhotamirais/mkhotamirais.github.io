const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");

html.innerHTML = htmlList.map((item, i) => `<a href="${item.href}">${i + 1}. ${item.label}</a>`);
