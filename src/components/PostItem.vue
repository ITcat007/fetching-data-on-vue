<template>      
    <div class="post"> 
        <h3 class="post-title">{{post.title}}</h3>
        <div class="post-body">{{post.body}}</div>      
    </div>    
 </template>

 <script>
    export default{
        props: {
            post: {
                type: Object,
                required: true
            }
        },     
    } 
 </script>

 <style lang="scss" scoped>
    .post{
        margin-bottom: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:after{
            content:'';
            background: var(--textGray);
            width: 30px;
            height: 1px;
            position: absolute;
            left: 50%;
            bottom: -15px;
            transform: translateX(-50%) 
        }

        &-body{
            font-family: var(--openSans);
            color: var(--textGray);
        }

        &-title{
            margin-bottom: 10px;
            max-width: 500px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
 </style>