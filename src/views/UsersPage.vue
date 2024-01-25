<template>
    <div class="container">
        <h1 class="users-title">Список пользователей</h1>
        <user-list/>
    </div>
</template>

<script>
    import UserList from '../components/UserList'
    export default {
        components: {
            UserList
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        max-width: 1280px;
        margin: auto;
        text-align: center;
    }

    .users-title{
        margin-bottom: 30px;
        padding: 0 20px;
        font-weight: 800;
        color: var(--primary);
    }
</style>