window.onload = function () {
  const btnArr = document.getElementsByTagName("button");

  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(".day" + (i + 1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /*JS로 한 글자씩 출력하는 방식*/
  const text = "1년동안의 릴스여행 - 드디어 간다✨✨";
  const chars = Array.from(text);
  const el = document.getElementById("typing");
  let i = 0;

  function type() {
    if (i < chars.length) {
      el.textContent += chars[i];
      i++;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        el.textContent = "";
        i = 0;
        type();
      }, 2000);
    }
  }
  type();
};
