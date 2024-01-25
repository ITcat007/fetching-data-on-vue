<template>
    <div class="album-gallery">
        <album-photo v-for="photo in $store.getters.filteredPhotoAlbums" :photo="photo" v-if="photo.albumId == $route.params.album.id"></album-photo> 
    </div>
 </template>

 <script>
    import AlbumPhoto from '../components/AlbumPhoto';
    export default{
        components: {AlbumPhoto}   
    }   
 </script>

 <style scoped>
    .album-gallery{
        display: flex;
        flex-wrap: wrap;
    }

    @media(max-width:992px){
    .album-gallery{
      justify-content: center;
    }
  }
 </style>