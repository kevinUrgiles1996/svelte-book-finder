<script>
  export let book;

  let thumbnailUrl;
  const { volumeInfo } = book;
  const { title, imageLinks, previewLink } = volumeInfo;
  
  if (imageLinks){
    const { thumbnail } = imageLinks;
    thumbnailUrl = thumbnail;
  } else {
    thumbnailUrl = 'https://image.flaticon.com/icons/png/512/130/130304.png';
  }

</script>
<style>
  .book{
    height: 300px;
    padding: 10px;
    box-shadow: 2px 2px 10px black;
  }

  .title {
    text-align: center;
  }

  img {
    height: 200px;
    width: 80%;
    display: block;
    margin: 0 auto;
  }

  .preview-link {
    color: blue;
    display: block;
    border: 1px solid blueviolet;
    border-radius: 2px;
    text-align: center;
    margin: 10px auto;
    padding: 10px 0;
    cursor: pointer;
  }

  .preview-link:hover {
    background-color: blueviolet;
    color: white;
  }

</style>
<div class="book">
  <h3 class="title">{title.substring(0,20)}</h3>
  <img src={thumbnailUrl} alt="cover">
  <a class="preview-link" href={previewLink} target="_blank" >Preview Link</a>
</div>