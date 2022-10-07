<template>
    <div class="enregistre">
        <div class="content">
            <div class="images">
                <img src="../assets/img1.jpg" alt="">
            </div>
            <div class="formulaire">
                <div class="entete">
                    <i class="far fa-user"></i>
                </div>
                <form action="">
                    <h2>Register</h2>
                    <span class="error"></span>
                    <div class="forme-input">
                        <i class="fas fa-user"></i>
                        <input type="text" name="nom" placeholder="nom" v-model="nom">
                    </div>
                    <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small><br>
                    <div class="forme-input" >
                        <i class="fas fa-user"></i>
                        <input type="text" name="prenom" placeholder="prenom" v-model="prenom">
                    </div>
                    <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}}</small><br>
                    <div class="forme-input">
                        <i class="fas fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" v-model="email">
                    </div>
                    <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small><br>
                    <div class="forme-input">
                        <i class="fa-solid fa-phone"></i>
                        <input type="number" name="number" placeholder="numero" v-model="numero">
                    </div>
                    <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}}</small><br>
                    <div class="forme-input">
                        <i class="fas fa-unlock"></i>
                        <input type="password" name="password" class="mot" placeholder="Password" v-model="password">
                        <div class="password-icon">
                            <i class="fas fa-eye masque" @click="eyye"></i>
                            <i class="fas fa-eye-slash masque" @click="eyyeoff"></i>
                        </div>
                    </div>
                    <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small><br>
                    <div class="forme-btn">
                        <button @click.prevent="register">Envoyer</button>
                    </div>
                </form>
        </div>
    </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {champvaleur,champemail,mdp_plex,longminNom,longmaxNom,longmaxprenom,longminprenom,longminnumero} from "../validate/validatore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,homeColRefs} from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 

export default {
    name:'register',
    data(){
        return{
            nom:"",
            prenom:"",
            email:"",
            numero:"",
            password:"",
            v$: useVuelidate()
        }
    },
    validations: {
        nom: { champvaleur, longmin: longminNom(4), longmax: longmaxNom(10)
        },
        prenom: { champvaleur,longPmin: longminprenom(6), longPmax: longmaxprenom(20)
        },
        email: { champvaleur, champemail,
        },
        numero: { champvaleur,longnum: longminnumero(10)
        },
        password: { champvaleur,mdp_plex,
        }
    },
    methods:{
      register(){
            this.v$.$touch();
            if (this.v$.$errors.length == 0) {
                // console.log("c'est bon tu peux pas passer a la suite");
                let inscrire ={
                    nom:this.nom,
                    prenom:this.prenom,
                    numero:this.numero,
                    email:this.email,
                    password:this.password
                }
                console.log("logger",inscrire);
                function MesErreur(erreur){
                    document.querySelector(".error").innerHTML = erreur;
                        if (erreur.code === 'auth/weak-password') {
                            MesErreur("Le mot de passe est trop faible");
                            return false;
                        }
                        if (erreur.code === 'auth/email-already-in-use') {
                            MesErreur("l'email existe déja.");
                            return false;
                        } 
                          

                }

                createUserWithEmailAndPassword(auth, this.email.trim(), this.password)
                    .then((user) => {
                        
                        console.log("util",user);
                        console.log("zzzzz",user.user.uid);
                        setDoc(doc(homeColRefs,user.user.uid),{
                            nom: this.nom,
                            prenom: this.prenom,
                            numero:this.numero,
                            email:this.email,
                         images:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

                        })
                        .then(()=>{
                            console.log("user enregistrer");
                        })
                    
                        this.$router.replace("/login");
                    })
                    .catch((error) => {
                       MesErreur(error)
                    });

            }

           

        },
        

        eyye(){
            const eyes = document.querySelector(".fa-eye");
            const eyeoffs = document.querySelector(".fa-eye-slash");
            const passwordFields = document.querySelector("input[type=password]");


            eyes.style.display = "none";
            eyeoffs.style.display = "block";
            passwordFields.type = "text";
        }, 
        eyyeoff(){
            const eyeoff = document.querySelector(".fa-eye-slash");
            const eye = document.querySelector(".fa-eye");
            const passwordField = document.querySelector(".mot");

            eyeoff.style.display = "none";
            eye.style.display = "block";
            passwordField.type = 'password';
        }
    }
}
</script>

<style scoped>
    .enregistre{
    width: 100vw;
    height: 100vh;
    background-color: rgb(189,144,231);
;
}
    .content{
    position: absolute;
    top: 20%;
    left: 23%;
    height: 600px;
    width: 1000px;
    display: flex;
    padding: 30px;
}
.images{
    width: 500px;
}
.images img{
    height: 540px;
    width: 470px;
    object-fit: cover;
}
.formulaire{
    width: 500px;
    background-color: #fff;
    /* box-shadow:0 0 10px; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    z-index: 10;    
}
.entete{
    width: 100%;
    height: 65px;
}
.entete i{
    border-radius: 50%;
    padding: 20px;
    font-size: 80px;
    background-color: black;
    margin-left: 180px;
    margin-top: -60px;
    color: #fff;
}

form h2{
    text-align: center;
    color: blueviolet;
    font-size: 35px;
}
.forme-input{
    position: relative;
    background-color: rgb(23, 21, 142);
    margin: 0px 30px 0px 0px;
    border-top-left-radius:10px ;
    border-bottom-right-radius:10px ;
}
.forme-input i{
    color: #fff;
    background-color: black;
    padding: 16px;
    border-top-left-radius:10px ;
}
.forme-input .masque{
    background: none;
}
.forme-input .fa-eye-slash{
    background: none;
}
.forme-input input{
    width: 300px;
  background-color: rgb(23, 21, 142);
    border: none;
    outline: none;
    padding: 8px;
    font-size: 20px;
    transition: all 0.2s;
    color: #fff;
}
.forme-input .password-icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    width: 10px;
    color: #f9f9f9;
    transition: all 0.2s;
}
.forme-input .password-icon:hover {
    cursor: pointer;
    color: black;
}
  
.forme-input .password-icon .fa-eye-slash {
    display: none;
}
.forme-btn{
    text-align: center;
    margin: 20px;
}
.forme-btn button{
    padding: 10px 40px;
    font-size: 24px;
    font-weight: bold;
    border-bottom-left-radius:30px ;
    border-top-right-radius:30px ;
    background-color: rgb(189, 145, 231);
    border: none;
    color: #fff;
}
.forme-btn button:hover{
    border: 3px dashed rgb(189, 145, 231);
    background-color: #fff;
    color: rgb(189, 145, 231);
}
small{
    color: red;
        
}
.error{
    color: red;
    font-weight: bold; 
    text-align: center;
}
@media (max-width:800px) {
    .images{
        display: none;
    }
    .content{
        left:13%
    }
}
</style>