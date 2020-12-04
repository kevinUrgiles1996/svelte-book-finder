<script>
  import { books, loading } from '../store.js'
  import BookItem from './BookItem.svelte';

</script>

<div class="book-container">
  {#if $loading}
    <h2 class="loading-text" >Loading...</h2>
  {/if}
  {#each $books as book}
    <BookItem book={book} />
  {/each}

</div>

<style>
  .book-container {
    max-width: 1000px;
    padding: 10px 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    grid-gap: 15px;
  }

  .loading-text{
    text-align: center;
  }

</style>