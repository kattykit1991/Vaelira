// 🧪 Formular, Eingabefeld, Potion-Liste und Reload-Button aus dem HTML holen
const form = document.querySelector("form");
const potionInput = document.getElementById("potionInput");
const potionList = document.getElementById("potionList");
const reloadButton = document.getElementById("reload");

// 👻 Debug/Test: Prüfen, ob Formular und Input korrekt gefunden wurden
// console.log(form);
// console.log(potionInput);

// 💾 Gespeicherte Potions aus dem localStorage zurückholen.
// Falls noch keine gespeichert sind, startet das Archiv mit einem leeren Array.
let potions = JSON.parse(localStorage.getItem("potions")) || [];

// 🧪 Wird ausgeführt, wenn eine neue Potion über das Formular gebraut wird
form.addEventListener("submit", function (event) {
  // Verhindert, dass das Formular die Seite automatisch neu lädt
  event.preventDefault();

  // Leerzeichen am Anfang und Ende entfernen
  const content = potionInput.value.trim();

  // 👻 Keine leeren Potions im Archiv erlaubt
  if (!content) {
    return;
  }

  // 🧪 Aus der Eingabe ein Potion-Objekt bauen
  const potion = {
    // UUID erzeugen, Bindestriche entfernen und "task-" davor setzen
    id: `task-${crypto.randomUUID().replaceAll("-", "")}`,
    content: content,
  };

  // ✨ Neue Potion vorne ins Array setzen
  potions.unshift(potion);

  // 📜 Neue Potion sofort auf der Webseite anzeigen
  createListItem(potion);

  // 💾 Aktualisiertes Potion-Array als String im localStorage speichern
  localStorage.setItem("potions", JSON.stringify(potions));

  // 🧹 Formular nach erfolgreichem Brauen wieder leeren
  form.reset();

  // 👻 Debug/Test: Eingabe und aktuelles Array kontrollieren
  // console.log(potionInput.value);
  // console.log(potions);
});

// create list unter potion list element make ul draus und paste all potions in there thanks.
// and when i say delete then delete, double thanks.JSON

// 📜 Erstellt aus einer Potion einen sichtbaren Listeneintrag
function createListItem(potion) {
  const listItem = document.createElement("li");

  // Gespeicherte Potion-ID auch als ID des Listeneintrags verwenden
  listItem.id = potion.id;

  // Potion-Name im Listeneintrag anzeigen
  listItem.textContent = potion.content;

  // 🔴 Delete-Button für diese Potion erstellen
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // 💀 Potion löschen, wenn ihr Delete-Button geklickt wird
  deleteButton.addEventListener("click", function () {
    // Alle Potions behalten, AUSSER der angeklickten Potion
    potions = potions.filter(function (storedPotion) {
      return storedPotion.id !== potion.id;
    });

    // 💾 Das neue Array ohne die gelöschte Potion wieder speichern
    localStorage.setItem("potions", JSON.stringify(potions));

    // 🧹 Potion auch direkt von der Webseite entfernen
    listItem.remove();
  });

  // Delete-Button in den Listeneintrag setzen
  listItem.appendChild(deleteButton);

  // Neuen Listeneintrag oben im Potion Archive anzeigen
  potionList.prepend(listItem);
}

// 📚 Alle bereits gespeicherten Potions beim Laden der Seite anzeigen
potions
  .slice()
  .reverse()
  .forEach(function (potion) {
    createListItem(potion);
  });

// 🔄 Potion Archive / Seite neu laden
reloadButton.addEventListener("click", function () {
  window.location.reload();
});

// 👻 Frühere Debug-/Storage-Tests
// const storedPotions = localStorage.getItem("potions");
// console.log(JSON.parse(storedPotions));

// const potion = potions[0];
// console.log(potion);
