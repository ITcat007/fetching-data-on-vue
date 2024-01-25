<template>
    <div class="album">       
        <router-link :to="{ name: 'album-page', params: {album}}" class="album-title">{{album.title}}</router-link>
        <div class="carousel-wrapper">
            <carousel class="carousel-photos" :mouseDrag="false" :style="{'margin-left' : '-' + (20 * index) + '%'}" :paginationEnabled="false">
                <slide
                    v-for="item in $store.getters.filteredPhotoAlbums" v-if="item.albumId == album.id"    
                ><img :src="item.url" alt="photo" width="100px"></slide> 
            </carousel>
            <button class="carousel-button carousel-button--back" @click="decreaseIndex"></button>
            <button class="carousel-button carousel-button--forward" @click="increaseIndex"></button>
        </div>                
        <div class="album-mobile" v-for="item in $store.getters.covers" v-if="item.albumId == album.id"><img :src="item.url" alt="photo" width="100px"></div>
    </div>
 </template>

 <script>
    import { Carousel, Slide } from 'vue-carousel';
    export default{
        components: {Carousel, Slide},
        props: {
            album: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                index: 0
            }
        },
        methods:{
            increaseIndex(){
                if(this.index <5){
                    this.index++;
                }
            },
            decreaseIndex(){
                if(this.index !=0){
                    this.index--;
                }
            }
        }      
    }
   
 </script>
 <style lang="scss" scoped>
    .album{
        text-align: center;
        margin-bottom: 20px;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:first-child{
            padding-top: 0;
        }

        &-title{
            max-width: 400px;
            margin-bottom: 15px;
            font-weight: 700;
            font-size: 18px;
            text-decoration: none;
            &::first-letter{
                text-transform: uppercase;
            }
            &:hover{
                opacity: .9;
                text-decoration: underline;
            }
        }

        &-mobile{
            display: none;
        }
    }

    .carousel{
        &-wrapper{
            max-width: 500px;
            overflow: hidden;
        }
        &-photos{
            display: flex;
            transition: all ease .5s;
            margin-bottom: 20px;
        }
        &-button{
            width: 24px;
            height: 24px;
            border: none;
            background-size: cover;
            &--back{
                background-image: url('../../public/arrow-back.png');
                margin-right: 50px;
            }
            &--forward{
                background-image: url('../../public/arrow-forw.png');
            }
        }
    }

    .VueCarousel-slide{
        flex-shrink: 1;
    }

    @media(max-width:576px){
        .carousel-wrapper{
            display: none;
        }

        .album-mobile{
            display: block;
        }
    }
 </style>