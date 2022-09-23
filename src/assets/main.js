/* uploader une images en firebase */


// uploadImage(e){
        //     console.log("eeeeee",e);
        //     let file = e.target.files[0]
        //     console.log("images",file.name);

        //     const storageRef = ref(storage, file.name);
        //     const uploadTask = uploadBytesResumable(storageRef, file);
        //     uploadTask.on('state_changed', 
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //         case 'paused':
        //             console.log('Upload is paused');
        //             break;
        //         case 'running':
        //             console.log('Upload is running');
        //             break;
        //         }
        //         }, 
        //         (error) => {
        //             console.log("erereree",error);
        //         }, 
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //             this.image =downloadURL
        //             });
        //         }
        //         );   
// }


/* fin uploader une images en firebase */



/* plusieurs images */


// async uploadImage(e){
//     let touslesimages =[];
//     Object.values(e.target.files).forEach((elem)=>{
//      console.log("images",elem.name);
//      const file = elem
//      const metadata ={
//          contentType:"image/jpeg"
//      }
//      const storageRef = ref(storage,"mesImages/" + file.name)
//      touslesimages.push(uploadBytes(storageRef, file , metadata)
//      .then(uploadResult =>{
//          return getDownloadURL(uploadResult.ref)
//      })
//      )
//     })
//     const images = await Promise.all(touslesimages)
//     this.image =images
//     console.log("azertyuiolkjhgfds",this.image);

// }

/* fin plusieurs images */
