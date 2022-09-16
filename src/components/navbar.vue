<template>
  <div>
        <div class="contener">
            <div class="logo">
                <p><span>I</span>mmo</p>
            </div>
            <nav>
                <ul class="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/details">Details</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div class="sign">
                        
                <a href="/login"><i class="far fa-user"></i></a>
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
export default {
    name:'navbarComponent',
    setup(){
            window.addEventListener("load", ()=>{
                const scrolle = document.querySelector('.contener');
                window.addEventListener('scroll', () => {
                    console.log("azerty");
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
                    console.log('ertyuj');
                    burger.classList.toggle("burger-active")
                    Navmenu.classList.toggle("nav-active")
              })
            })
        }
}
</script>

<style scoped>


.contener{
        position: fixed;
        height: 89px;
        width: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(1, 5, 9, 0.35) 0px -2px 6px 0px inset;
        /* border: 3px solid blue; */
        /* background-color: black; */
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
    /* border: 2mm ridge white; */
    color: #fff;
    margin: -15px 0px;
    /* background-color: blueviolet; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
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
    padding: 10px;
    background-color: blueviolet;
    border-bottom-left-radius: white;
    border-radius: 10px;
}
.sign{
    margin-top: 5px; 
    font-size: 40px;
}
.sign i{
    color: blueviolet; 
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




</style>