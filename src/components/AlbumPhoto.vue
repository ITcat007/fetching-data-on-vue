<template>
    <div class="photo-item">       
        <img :src="photo.url" alt="photo" width="300px">
    </div>
 </template>

 <script>
    export default{
        props: {
            photo: {
                type: Object,
                required: true
            }
        }     
    }
 </script>

 <style lang="scss" scoped>
    .photo-item{
        width: 300px;
        height: 300px;
    }
 </style>
