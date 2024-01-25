<template>
   <div class="user-albums">
    <album-item v-for="album in $store.getters.filteredAlbumTitles" :key="album.id" :album="album"></album-item>
   </div>
</template>   
<script>   
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import {mapMutations} from 'vuex';
  import AlbumItem from './AlbumItem';
  export default{
      components: {AlbumItem},
      computed: {
        ...mapGetters(['filteredAlbumTitles', 'filteredPhotoAlbums', 'covers'])
      },
      methods:{
      //для использования action vuex
          ...mapActions(['fetchAlbums', 'fetchPhotos','filterAlbumTitles', 'filterPhotoAlbums', 'getFirstPhotos'])
      },
      async mounted(){
          //вызвать action vuex
          await this.fetchAlbums();
          await this.fetchPhotos();
          await this.filterAlbumTitles();
          await this.filterPhotoAlbums();
          this.getFirstPhotos();
      }      
  }
</script>

<style lang="scss" scoped>
  .user-albums{
    display: flex;
    flex-direction: column;
  }
</style>