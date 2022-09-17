<template>
    <div>
        <div class="espace" @click="espace"></div>
         <div class="admin">
            <div class="admin1">

            </div>
            <div class="admin2">
                <div class="admin-haut"></div>
                <div class="clique">
                    <button @click="modale">Ajouter une maison</button>
                </div>
                <div class="modalite">
                    <form action="">
                        <div class="formes">
                            <select name="" id="" v-model="cate">
                                <option value="For Rent">For Rent</option>
                                <option value="For Sale">For Sale</option>
                            </select>
                            <input type="file" @change="uploadImage">
                            <input type="text" placeholder="Nom" v-model="nom">
                            <input type="number" placeholder="Price" v-model="prix">
                            <div class="forme">
                                <input type="number" placeholder="Bed" v-model="chambre">
                                <input type="number" placeholder="Bath" v-model="bain">
                                <input type="text" placeholder="SF" v-model="sf">
                            </div>
                        </div>
                        <div class="forme">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description" v-model="message"></textarea>
                        </div>
                        <div class="botton">
                            <button @click.prevent="adminstrateur">Envoyer</button>
                        </div>
                    </form>

                </div>
                <h1>LISTE DES MAISONS POSTÉ</h1>
                <table class="table">
                    
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Cate</th>
                            <th scope="col">Description</th>
                            <th scope="col">Bed</th>
                            <th scope="col">Bath</th>
                            <th scope="col">Sf</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="doc in Immo" :key="doc.id">
                            <th scope="row">1</th>
                            <td>{{doc.prix}}</td>
                            <td>{{doc.nom}}</td>
                            <td>for rent </td>
                            <td>ddgdfgfgfdgfgdfdgfdggd</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5666666</td>
                            <td rowspan="2" style="color:red">Modifier</td>
                        </tr>
                    </tbody>
                </table>         
            </div>

        </div>
    </div>
</template>

<script>

import {homeColRef} from '../firebase' 
import {addDoc,getDocs, doc} from "firebase/firestore"

export default {
    name:"admin",
    data(){
        return{
            Immo:[],
            cate:'',
            nom:'',
            prix:'',
            chambre:'',
            bain:'',
            sf:'',
            message:'',
        }
    },
    methods:{
        modale(){


            let modale =document.querySelector('.modalite')
            let espace =document.querySelector('.espace')
            espace.style.display="block";
            modale.style.display="block";
        },
        espace(){
            let espace =document.querySelector('.espace')
            let modale =document.querySelector('.modalite')
            espace.style.display="none";
            modale.style.display="none";
        },
        adminstrateur(){
            let element={
                cate:this.cate,
                nom:this.nom,
                prix:this.prix,
                chambre:this.chambre,
                bain:this.bain,
                sf:this.sf,
                message:this.message
               
            }
            console.log('element',element);
            addDoc(homeColRef,element).then((adm)=>{
                console.log("res",adm);
                this.$router.replace('/admin')
            })
            .catch((error)=>{
                console.log("rdsxfxdf",error);
                console.log("vous avez mal renseignez vos données");
            })
        },

        
    }


}
</script>

<style scoped>
    .espace{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        background-color: black;
        opacity: 0.5;
        display: none;
    }
    .admin{
    width: 100%;
    height: 100vh;
    display: flex;
  
    }
    .admin1{
        width: 15%;
        background-color: blueviolet;

    }
    .admin2{
        position: relative;
        width: 85%;
        background: #fff;
    }
    .admin-haut{
        width: 85vw;
        background-color: black;
        height: 120px;  
    }
    button{
        margin: 20px;
        padding: 10px;
        background-color: blueviolet;
        border: none;
        border-radius: 10px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    button:hover{
        color: blueviolet;
        border: 2px solid blueviolet;
        background-color: #fff;
        transition: 0.5s all;
    }
    .modalite{
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        background-color: #fff;
        height: 720px;
        width: 600px;
        border-radius: 10px;
        z-index: 10; 
      
    }
    form{
        height: 550px;
        margin: 5px auto;
        text-align: center;

    }
    .formes select{
        width: 450px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: grey;
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
    .forme{
        display: flex;
        align-items: center;
    }
    .forme input{
        width: 150px;
        padding: 10px;
        margin: 10px 10px 10px 20px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
  
    .forme textarea{
        width: 580px;
        height: 200px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px; 
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .botton button{
        width: 450px;
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
    h1{
        text-align: center;
        padding: 20px;
    }
</style>