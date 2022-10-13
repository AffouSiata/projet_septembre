<template>
    <div class="error">
        <div class="erreur">
            <p class="premier">Error</p>
            <h1>404</h1>
            <p class="deuxieme">nous ne reconnaissons pas cette page</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'error'
}
</script>
<style scoped>
.error{
    position: relative;
    background-color: black;
    height: 100vh;
    width: 100%;
}
.erreur{
    position: absolute;
    top: 20%;
    left: 40%;
}

h1{
        color: brown;
        font-size: 245px;
}
p{
    color: white;
    text-align: center;     
}
.premier{
    font-size: 70px;
    font-weight: bold;
  
}
.deuxieme{
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
   
</style>
