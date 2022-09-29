<template>
    <div class="fond" v-if="mod" @click.self="modification">
        <div class="modifier">
        <div class="mod">
            <form >
                    <div class="formes">
                        <select name="" id="" v-model="user.cate">
                            <option value="A louer">A louer</option>
                            <option value="A vendre">A vendre</option>
                        </select>
                        <input type="file" @change="uploadImage" multiple>
                        <input type="text" ref="form"   placeholder="Nom  du bien" v-model="user.nom">
                        <input type="number" placeholder="Price" v-model="user.prix">
                        <input type="text" placeholder="Type de bien" v-model="user.type">
                        <input type="text" placeholder="Pays" v-model="user.pays">
                        <input type="text" placeholder="Ville" v-model="user.ville">
                        <input type="text" placeholder="Adresse" v-model="user.adresse">
                        <div class="forme">
                            <input type="number" placeholder="Bed" v-model="user.chambre">
                            <input type="number" placeholder="Bath" v-model="user.bain">
                            <input type="number" placeholder="Superficie" v-model="user.superficie">
                        </div>
                    </div>
                    <div class="forme">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description" v-model="user.message"></textarea>
                    </div>
                    <div class="botton">
                        <button @click.prevent="modifie">Envoyer</button>
                    </div>
                    {{id}}
            </form>
        </div>
        
    </div>
    </div>
</template>

<script>

import {homeColRef,storage} from '../firebase' 
import {addDoc, getDoc,doc,setDoc,updateDoc, deleteDoc } from "firebase/firestore"
import {ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
export default {
    name:"modifieComponent",
    props:['id',"mod","modification","user"],
    data(){
        return{
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
        }
    },
    methods: {
        async modifie(){
            let element={
                cate:this.user.cate,
                nom:this.user.nom,
                prix:this.user.prix,
                chambre:this.user.chambre,
                pays:this.user.pays,
                bain:this.user.bain,
                ville:this.user.ville,
                adresse:this.user.adresse,
                superficie:this.user.superficie,
                message:this.user.message,
                images:this.image,
                type:this.user.type
               
            }
            console.log('element',element);
            // console.log("dfdfdfdfdf",this.user.nom );
            // console.log(this.user.prix );
            // console.log(this.user.cate );
            // console.log(this.user.pays );
            // console.log(this.user.ville );
            // console.log(this.user.images );
     
      
            // const docRef = doc(homeColRef,this.id);
            // console.log("redddddddd",docRef);
            // const docSnap = await getDoc(docRef);
            // console.log("ffff",docSnap);
            // let datasupp = doc(homeColRef,this.id)
            // console.log("iiiii",this.id);
            // console.log("azerty",datasupp);
            // await setDoc(datasupp,this.id);


            if(element.images == ""){
                const docRef = doc(homeColRef,this.id);
                const docSnap = await getDoc(docRef);
                let modimages = docSnap.data().images
                element.images = modimages
                console.log("ffff",element);
                console.log("ancien",docRef);
                await setDoc(docRef,element)
                this.$router.go()
                // console.log("images vide");
            }
            else{
                const ancien = doc(homeColRef, this.id);
                console.log("ancien",ancien);
                await setDoc(ancien,element)
                this.$router.go()
            }  
        },
        async uploadImage(e){
            let touslesimages =[];
            Object.values(e.target.files).forEach((elem)=>{
             console.log("images",elem.name);
             const file = elem
             const metadata ={
                 contentType:"image/jpeg"
             }
             const storageRef = ref(storage,"images/" + file.name)
             touslesimages.push(uploadBytes(storageRef, file , metadata)
             .then(uploadResult =>{
                 return getDownloadURL(uploadResult.ref)
             })
             )
            })
            const images = await Promise.all(touslesimages)
            this.image =images
            console.log("azertyuiolkjhgfds",this.image);
        },




    },
  async  mounted() {
            // const docRef = await doc(homeColRef,this.id);
            // console.log("rerrrrr",docRef);
            // const docSnap = await getDoc(docRef);
            // this.user = docSnap.data()
            // console.log("ffffrrrr",docSnap.data());
            // console.log("dfdfdfdfdf",this.user.nom );
        
            // console.log("sdsdd",user);
            // this.nom = this.user.nom 
    
          
    },


}
</script>

<style scoped>

.fond{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 102vh;
        z-index: 11;
        background-color: rgba(0,0,0,.8);
        opacity: 1;
        /* display: none; */
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
.mod{
        /* display: none; */
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        background-color: #fff;
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