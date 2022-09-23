<template>
    <div class="modifie">
        <div class="modalite">
            <form action="">
                    <div class="formes">
                        <select name="" id="" v-model="cate">
                            <option value="For Rent">For Rent</option>
                            <option value="For Sale">For Sale</option>
                        </select>
                        <input type="file" @change="uploadImage" multiple>
                        <input type="text" placeholder="Nom  du bien" v-model="nom">
                        <input type="number" placeholder="Price" v-model="prix">
                        <input type="text" placeholder="Type de bien" v-model="type">
                        <input type="text" placeholder="Pays" v-model="pays">
                        <input type="text" placeholder="Ville" v-model="ville">
                        <input type="text" placeholder="Adresse" v-model="adresse">
                        <div class="forme">
                            <input type="number" placeholder="Bed" v-model="chambre">
                            <input type="number" placeholder="Bath" v-model="bain">
                            <input type="number" placeholder="Superficie" v-model="superficie">
                        </div>
                    </div>
                    <div class="forme">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description" v-model="message"></textarea>
                    </div>
                    <div class="botton">
                        <button @click.prevent="modifie">Envoyer</button>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
import modalComponent from '../components/modal.vue'
import {homeColRef,storage} from '../firebase' 
import {addDoc, getDocs,doc, deleteDoc} from "firebase/firestore"
import {ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
export default {
    name:"modifie",
    props:['id'],
    data(){
        return{
            listeInfo: {
                cate:'',
                nom:'',
                prix:'',
                chambre:'',
                pays:'',
                ville:'',
                adresse:'',
                bain:'',
                superficie:'',
                message:'',
                image:'',
                type:'',
            },
        }
    },
    methods: {
        async modifie(){
            let datasupp = doc(homeColRef,docId)
            await setDoc(datasupp, this.listeInfo);
            alert(
                `The city with ID of ${this.docId} has been updated successfully!`
            );
            this.$router.push("/admin");
        }
    },

}
</script>

<style scoped>
    .modifie{
        border: 1px solid blue;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.modalite{
        padding: 20px;
        background-color: rgb(217, 211, 211);
        height: 920px;
        width: 600px;
        border-radius: 10px
      
    }
    form{
        height: 650px;
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
        height: 150px;
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

</style>