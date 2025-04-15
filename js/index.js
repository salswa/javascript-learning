const SELECTED_TOPIC = "selectedTopic";

function setSelectedTopic(topic) {
  localStorage.setItem(SELECTED_TOPIC, topic);
}

function getSelectedTopic() {
  return localStorage.getItem(SELECTED_TOPIC);
}

function loadScript(e) {
  const filePath = e.target.attributes.path.value;

  setSelectedTopic(filePath);
  location.reload();
}

function displayTopics() {
  const itemListContainer = document.querySelector(".item-list");

  for (let i = 0; i < topics.length; i++) {
    let item = document.createElement("li");
    item.classList.add("item");
    item.innerText = topics[i].title;
    item.setAttribute("path", topics[i].path);
    if (getSelectedTopic() === topics[i].path) {
      item.classList.add("selected");
    }

    item.addEventListener("click", loadScript);

    itemListContainer.appendChild(item);
  }
}

function displaySelectedTopic() {
  const filePath = getSelectedTopic() || topics[0].path;

  fetch(filePath)
    .then((response) => response.text())
    .then((code) => {
      const codeBlock = document.getElementById("code-block");
      const html = Prism.highlight(
        code,
        Prism.languages.javascript,
        "javascript"
      );

      codeBlock.innerHTML = html;
      const e = document.createElement("script");
      const selectedItemTitle =
        document.querySelector(".item.selected").textContent;
      const startCode = `console.log(
  "%c START | ${selectedItemTitle} ",
  "color: black; font-style: italic; background-color: pink;padding: 2px; min-width: 300px"
);`;

      const endCode = `console.log(
  "%c END | ${selectedItemTitle} ",
  "color: black; font-style: italic; background-color: pink;padding: 2px"
);`;
      e.textContent = `${startCode} ${code} ${endCode}`;
      const scriptContainer = document.querySelector("#script-container");
      scriptContainer.appendChild(e);
    })
    .catch((err) => console.error("Failed to load file1.js:", err));
}

function init() {
  displayTopics();
  displaySelectedTopic();
}

window.addEventListener("load", () => init());
