<template>
    <div>
        <headerComponent/>
        <servicesComponent/>
        <page1Component/>
        <footerComponent/>
    </div>
</template>

<script>
import headerComponent from '../components/header.vue'
import page1Component from '../components/page1.vue'
import servicesComponent from '../components/services.vue'
import footerComponent from '../components/footer.vue'

export default {
    name:'home' ,
    components:{
        headerComponent,
        servicesComponent,
        page1Component,
        footerComponent
    }
   

           

}
</script>

<style scoped>
</style>
