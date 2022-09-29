<template>
    <div>
        <div class="espace" v-if="modalite" @click.self="modale">
            <div class="modalite">
                <form action="">
                    <div class="formes">
                        <select name="" id="" v-model="cate">
                            <option value="A louer">A louer</option>
                            <option value="A vendre">A vendre</option>
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
                        <button @click.prevent="adminstrateur">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {homeColRef,storage} from '../firebase'
import {addDoc} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytes } from "firebase/storage";
export default {
    name:"modalComponent",
    props:["modalite","modale"],
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

    methods:{
     
        adminstrateur(){
            let element={
                cate:this.cate,
                nom:this.nom,
                prix:this.prix,
                chambre:this.chambre,
                pays:this.pays,
                bain:this.bain,
                ville:this.ville,
                adresse:this.adresse,
                superficie:this.superficie,
                message:this.message,
                images:this.image,
                type:this.type
               
            }

            console.log('element',element);
            addDoc(homeColRef,element).then((adm)=>{
                console.log("res",adm);
                this.$router.go()
            })
            .catch((error)=>{
                console.log("rdsxfxdf",error);
                console.log("vous avez mal renseignez vos données");
            })
        },


        async uploadImage(e){
           let touslesimages =[];
           Object.values(e.target.files).forEach((elem)=>{
            console.log("images",elem.name);
            const file = elem
            const metadata ={
                contentType:"image/jpeg"
            }
            const storageRef = ref(storage, "mesImages/" + file.name)
            touslesimages.push(uploadBytes(storageRef, file , metadata)
            .then(uploadResult =>{
                return getDownloadURL(uploadResult.ref)
            })
            )
           })
           const timages = await Promise.all(touslesimages)
           console.log(timages);
           this.image =timages
           console.log("azertyuiolkjhgfds",this.image);

        },

    },
        
   
    // async mounted(){
    //         const querySnapshot = await getDocs(homeColRef);
    //         console.log("lllllll",querySnapshot);
    //         let liste =[]
    //             querySnapshot.forEach((doc) => {
    //                 let listedata = doc.data()
    //                 listedata.id = doc.id;
    //                 liste.push(listedata);
    //             console.log(doc.id, " => ", doc.data());
    //         }) 
    //         this.liste = liste 
    // }

}
</script>

<style scoped>


.espace{
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
.modalite{
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