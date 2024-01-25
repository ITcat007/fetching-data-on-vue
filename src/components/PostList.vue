<template>
    <div class="user-posts">
        <post-item v-for="post in $store.getters.filteredPosts" :post="post"></post-item>
    </div>
 </template>   
 <script>     
     import {mapActions} from 'vuex';
     import {mapGetters} from 'vuex';
     import PostItem from './PostItem';
     export default{
        components: {PostItem},
        computed: {
          ...mapGetters(['filteredPosts'])
        },
        methods:{
          //для использования action vuex
          ...mapActions(['fetchPosts', 'filterPosts'])
        },
        async mounted(){
          //вызвать action vuex
          await this.fetchPosts();
          this.filterPosts();
        }      
     }
 </script>

 <style lang="scss" scoped>
    .user-posts{
      padding: 0 30px;
    }

    @media(max-width:1130px){
      .user-posts{
        padding: 0 60px;
      }
    }
 </style>
 