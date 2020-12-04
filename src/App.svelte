<script>
  import NavBar from './components/NavBar.svelte';
  import SearchBar from './components/SearchBar.svelte';
  import BookContainer from './components/BookContainer.svelte';
</script>

<div class="app">
  <NavBar />
  <SearchBar />
  <BookContainer />
</div>

<style>
	:global(*){
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		padding: 0;
	}

  .app {
    background-color: #f8f1f1;
    width: 100vw;
    min-height: 100vh;
  }

</style>