console.log(1)
const kosakataId = window.location.search;

fetch("data-kamus.json")
  .then((response) => response.json())
  .then((data) => {
    const detail = data.find((item) => item.kosakata === kosakataId);
    const detailElement = document.getElementById("detail");
    if (detail) {
      detailElement.innerHTML = `<h2>${detail.kosakata}</h2><p>${detail.desc}</p>`;
    } else {
      detailElement.innerHTML = "<p>Kosakata tidak ditemukan</p>";
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
