<template>
    <div class="user-page">
        <div class="user-page-column">
            <h1 class="user-page-column__title">Посты пользователя</h1>
            <post-list/>
        </div>
        <div class="user-page-column">
            <h1 class="user-page-column__title">Альбомы пользователя</h1>
            <album-list/>
        </div>
    </div>
</template>

<script>
    import AlbumList from '../components/AlbumList'
    import PostList from '../components/PostList'
    export default {
        components: {
           AlbumList, PostList
        },  
    }
</script>

<style lang="scss" scoped>
    .user-page{
        display: flex;
        flex-wrap: wrap;
        &-column{
            width: 50%;
            text-align: center;
            &:first-child{
                background-color: var(--bgLightGray);
            }
            &__title{
                font-weight: 800;
                text-align: center;
                color: var(--primary);
                margin: 12px 0 30px 0;
                padding: 0 20px;
            }
        }
    }
    
    @media(max-width: 1130px){
        .user-page-column{
            width: 100%;          
        }
    }
</style>