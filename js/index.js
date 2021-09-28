document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});








function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))
  
}
    function renderBooks(books){
        console.log(books);
        const ul = document.querySelector("ul#list");
        books.forEach(book => {
            const li = document.createElement("li");
            li.innerHTML = book.title
            ul.appendChild(li)
            li.addEventListener("click", ( )=> display(book))
        })
    }
  
  
  
  function display(book){
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


      const userList = document.createElement("ul")
      userList.className = "users"
      
      book.users.forEach(person => { 

        const innerList = document.createElement("li");
        userList.append(innerList)
        innerList.innerHTML = person.username
      })

      const bttn = document.createElement("button")
      bttn.id = "button_add"
      bttn.innerHTML = "LIKE"

      bttn.addEventListener("click",() =>{

    //     fetch("http://localhost:3000/books/:id"),{
           
    //     .then(response => response.json()),
    //     .then(json => console.log(json)),
        
      })




      showPanel.replaceChildren(img, title, subtitle, author, description, userList, bttn)

  }











