<template>
  <div>
        <div class="contener">
            <div class="logo">
                    <router-link to="/"><p><span>I</span>mmo</p></router-link>
            </div>
            <nav>
                <ul class="nav-menu">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <!-- <li><router-link to="/services">Services</router-link></li> -->
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
            <div class="sign">
                <!-- <input type="checkbox" id="switch-mode" hidden>
			    <label for="switch-mode" class="switch-mode"></label>      -->
               
                <div class="profile" v-if="connecte">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="images"  alt="">
                    <ul class="profile-link">
                      
                        <li><router-link to="/profile" @click="profiles(doc.id)"><i class='bx bxs-user-circle icon far' ></i> Profile</router-link></li>
                        <li><router-link to="" @click="deconnexion"><i class='bx bxs-log-out-circle far'></i>déconnecter</router-link></li>
                    </ul>
			    </div>
                <router-link to="/login" v-else><i class="far fa-user"></i></router-link>
            </div>
            <div class="burger">
                <div class="line1"></div>
                <div class="line1"></div>
                <div class="line1"></div>
            </div>
        </div>
  </div>
</template>

<script>
import {auth} from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    name:'navbarComponent',
    data(){
        return{
            connecte:false
        }
    },
    methods: {
        profiles(id){
            console.log("monnnid",id);
          this.$router.replace(`/profile/${id}`)

        },
        async deconnexion(){
            await auth.signOut()
                .then(() => {
                    this.$router.replace('/login');    
                })
                .catch((err) =>{
                    console.log(err);
                });
        },

    },
    mounted(){
        const authhe = getAuth();
            onAuthStateChanged(authhe, (user) => {
                // console.log("dcfdfd",user);
            if (user) {
                const uid = user.uid;
                // console.log("sss",uid );
                this.connecte= true
            } else {
              
            }
        });
    },
    setup(){
            window.addEventListener("load", ()=>{
                const scrolle = document.querySelector('.contener');
                window.addEventListener('scroll', () => {
                    if (window.scrollY >= 50) {
                        scrolle.classList.add('contener_active');
                    } else {
                        scrolle.classList.remove('contener_active');
                    }
                })
            })

            window.addEventListener("load", ()=>{
                const burger = document.querySelector('.burger')
                const Navmenu = document.querySelector('.nav-menu')
                burger.addEventListener('click',() =>{
                    burger.classList.toggle("burger-active")
                    Navmenu.classList.toggle("nav-active")
              })
            })
           

            // const switchMode = document.getElementById('switch-mode');
            // if(switchMode){
            //     switchMode.addEventListener('change', function () {
            //     if(this.checked) {
            //         document.body.classList.add('dark');
            //     } else {
            //         document.body.classList.remove('dark');
            //     }
            // })
            // }
          

                window.addEventListener('click', function (e) {
                    const profiles = document.querySelector('.profile');
                    const imgProfile = profiles.querySelector('img');
                    const dropdownProfile = profiles.querySelector('.profile-link');
                        if(imgProfile){

                            imgProfile.addEventListener('click', function () {
                                dropdownProfile.classList.toggle('show');
                                })
                        }
                    if(e.target !== imgProfile) {
                        if(e.target !== dropdownProfile) {
                            if(dropdownProfile.classList.contains('show')) {
                                dropdownProfile.classList.remove('show');
                            }
                        }
                
                    }
                })



            
        },
        
        
      
}
</script>

<style scoped>
/* .switch-mode {
	display: block;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	background: #F1F0F6;
	cursor: pointer;
	position: relative;
}
.switch-mode::before {
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	bottom: 2px;
	width: calc(25px - 4px);
	background: #1775F1;
	border-radius: 50%;
	transition: all .3s ease;
}
#switch-mode:checked + .switch-mode::before {
	left: calc(100% - (25px - 4px) - 2px);
} */


.contener{
        position: fixed;
        height: 89px;
        width: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(1, 5, 9, 0.35) 0px -2px 6px 0px inset;
        /* border: 3px solid blue; */
        background-color: #000;
        display: flex;
        justify-content: space-around;
        z-index: 1;
        transition: 200ms ease-in-out background-color,
                200ms ease-in-out box-shadow;
         
}
.contener_active{
    background-color: black;
    transition: 0.5s ease-in;
}

.logo{
    font-size: 40px;
    color: #fff;
    margin: -15px 0px;
    border-radius: 10px;

}
.logo span{
    color:blueviolet;
    text-align: center;
    font-weight: bold;
    font-size: 55px;
}
nav ul li{
    
    display: inline-block;
    margin-top: 20px;
    margin-right: 40px;
    font-size: 20px;
    border-bottom:3px solid transparent;
    transition: 0.4s ;
    
}
nav ul li a{
    padding: 10px;
    color: #fff;
    text-decoration: none;
}
nav ul li a.active{
    padding: 10px;
    background-color: blueviolet;
    border-bottom-left-radius: white;
    border-radius: 10px; 
}
nav ul li a:hover{
    background-color: blueviolet;
    border-bottom-left-radius: white;
    border-radius: 10px;
}
.sign{
    margin-top: 5px; 
    font-size: 40px;
    display: flex;
   
}
.sign i{
    color: blueviolet; 
}
.profile {
	position: relative;
    margin-left: 50px;
}
.profile img {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
}
.profile .profile-link {
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	background: black;
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
	width: 180px;
	opacity: 0;
	pointer-events: none;
	transition: all .3s ease;
}
.profile .profile-link .far{
    font-size: 30px;
}
.profile .profile-link.show {
	opacity: 1;
	pointer-events: visible;
	top: 100%;
}
.profile .profile-link a {
    padding: 3px 16px;
    display: flex;
    grid-gap: 10px;
    font-size: 20px;
    color: #fff;
    align-items: center;
    transition: all .3s ease;
}
.profile .profile-link a:hover {
	background: #fcfcfd;
    color: #000;
}

.burger{
    margin-top: 30px;
    cursor: pointer;
    display: none;
}
.burger div{
    width: 25px;
    height: 5px;
    margin: 5px;
    background-color: #fff;

}
@media (max-width:1900px){
    nav{
        margin-top: -10px;
    } 

}
@media (max-width:728px) {
    .burger{
        margin-top: 18px;
        display: block;
    } 
    .burger.burger-active .line1:nth-child(2){
        opacity: 0;
    }
    .burger.burger-active .line1:nth-child(1){
        transform: translateY(9px) rotate(45deg);
    }
    .burger.burger-active .line1:nth-child(3){
        transform: translateY(-9px) rotate(-45deg);
    }
    .nav-menu{
        position: fixed;
        left: 0px;
        top:-100% ;
        gap: 6;
        display: flex;
        flex-direction: column;
        background-color: rgba(161, 159, 159, 0.6);
        width: 100%;
        text-align: center;
        transition:  0.3s;
        margin-top: 90px;


    }
    li{
        margin: 16px 0;
    }
    .nav-menu.nav-menu.nav-active{
        top: 0; 
    }
     
    
}
@media (max-width:375px){
    .contener{
        width: 100%;
    }
    
}




</style>