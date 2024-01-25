import router from '../../router'
export default {
    state:{
        albums: [],
        filteredAlbumTitles: [],
        photoAlbums: [],
        filteredPhotoAlbums: [],
        posts: [],
        filteredPosts: [],
        covers:[]
    },
    actions:{
        async fetchAlbums(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/albums')
            const albums = await response.json();
            ctx.commit('updateAlbums', albums);
        },
        async fetchPhotos(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const photos = await response.json();
            ctx.commit('updatePhotoAlbums', photos); 
        },
        filterAlbumTitles(ctx){
            const filteredAlbumTitles = ctx.state.albums.filter(album => album.userId == router.currentRoute.params.id);
            ctx.commit('updateFilteredAlbumTitles', filteredAlbumTitles); 
        },
        filterPhotoAlbums(ctx){
            let tempArr=[];   
            for(let i=0;i< ctx.getters.filteredAlbumTitles.length;i++){
                let counter = 0;
                for(let j=0;j< ctx.state.photoAlbums.length;j++){
                    if(ctx.state.photoAlbums[j].albumId == ctx.getters.filteredAlbumTitles[i].id){                                                
                        if(counter > 9){
                            break;
                        } else {
                            tempArr.push(ctx.state.photoAlbums[j]);
                            counter++;
                        }                        
                    }                    
                }
            }
            ctx.commit('updateFilteredPhotoAlbums', tempArr); 
        },
        async fetchPosts(ctx){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await response.json();
            ctx.commit('updatePosts', posts);
        },
        filterPosts(ctx){
            const filteredPosts = ctx.state.posts.filter(post => post.userId == router.currentRoute.params.id);
            ctx.commit('updateFilteredPosts', filteredPosts); 
        },
        getFirstPhotos(ctx){
            const set = new Set();
            const uniqueObjects = ctx.getters.filteredPhotoAlbums.filter(item => {
                if (set.has(item.albumId)) {
                    return false;
                }
                set.add(item.albumId);
                return true;
            });
            ctx.commit('updateUniquePhotos', uniqueObjects); 
        }
    },
    mutations:{
        updateAlbums(state, albums){
            state.albums = albums;
        },
        updateFilteredAlbumTitles(state, filteredAlbumTitles){            
            state.filteredAlbumTitles = filteredAlbumTitles;
        },
        updatePhotoAlbums(state, photos){
            state.photoAlbums = photos;
        },
        updateFilteredPhotoAlbums(state, filteredPhotoAlbums){
            state.filteredPhotoAlbums = filteredPhotoAlbums;
        },
        updatePosts(state, posts){
            state.posts = posts;
        },
        updateFilteredPosts(state, filteredPosts){
            state.filteredPosts = filteredPosts;
        },
        updateUniquePhotos(state, uniquePhotos){
            state.covers = uniquePhotos;
        }
    },
    getters:{
        allAlbums(state){
            return state.albums;
        },
        filteredAlbumTitles(state){
            return state.filteredAlbumTitles;
        },
        filteredPhotoAlbums(state){ 
                return state.filteredPhotoAlbums;
        },
        filteredPosts(state){
            return state.filteredPosts;
        },
        covers(state){
            return state.covers;
        }                                        
    }
}