<template>
    <div>
        <headerComponent/>
        <servicesComponent/>
        <page1Component/>
    </div>
</template>

<script>
import headerComponent from '../components/header.vue'
import page1Component from '../components/page1.vue'
import servicesComponent from '../components/services.vue'

export default {
    name:'home' ,
    components:{
        headerComponent,
        servicesComponent,
        page1Component
    }
}
</script>

<style>

</style>
