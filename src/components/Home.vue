<template>
    <div>
        <v-header></v-header>
        <v-side-bar></v-side-bar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vHeader from './Header.vue'
    import vSideBar from './SideBar.vue'
    export default {
        components: {
            vHeader, vSideBar
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .content{position: absolute;top:70px;right:0;bottom:0;left:200px;padding:10px;}
</style>