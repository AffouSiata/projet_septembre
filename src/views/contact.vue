<template>
    <div>
        <div class="contact">
            <navbarComponent/>
        </div>
        <div class="contact1">
            <router-link to="">Home / </router-link>
            <router-link to="">Contact</router-link>
        </div>
        <div class="frame">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.101780364658!2d-3.964882484463386!3d5.401462436684686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1933ec546f809%3A0xa13e690552d16e30!2sNaN%20Digital%20Academy!5e0!3m2!1sfr!2sci!4v1656348981532!5m2!1sfr!2sci" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact2">
            <div class="partie1">
               <div class="part2">
                    <div class="part1">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>Adresse</h3>
                        <p>Main Building, Centrerl Road, 72/A, New York City, USA</p>
                    </div>
                    <div class="part1">
                        <i class="fa-solid fa-phone"></i>
                        <h3>Phone</h3>
                        <p>+800 123 45 67,
                            +12 345 678 901,
                            +12 345 678 902
                        </p>
                    </div>
               </div>
               <div class="part3">
                    <i class="far fa-envelope"></i>
                    <h3>Email</h3>
                   <p>immo123@gmail</p>
               </div>
            </div>
            <div class="partie2">
                <form action="">
                    <div class="formes">
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                    </div>
                    <div class="forme">
                        <input type="text" placeholder="Phone">
                    </div>
                    <div class="forme">
                       <textarea name="" id="" cols="30" rows="10" placeholder="Messages"></textarea>
                    </div>
                    <div class="botton">
                        <button>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
        <footerComponent/>
    </div>
</template>

<script>
import navbarComponent from "../components/navbar.vue";
import footerComponent from '../components/footer.vue'
export default {
    name:'contact',
    components:{
        navbarComponent,
        footerComponent
    }
   
}
</script>

<style scoped>
    .contact{
        width: 100%;
        height: 90px;
        background-color: black;
        position: fixed;
    }
    .frame iframe{
        width: 100%;
        height: 800px;
    }
    .contact1{
        width: 100%;
        height: 300px;
        background:  rgba(0, 0, 0, 0.7) url('../assets/bac3.jpg') no-repeat center;
        background-blend-mode: darken;
        object-fit: cover;
        display: flex;
        justify-content: center;
        color: #fff;
        padding-top: 80px;      
    }
    .contact1 a{
        padding-top: 80px;  
        color: #fff;
        font-size: 22px;
        font-weight: bold;
    }
    .contact1 a:hover{
        color: blueviolet;
    }
    .contact2{
        width: 100%;
        /* height: 100vh; */
        display: flex;
        background-color: #f3f3f3;
    }
    .partie1{
        width: 50%;
        height:  650px;
        margin-left: 100px;
        /* margin: 30px; */
    }
    .partie2{
        width: 50%;
        height:  650px;
        margin-right: 100px;
    }
    .part2{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .part1{
        width: 300px;
        height: 250px;
        outline:.1rem solid rgba(146, 56, 202, 0.929);
        outline-offset: -1rem;
        text-align: center;
        margin-top: 50px;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #fff;
    }
    .part1 i,.part3 i{
        /* border:1px solid blue; */
        padding: 30px;
        border-radius: 50%;
        background-color: rgb(244, 244, 244);
        color: blueviolet;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .part1 h3,.part3 h3{
        color: black;
        font-weight: bold;
    }
    .part3{
        width: 300px;
        height: 250px;
        outline:.1rem solid rgba(146, 56, 202, 0.929);
        outline-offset: -1rem;
        text-align: center;
        margin-top: 50px;
        margin-left: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #fff;
    }
    .part3:hover,.part1:hover{
        outline:.2rem solid blueviolet;
        outline-offset: 0rem;
    }
    
    form{
        height: 550px;
        margin: 50px auto;
        text-align: center;

    }
    .formes input{
        width: 450px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .forme input{
        width: 920px;
        padding: 10px;
        margin: 10px; 
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .forme textarea{
        width: 920px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px; 
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .botton button{
        width: 920px;
        margin: 10px;
        background-color: blueviolet;
        border: none;
        font-size: 30px;
        color: #fff;
        border-radius: 10px;
    }
    .botton button:hover{
        border: 3px dashed rgb(189, 145, 231);
        background-color: #fff;
        color: rgb(189, 145, 231);
    }
    .footer{
        margin-top: 20px;
        width: 100%;
        height: 300px;
        background-color: black;
    }
    @media (max-width:728px) {
        .contact2{
            display: flex;
            flex-direction: column;
            height: 100vh;
           
        }
        .partie1{
            width: 95%;
            height: 900px;
            margin: 15px;
            display: flex;
            flex-direction: column;
        }
        .part2{
            display: flex;
            flex-direction: column; 
        }
        .part1,.part3{
            width: 90%;
        }
        .part3{
            margin-left: -1px;
        }
        .partie2{
            width: 95%;
            height: 600px;
            margin: 15px;
        }
        
    }
</style>