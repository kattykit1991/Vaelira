// 📚 Klassischer Book-Bauplan mit Constructor Function
function ClassicBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// 📜 Aus den Buchdaten eine kleine Zusammenfassung zusammenbasteln
ClassicBook.prototype.summary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${
    this.isRead ? "Yes" : "No"
  }`;
};

// 🍄 Unser erstes höchst seriöses Vaelira-Buch erstellen
const bookOne = new ClassicBook(
  "The Suspiciously Glowing Mushroom",
  "Vaelira",
  347,
  false,
);

// ✨ Gleicher Book-Bauplan nochmal als moderne Class
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // 📜 Class-Version unserer Buch-Zusammenfassung
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${
      this.isRead ? "Yes" : "No"
    }`;
  }
}

// 🦋 Zweites Buch erstellen - diesmal mit der schicken neuen Class
const bookTwo = new Book(
  "A Beginner's Guide to Questionable Magic",
  "Professor Mothwing",
  213,
  true,
);

// 📚 Beide Bücher ins gleiche Regal-Array stopfen
const books = [bookOne, bookTwo];

// 🔎 Bücherregal und Detailbox aus dem HTML angeln
const bookshelf = document.querySelector("#bookshelf");
const bookDetails = document.querySelector("#book-details");

// 📕 Jedes Buch aus dem Array bekommt seinen eigenen Buchrücken
books.forEach(function (book) {
  // 🪄 Für das aktuelle Buch ein neues div herbeizaubern
  const bookElement = document.createElement("div");

  // 🎨 Buch-Klasse und passenden Titel draufklatschen
  bookElement.classList.add("book");
  bookElement.textContent = book.title;

  // 📚 Fertiges Buch ins Regal stellen
  bookshelf.appendChild(bookElement);

  // 👆 Buch angeklickt? Passende Daten unten ausspucken
  bookElement.addEventListener("click", function () {
    bookDetails.innerHTML = `
      <h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.isRead ? "✦ Read" : "✧ Unread"}</p>
    `;
  });
});
