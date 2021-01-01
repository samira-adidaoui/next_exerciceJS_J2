const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Liste des titres des livres :

  // Première méthode : 
// const bookList = books.map(book => 
//   `${book.title}`);
// console.log(bookList);

  // Seconde méthode : 
const bookList = books.map(({title}) =>({title}));
console.log(bookList);

// Liste des livres emprunté au moins 1 fois : 
// const bookRented = books.map(book => ({
//   title: book.title,
//   rented: book.rented > 0
// }));
// console.log(bookRented)

// livre le plus emprunté : 
const maxRented = books.reduce((prev, current) => {
  return (prev.rented > current.rented) ? prev : current
});
  
console.log(`Le livre le plus emprunté est: ${maxRented.title}`)

  

// livre le moins emprunté : 
const minRented = books.reduce((prev, current) => {
  return (prev.rented < current.rented) ? prev : current
}); 

console.log(`Le livre le moins emprunté est: ${minRented.title}`)

//Supprimer le livre avec l'ID: 133712
const removeId = books.filter(book => book.id !== 133712)
console.log(removeId)


