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
                    <div class="forme-input">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Firstname" v-model="firstname">
                    </div>
                    <div class="forme-input" >
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Lastname" v-model="lastname">
                    </div>
                    <div class="forme-input">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="forme-input">
                        <i class="fas fa-unlock"></i>
                        <input type="password" placeholder="Password" v-model="password">
                        <div class="password-icon">
                            <i class="fas fa-eye masque" @click="eyye"></i>
                            <i class="fas fa-eye-slash masque" @click="eyyeoff"></i>
                        </div>
                    </div>
                    <div class="forme-btn">
                        <button @click="register">Envoyer</button>
                    </div>
                </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'register',
    dtat(){
        return{
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }
    },
    methods:{
        register(){
            

            let inscrire ={
                firstname:this.firstname,
                lastname:this.lastname,
                email:this.email,
                password:this.password
            }
            console.log("logger",inscrire);

        },
        

        eyye(){
            const eyes = document.querySelector(".fa-eye");
            const eyeoffs = document.querySelector(".fa-eye-slash");
            const passwordFields = document.querySelector("input[type=password]");
            console.log("zzzzz",eyes);

            eyes.style.display = "none";
            eyeoffs.style.display = "block";
            passwordFields.type = "text";
        }, 
        eyyeoff(){
            const eyeoffs = document.querySelector(".fa-eye-slash");
            const eyes = document.querySelector(".fa-eye");
            const passwordFields = document.querySelector("input[type=text]");
            console.log("offfff",eyeoffs);

            eyeoffs.style.display = "none";
            eyes.style.display = "block";
            passwordFields.type = 'password';
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
    height: 540px;
    width: 1000px;
    display: flex;
    padding: 30px;
}
.images{
    width: 500px;
}
.images img{
    height: 480px;
    width: 470px;
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
    margin: 30px;
    border-top-left-radius:10px ;
    border-bottom-right-radius:10px ;
}
.forme-input i{
    color: #fff;
    background-color: black;
    padding: 12px;
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
@media (max-width:800px) {
    .images{
        display: none;
    }
    .content{
        left:13%
    }
}
</style>