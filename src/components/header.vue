<template>
    <div>
        <header>

            <div id="carouselMaterialStyle" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner  shadow-4-strong">
                    <div class="carousel-item active">
                        <img src="../assets/slide.jpg" class="d-block w-100"
                        alt="Sunset Over the City" />
                        <div class="carousel-caption">
                        <h5>LOUER ET ACHETER LES MAISONS DE VOS RÊVES</h5>
                        <p class="para1">Quels que soient vos besoins immobiliers, IMMO Properties est là pour vous.</p>
                        <div class="lien">
                                <a href="">view More</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slides.jpg" class="d-block w-100"
                        alt="Canyon at Nigh" />
                        <div class="carousel-caption ">
                        <h4>LES PLUS  BEAUX MAISONS SONT CHEZ NOUS </h4>
                        <p class="para2">Tous vous conviendra et a moindres coûts</p>
                            <div class="lien">
                                <a href="">view More</a>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="../assets/slide3.jpg" class="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />
                        <div class="carousel-caption d-none d-md-block">
                        <h3>BIENVENUE CHEZ IMMO</h3>
                        <p class="para3">Notre priorité à Immo c'est votre satisfaction</p>
                        <div class="lien">
                                <a href="">view More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon previous" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                    <span class="carousel-control-next-icon icone next" aria-hidden="true"></span>
                    <span class="visually-hidden ">Next</span>
                </button>
            </div>
            
           <navbarComponent/>
        </header>
    </div>
</template>

<script>

import navbarComponent from "../components/navbar.vue";
export default {
    name:"headerComponent",
    components:{
        navbarComponent
    }
    
}
</script>

<style scoped>
   header{
      
      height: 100vh;
      width: 100%;
     
      
    }
    header .carousel{
      width: 100%;
      position: absolute;
      
   
    }
    header .carousel-item img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
     
      
    }



    .carousel-caption{
    position: absolute;
    top: 40%;
}
.carousel-caption h5, h4, h3{
    font-size: 80px;
    /* -webkit-text-stroke: 1px #FFF; */
    color: #FFF;
}
.carousel-caption p{
  font-size: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #FFF;
}
.next{
    background-color:black;
    padding: 10px;
    height: 70px;
    border-radius: 10px;
    color: #fff;
}

.previous{
    background-color:black;
    padding: 10px;
    height: 70px;
    border-radius: 10px;
}

 .lien{
        margin-top: 60px;
   
}
.lien a{
    position: relative;
    padding: 20px 40px;
    border: 1px solid #FFF; 
    background-color: blueviolet; 
    margin-right: 20px;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 30px;
    border-radius:20px;
    transition: 0.5s;
}
.lien a:hover{
    border: 3px solid blueviolet; 
    background-color: #fff; 
    color: blueviolet;
}


    
.lien a:hover::before,
.lien a:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
}
@media (max-width:1100px){
    .carousel-caption h5{
        margin-top: -25%;
    }
    .carousel-caption h4{
        margin-top: -25%;
    }
    .carousel-caption h3{
        margin-top: -25%;
    }
}
@media (max-width:820px) {
    header{
        width:100%;
    }
    
}
@media (max-width:768px) {
    header{
        width:100%;
    }
    
}
@media (max-width:600px) {
    .carousel-caption h5{
        margin-top: -20%;
        font-size: 40px;
    }
    .carousel-caption h4{
        margin-top: -20%;
        font-size: 40px;
    }
    .carousel-caption h3{
        margin-top: -20%;
        font-size: 40px;
    }
    .villa{
        height: 1300px;
    }
    
}
@media (max-width:414px){
    .carousel-caption h5{
        font-size: 40px;
        letter-spacing: 4;
    }
    .carousel-caption p{
        font-size: 22px;
    }
    .carousel-caption h4{
        font-size: 40px;
    }
    .carousel-caption h3{
        font-size: 40px;
    }

}
@media (max-width:375px){
    .carousel-caption h5{
        font-size: 30px;
    }
    .carousel-caption p{
        font-size: 20px;
    }
    .carousel-caption h4{
        font-size: 30px;
    }
    .carousel-caption h3{
        font-size: 30px;
    }
}
@media (max-width:320px){
    .carousel-caption h5{
        font-size: 30px;
    }
    .carousel-caption p{
        font-size: 16px;
    }
    .carousel-caption h4{
        font-size: 30px;
    }
    .carousel-caption h3{
        font-size: 30px;
    }
    .lien a{
        margin-top: 60px;
        padding: 4px 20px;
        border: 1px solid #FFF; 
        background-color: blueviolet; 
    }
}



</style> 