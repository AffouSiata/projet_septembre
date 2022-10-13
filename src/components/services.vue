<template>
    <div>
        <div>
            <h1>Nos services</h1>
           <div class="services">
                <div class="container">
                    <div class="service1">
                        <img src="../assets/bac3.jpg" alt="">
                            <div class="info">
                                <router-link to="/achat">Achat</router-link>
                            </div>
                    </div>
                    <div class="service1">
                        <div class="achat">
                            <img src="../assets/bac1.jpg" alt="">
                            <div class="info">
                                <router-link to="/location">Location</router-link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'servicesComponent'
}
</script>
<style scoped>
    h1{
        text-align: center;
        text-transform: uppercase;
        color: black;
        font-size: 50px;
        padding: 30px;
    }
    .services{
        display: flex; 
        flex-direction: row;
    }
    .container{
        width: 100vw;
        display: flex;  
        padding: 20px; 
    }
    .service1{
        margin-right: 20px;
        width:600px;
        height: 400px;
        padding: 2rem 1rem; 
        position: relative;
        display: flex;
        align-items: center;
        box-shadow: 0 7px 10px rgba(0,0,0,0.4);
        transition: 0.5s ease-in-out;
    }
    .service1:hover{
        transform: translateY(20px);
    }
    .service1::before{
        position: absolute;
        content:"";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(to bottom,rgba(145, 26, 220, 0.5),rgb(117, 106, 132)); */
        z-index: 2;
        transition: 0.5s all;
        opacity: 0.3;
    }
    .service1:hover::before{
        opacity: 1;
    }
    .service1 img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position:absolute ;
        top: 0;
        left: 0;
    }
    .service1 .info{
        position: relative;
        z-index: 3;
        color: #fff;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s all;
    }
    .service1:hover .info{
        opacity: 1;
        transform: translateY(0px);
    }
    .service1 .info a{
        padding: 1rem 2rem;
        background: #fff;
        color: black;
        font-size: 26px;
        font-weight: bold ;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        margin-left: 130%;
        border-radius: 10px;
    }
    .service1 .info a:hover{
        box-shadow: 0 7px 10px rgba(0,0,0,0.5);
        color: blueviolet;
    }
    @media (max-width:1100px){
        .service1{
            width:460px;
            height: 400px;
            
        }
        .service1 .info a{
            margin-left: 100%;
        }
    }
    @media (max-width:768px) {
        .container{
            display: flex;
            flex-direction: column;
        }
        .service1{
            width: 100%;
            margin-top: 30px;
        }
        .service1 .info a{
            margin-left: 140%;
        }
        
        .element{
            height: auto;
            margin-top: -20px;
            
        }
       .villa{
           height: 360px;
       }    
  
    }
    @media (max-width:375px){
        .service1 .info a{
            margin-left: 40%;
        }
    }
    @media (max-width:414px){
        .service1 .info a{
            margin-left: 40%;
        }
    }
    @media (max-width:320px){
        .service1{
            height: 200px;
            
        }
    }
    
  





    /* .container .service1{
        position: relative;
        height: 400px;
        box-shadow: 0 30px 30px rgba(0,0,0,0.4);
    }
    .container .service1::before{
        position: absolute;
        content:"";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,rgba(0, 176, 155, 0.5),rgba(150, 201, 61, 1));
        z-index: 2;
        transition: 0.5s all;
        opacity: 0;
        
    }
    .container .service1:hover::before{
        opacity: 1;
    
    }
    .container .service1{
        width: 100%;
        height: 100%;
    }
    .container .service1 .info{
        position: relative;
        z-index: 3;
        color: #fff;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s all;
    }
    .container .service1:hover .info{
        opacity: 1;
        transform: translateY(20px);
    }
    .container .service1 img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */

</style>