document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});








function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => books.forEach(book => renderBooks(book)))
}
  
    function renderBooks(book){
        console.log(book);
        const ul = document.querySelector("#list");
        
            const li = document.createElement("li");
            li.innerHTML = book.title
            ul.append(li)
            li.addEventListener("click", () => display(book))
        
    }
  

  
  function display(book){
      console.log(book)
      const showPanel = document.querySelector("div#show-panel")

      const author = document.createElement("p")
      author.className = "author"
      author.innerHTML = book.author
      const description = document.createElement("p")
      description.className = "description"
      description.innerHTML = book.description
      const img = document.createElement("img")
      img.className = "img"
      img.src = book.img_url
      const subtitle = document.createElement("p")
      subtitle.className = "subtitle"
      subtitle.innerHTML = book.subtitle
      const title = document.createElement("p")
      title.className = "title"
      title.innerHTML = book.title
      console.log(title)

    //   const userList = document.createElement("li")
    //   userList.className = "users"
    //   userList.innerHTML = book.users.forEach(person => person) 

      const bookUsers = book.filter(book => console.log(book))
      console.log(bookUsers)

      showPanel.append(author)

  }












//   function renderBooks(books) { 
//     console.log(books)
//     const main = document.querySelector('main');
//     books.forEach(book => {
//       const h2 = document.createElement('h2');
//       h2.innerHTML = book.name;
//       main.appendChild(h2)
//       const link = document.createElement("a");
//       link.href = book.url
//       link.innerHTML = "book link"
//       main.appendChild(link)
      
//     });
  
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     fetchBooks();
//   });
  