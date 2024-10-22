const apiKey = "68e23fdb84e0e8d6f940afb70bd3caabd8d2f52c";

const buttonEl = document.querySelector(".btn");
const emojiEl = document.querySelector(".emoji");

const emoji = [];

const getEmoji = async () => {
  let response = await fetch(
    `https://emoji-api.com/emojis?access_key=${apiKey}`
  );
  let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
};

getEmoji();

buttonEl.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * emoji.length);
  buttonEl.innerHTML = emoji[randomIndex].emojiName;
  emojiEl.innerHTML = emoji[randomIndex].emojiCode;
});
