<template>

    <div class="fond" v-if="modde" @click.self="modificationprofile">
        <div class="modifier">
        <div class="modde">
            <form >
                    <div class="formes">
                      
                        <input type="file" @change="uploadImage">
                        <input type="text" placeholder="Nom" v-model="user.nom">
                        <input type="text" placeholder="Prenom" v-model="user.prenom">
                        <input type="email" placeholder="email" v-model="user.email">
                        <input type="number" placeholder="Numero" v-model="user.numero">
                    </div>
                    <div class="botton">
                        <button @click.prevent="modifieprofile">Envoyer</button>
                    </div>
            </form>
        </div>
        
    </div>
    </div>
</template>

<script>
import {homeColRefs,storage} from '../firebase' 
import {addDoc, getDoc,doc,setDoc,updateDoc, deleteDoc } from "firebase/firestore"
import {ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

export default {
    name:"modalmodiprofileComponent",
    props:['modde','modificationprofile','user','idd'],
    data(){
        return{
                nom:'',
                prenom:'',
                email:'',
                numero:'',
                image:''
        }
    },
    methods: {
        async modifieprofile(){
            let element={
                nom:this.user.nom,
                prenom:this.user.prenom,
                email:this.user.email,
                numero:this.user.numero, 
                images:this.image 
               
            }
         

           console.log(element);
            const docRef = doc(homeColRefs,this.idd);
            console.log("ancien",docRef);
            await setDoc(docRef,element).then(rs=>{
                // this.$router.go()
            })
            .catch((err)=>{
                console.log('ereror',err);
            })


        if(element.images == "") {
            console.log('besion image');
                const docRef = doc(homeColRefs,this.idd);
                console.log("c'est",docRef);
                const docSnap = await getDoc(docRef);
                let modipromages = docSnap.data().images
                console.log('modipromages',docSnap.data());
                element.images = modipromages
                console.log("feeeee",element); 
                await setDoc(docRef,element)
                // this.$router.go()
                // console.log("images vide");
          
        } 
        else {
            const ancien = doc(homeColRefs, this.idd);
            console.log("pas nou",ancien);
            await setDoc(ancien,element)
            // this.$router.go()
        }

        },

      


        uploadImage(e){
             console.log("eeeeee",e);
             let file = e.target.files[0]
             console.log("images",file.name);

             const storageRef = ref(storage, file.name);
             const uploadTask = uploadBytesResumable(storageRef, file);
             uploadTask.on('state_changed', 
             (snapshot) => {
                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 console.log('Upload is ' + progress + '% done');
                 switch (snapshot.state) {
                 case 'paused':
                     console.log('Upload is paused');
                     break;
                 case 'running':
                     console.log('Upload is running');
                     break;
                 }
                 }, 
                 (error) => {
                     console.log("erereree",error);
                 }, 
                 () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        this.image =downloadURL
                        console.log('File available at', this.image);
                    });
                 }
                 );   
        }
          


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
.modde{
        /* display: none; */
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        background-color: #fff;
        height: 480px;
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




