export default {
    state:{
        users: []
    },
    actions:{
        async fetchUsers(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            ctx.commit('updateUsers', users)
        }
    },
    mutations:{
        updateUsers(state, users){
            state.users = users;
        }
    },
    getters:{
        allUsers(state){
            return state.users;
        }
    },
}