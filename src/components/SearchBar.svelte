<script>
  import { books, loading } from '../store.js';

  let text = '';
  let alertMessage = '';
  let searchInput;

  function handleSubmit(event){
    event.preventDefault();
    if (!text){
      setAlert('Type something');
    } else {
      searchBooks();
    }
  }

  function setAlert(msg){
    alertMessage = msg;
    setTimeout(() => alertMessage = '', 1000);
  }

  async function searchBooks(){
    loading.set(true);
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
    const data = await res.json();
    books.set(data.items);
    loading.set(false)
  }

  function clearSearch(){
    text = '';
    books.set([]);
    searchInput.focus();
  }

</script>
<div class="search-bar">
  {#if alertMessage}
    <div class="alert">
      <h3>{alertMessage}</h3>
    </div>
  {/if}
  <form on:submit={handleSubmit}>
    <input type="text" placeholder="Type a title, author or editorial" bind:value={text} bind:this={searchInput} >
    <button class="search-button" type="submit">Search</button>
    {#if $books.length > 0}
      <button class="clear-button" on:click={clearSearch} >Clear Search</button>
    {/if}
    
  </form>
</div>
<style>
  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 20px
  }

  input {
    min-width: 300px;
    text-align: center;
    font-size: 20px;
  }

  button{
    cursor: pointer;
  }

  .search-button {
    border: 1px solid blue;
    color: blue;
  }

  .clear-button {
    border: 1px solid red;
    color: red;
  }

  .search-button:hover {
    background-color: blue;
    color: white;
  }

  .clear-button:hover {
    background-color: red;
    color: white;
  }

  .alert {
    border: 1px solid red;
    border-radius: 4px;
    text-align: center;
    color: red;
    padding: 10px;
    width: 200px;
  }

</style>
