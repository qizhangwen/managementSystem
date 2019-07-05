<template>
    <header>
        <span>系统名称</span>
        <p class="photo-name">
            <img class="photo-img" src="../../static/images/photo.png" alt="头像">
            <span>张三</span>
        </p>
    </header>
</template>

<script>
    export default {}
</script>

<style scoped>
    header{display:flex;justify-content:space-between;align-items:center;height:70px;padding:0 20px;font-size:22px;color:#fff;background: #404040;}
    header .photo-name{display: flex;align-items: center;font-size:18px;}
    header .photo-img{width:40px;height:40px;margin-right:10px;}
</style>