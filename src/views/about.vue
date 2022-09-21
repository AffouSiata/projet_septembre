<template>
    <div>
       <div class="about">
            <navbarComponent/>
       </div>
       <div class="ban1">
            <router-link to="">Home / </router-link>
            <router-link to=""> About</router-link>   
        </div>
        <div class="ban2">
            <div class="ban21">
                <h1>WELCOME TO IMMO</h1>
                <p>
                    Considering branding but create a better customer experience. Informing brand integration to make users into advocates.
                    Informing awareness and above all, make users into advocates. Creating user stories to improve overall outcomes.
                </p>
                <div class="icone">
                    <i class="fas fa-check"><span>Your Customer Aware</span></i>
                    <i class="fas fa-check"><span>Awareness & Visibility</span> </i>
                    <i class="fas fa-check"><span>Drive Website Traffic</span></i>
                    <i class="fas fa-check"><span>Convert Traffic</span></i>
                </div>
               <div class="about1">
                <div class="num">
                    <small>+13K</small>
                    <span>Happy Client</span>
                </div>
                <div class="num">
                    <small>+90</small>
                    <span>Emsamllloyee</span>
                </div>
                <div class="num">
                    <small>+2193</small>
                    <span>Total Property</span>
                </div>
               </div>
            </div>
            <div class="ban22">
                <img src="../assets/ap2.jpg" alt="">
            </div>
        </div>


        <div class="confiance">
            <h4>Bonnes Raisons De Nous Faire Confiance</h4>
            <div class="raison">
                <div class="block">
                    <div class="font">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="test">
                        <span>1 - Une équipe d'experts qualifiés</span>
                        <p>
						Nos spécialistes expérimentés sont toujours attentifs aux évolutions du marché.
                        Notre équipe met ses conseils et son savoir-faire à votre disposition pour vous apporter
                        la meilleure analyse sur le marché actuel pour VOTRE projet.					
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="font">
                        <i class="fas fa-smile"></i>
                    </div>
                    <div class="test">
                        <span>2 - Satisfaction client</span>
                        <p>
                            Éthique et transparence sont les valeurs clefs de notre agence.
                            C'est grâce à cela que nous pouvons construire une relation de confiance 
                            et de long terme avec nos clients.			
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="font">
                        <i class="fas fa-toolbox"></i>
                    </div>
                    <div class="test">
                        <span>3 - Suivi complet</span>
                        <p>
                            Nous assurons une assistance et un suivi administratif 
                            complet jusqu'à la signature de l'acte authentique de votre vente.					
                        </p>
                    </div>
                </div>
            </div>
            <div class="raison">
                <div class="block">
                    <div class="font">
                        <i class="fab fa-telegram-plane"></i>
                    </div>
                    <div class="test">
                        <span>4 - Compte rendu</span>
                        <p>
                            Dans le but d'assurer une totale transparence,
                            nous échangeons régulièrement avec vous sur la commercialisation de votre bien.										
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="font">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="test">
                        <span>3 -  Estimation gratuite sous 24h</span>
                        <p>
                            Toutes nos estimations sont réalisées en respectant des méthodes
                            d'expertises immobilières prouvées et se basant sur les ventes notariées réalisées et
                            le comparatif du marché apparent.				
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="font">
                        <i class="fas fa-laptop-house"></i>
                    </div>
                    <div class="test">
                        <span>6 - Diagnostics immobiliers offerts</span>
                        <p>
                            En faisant confiance à notre Agence via l’exclusivité, nous vous offrons les diagnostics
                            techniques obligatoires lors de la vente de votre bien.					.					
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ban3">
          <h1>Our Testimonial</h1>
          <p>HAPPY CLIENT SAYS</p>
            <div class="client">
                <div class="temoin">
                    <div class="cart">
                        <img src="../assets/ap2.jpg" alt="">
                        <div class="fonct">
                            <span>Elwin Dawson</span>
                            <small>Designer</small>
                        </div>
                    </div>
                    <div class="texte">
                        <p>
                            Axé sur la pratique en studio
                            sur le design moderne, les intérieurs et les paysages.
                            Depuis notre création en 2007, nous avons utilisé le mode de livraison en texte libre utilisé.
                        </p>
                    </div>
                    <div class="etoile">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </div>
                    
                </div>
                <div class="temoin">
                        <div class="cart">
                            <img src="../assets/ap2.jpg" alt="">
                            <div class="fonct">
                                <span>Elwin Dawson</span>
                                <small>Designer</small>
                            </div>
                        </div>
                        <div class="texte">
                            <p>
                                Axé sur la pratique en studio
                                sur le design moderne, les intérieurs et les paysages.
                                Depuis notre création en 2007, nous avons utilisé le mode de livraison en texte libre utilisé.
                            </p>
                        </div>
                        <div class="etoile">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                        </div>
                        
                </div>
            </div>
          
          
        </div> 
        <footerComponent/>

       
           
    </div>
</template>

<script>
import navbarComponent from "../components/navbar.vue";
import footerComponent from '../components/footer.vue'
export default {
    name:'home',
    components:{
        navbarComponent,
        footerComponent
    }
}
</script>

<style scoped>
        /* background:  rgba(0, 0, 0, 0.7) url('../assets/img4.jpg') no-repeat center; */
    .about{
        width: 100%;
        height: 90px;
        background-color: black;
        z-index: 1;
        

    }
    .ban1{
        width: 100%;
        height: 200px;
        background:  rgba(0, 0, 0, 0.7) url('../assets/bac1.jpg') no-repeat center;
        background-blend-mode: darken;
        object-fit: cover;
        display: flex;
        justify-content: center;
        color: #fff;
        padding-top: 80px;      
    }
    .ban1 a{
        color: #fff;
        font-size: 22px;
        font-weight: bold;
    }
    .ban1 a:hover{
        color: blueviolet;
    }
    .ban2{
        margin-top: 30px;
        width: 100%;
        height: 600px;
        display: flex;
        background-color: #f1f1f1;
        justify-content: center;
        align-items: center;  
    }
    .ban21{
        width: 50%;
        /* margin: 20px 20px 20px 20px; */
        display: flex;
        flex-direction: column;
        margin-left:300px

    }
    .ban21 h1{
        color: #252525;
    }
    .ban21 p{
        width: 600px;
        color: #666666;
        font-size: 20px;
        line-height: 26px;
        font-family: 'Poppins', sans-serif;
        text-align: justify;
    }
    .icone{
        display: flex;
        flex-direction: column;
        justify-content: space-around
    }
    .ban21 .icone i{
        padding-top:10px ;
        margin-right: 20px;
        color: blueviolet;
        font-weight: bold;
        font-size: 20px;
    }
    .ban21 .icone span{
        margin-left: 20px;
        color: #666;
        font-size: 20px;
        line-height: 26px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }
    .ban22{
        width: 50%;
        margin: 20px;
      
        
    }
    .about1{
       margin-top: 50px;  
       display: flex;
       justify-content: space-around;
      
    
    }
    .num{
        display: flex;
        flex-direction: column;
    }
    small{
        font-size: 30px;
        color: blueviolet;
        font-weight: bold;
    }
    span{
       padding-top: -10px;
        color: black;
        font-weight: bold;
        font-size: 30px;
    }
   


    @media (max-width:1400px){
        .ban2{
            height:100vh
        }
        .ban22 img{
            height: 470px;
           
        }
    }
    @media (max-width:1200px) {
        .ban21 {
            height: 1000px;
            
        }
        .ban21 p{
            margin-left: -135px;
            width: 500px;
        }
        .ban21 h1{
           /* text-align: center;
           margin-right: 300px; */
           float: left;
        }
        .icone{
            margin-left: -120px
        }
        .ban21 .icone i{
            font-size: 20px;
        }
        .ban21 .icone span{
            font-size: 20px;
        }
        .about1{
            margin-top: 30px;
        }
        
    }
    @media (max-width:888px) {
        .ban2{
            display: flex;
            flex-direction: column;
        } 
        .ban21{
            width: 95%;
            height: 400px;
            
        }
        .ban22{
            width: 95%;
            height: 400px;
        }
        .about{
            width: 100%;
            display: flex;
            flex-direction: column;
            
        }
        .ban22 img{
            height: 400px;
            margin-left: 70px;
            margin-top: 80px;
        }
    }


    @media (max-width:620px){
        .logo{
            margin-top: 50px;
            font-size: 60px;
            margin-bottom: -10px;
        }
        .logo span{
            font-size: 80px; 
        }
        .sign{
            margin-top: -1px; 
        }
        
    }
    @media (max-width:375px) {

        
    }


    .ban3{
        margin-top: 30px;
        width: 100%;
        height: 60vh;
        /* background-color: blueviolet; */
        background-image: url("../assets/testi-bg.jpg");
        

    }
    .ban3 h1{
        color: blueviolet;
        text-align: center;
        padding-top: 70px;
        font-size: 30px;

    }
    .ban3 p{
        color: black;
        text-align: center;
        font-size: 50px;
        font-weight: bold;
       


    }
    .client{
        display: flex;
        justify-content: center;
        
    }
    .temoin{
        height: 300px;
        width: 500px;
        background-color: white;
        padding: 40px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        margin-right: 30px;
        
    }
    .fonct {
        display: flex;
        flex-direction: column;
        padding-left: 40px;
    }
    .fonct span{
        color: black;
        font-weight: bold;
        font-size: 30px;
    }
    .fonct small{
        font-size: 20px;
    }
    .cart{
        display: flex;
       flex-direction: row;
        
    }
    
    .cart img{
        height: 80px;
        width: 80px;
    }
    .texte p{
        margin-top: 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 15px;
        text-align: justify;
        color: #696969;
    }
    .etoile{
        text-align: center;
    }
    .etoile i{
        font-size: 30px;
        color: blueviolet;
    }

    @media (max-width:900px) {

    .ban3{
        width: 100%;
        height: 90vh;   

    }
    .about1{
        margin-left: -210px;
    }

        .client{
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            margin-left: 180px;
            margin-top: 30px;
        }
        .temoin{
            margin-top: 20px;
            margin-left: -100px;
        }
    }
    .confiance{
        height: 80vh;
        width: 100%;
        background-color: #f1f1f1;
        margin-top: 40px;
        
    }
    .raison{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .confiance h4{
        text-align: center;
        padding: 50px;
        font: 3rem sans-serif;
        color: blueviolet;
    }
    .block{
        width: 400px;
        display: flex;
        background-color: #fff;
        padding: 20px;
        margin-right: 20px;
        border-radius: 10px;
    }
    .font{
        height: 30px;
        margin-right: 20px;
    }
    .font i{
        font-size: 50px;
        color: blueviolet;
    }
    .test span{
        font-size: 20px;
        color: black;
        font-weight: bold;
    }
    .test p{
        text-align: justify;
    }
    .footer{
        width: 100%;
        height: 300px;
        background-color: black;
    }
    @media (max-width:888px) {
        .confiance{
            height: 140vh;
        }
        .raison{
            display: flex;
            flex-direction: column;
        }
        .block{
            width: 90%;
            margin: 0px 0px 20px 20px;
        }
    }

</style>