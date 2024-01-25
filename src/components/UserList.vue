<template>
    <div>
        <div class="users" v-if="allUsers.length > 0">
            <ul class="users-list">
                <li class="btn users-list-item" v-for="user in allUsers" :key="user.id" @click="$router.push(`/${user.id}`)">{{user.name}}</li>       
            </ul>
        </div>            
        <h3 v-else> Подождите, список пользователей загружается...</h3>
    </div> 
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    export default{
        computed: mapGetters(['allUsers']),
        methods:
        //для использования action vuex
            mapActions(['fetchUsers']),
        async mounted(){
            //вызвать action vuex
            this.fetchUsers();
        }
    }
</script>

<style lang="scss" scoped>
    .users{
        width: 100%;
        text-align: center;
        font-family: var(--openSans);
        font-weight: 400;
        font-size: 21px;
        &-list{
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style-type: none;
            &-item{
                background-color: var(--bgCyan);
                width: 300px;
                padding: 30px 0;
                margin-bottom: 20px;
                cursor: pointer;
                &:hover{
                    background-color: var(--bgActive);
                }
            }
        }
    }
</style>