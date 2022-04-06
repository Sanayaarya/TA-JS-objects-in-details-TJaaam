class BookList{
  constructor(list = []){
      this.books = books
  }
  add(){
      let book = new Book(title,author,id);
      this.books.push(book);
      return this.books.length;
  }
  delete(){}
}

class Book{
  constructor( title, author, id){
      this.title = title;
      this.author = author;
      this.id = id;
  }
  createUI(){
      let tabel = document.createElement("table");
      let tr = document.createElement("tr");
      let td = document.createElement("td");
  }
};