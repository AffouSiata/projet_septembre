<template>
    <div>
        <!--  -->
        <div class="sidebar">
            <div class="logo-details">
            <i class='bx bxl-c-plus-plus'></i>
            <span class="logo_name">Immo Admin</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#" class="active">
                        <i class='bx bx-grid-alt' ></i>
                        <span class="links_name">Menu Admin</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-box' ></i>
                        <span class="links_name" @click="mesliste ='liste2Component'">Liste Des Biens</span>
                    </a>
                </li>
                    <li>
                    <a href="#content-home">
                        <i class='bx bx-list-ul' ></i>
                        <span class="links_name"  @click="mesliste ='liste1Component'"> Liste Client</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-cog' ></i>
                        <span class="links_name">Parametère</span>
                    </a>
                </li>
                    <li class="log_out">
                    <a href="#">
                        <i class='bx bx-log-out'></i>
                        <span class="links_name">Se déconnecter</span>
                    </a>
                </li>
            </ul>
        </div>
        <section class="home-section">
            <nav>
                <div class="sidebar-button" @click="sidebarre">
                    <i class='bx bx-menu sidebarBtn'></i>
                    <!-- <span class="dashboard">Dashboard</span> -->
                </div>
                <div class="search-box">
                    <input type="text" placeholder="Search...">
                    <i class='bx bx-search' ></i>
                </div>
                <div class="profile-details">
                    <!--<img src="images/profile.jpg" alt="">-->
                    <span class="admin_name">Affou Siata</span>
                    <i class='bx bx-chevron-down' ></i>
                </div>
            </nav>
            <div class="content-home">
                <liste1Component v-if="mesliste === 'liste1Component'"/>
                <liste2Component v-if="mesliste === 'liste2Component'"/>
            </div>

            
         </section>
         
    </div>
	
</template>

<script>
import liste1Component from '../components/liste1.vue'
import liste2Component from '../components/liste2.vue'



    export default {
        name:" adminComponent",
        components:{
            liste1Component,
            liste2Component
        },
        data(){
            return{
                mesliste:''
            }
        },
        methods:{
            sidebarre(){
                let sidebar = document.querySelector(".sidebar");
                let sidebarBtn = document.querySelector(".sidebarBtn");
                sidebar.classList.toggle("active");
                if(sidebar.classList.contains("active")){
                sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
                }else
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }   ,



        }
        

    }

</script>

<style scoped>



    .sidebar{
  position: fixed;
  height: 100vh;
  width: 240px;
  background: blueviolet;
  transition: all 0.5s ease;
}
.sidebar.active{
  width: 60px;
}
.sidebar .logo-details{
  height: 80px;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center
}
.sidebar .logo-details .logo_name{
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.sidebar .nav-links{
  margin-top: 10px;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active{
  background: rgb(195, 141, 244);
}
.sidebar .nav-links li a:hover{
  background: rgb(195, 141, 244);
}
.sidebar .nav-links li i{
  min-width: 60px;
  text-align: center;
  font-size: 24px;
  color: #ffff;
}
.sidebar .nav-links li a .links_name{
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
}
.sidebar .nav-links .log_out{
  position: absolute;
  
  width: 100%;
}


.home-section{
    position: relative;
    background: #f5f5f5;
    height: 100vh;
    width: calc(100% - 240px);
    left: 240px;
    transition: all 0.5s ease;
    overflow: auto;
}
.sidebar.active ~ .home-section{
    width: calc(100% - 60px);
    left: 60px;
}
.home-section nav{
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    width: calc(100% - 240px);
    left: 240px;
    z-index: 100;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
  
}
.sidebar.active ~ .home-section nav{
    left: 60px;
    width: calc(100% - 60px);
}
.home-section nav .sidebar-button{
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
}
  nav .sidebar-button i{
    font-size: 35px;
    margin-right: 10px;
}
  .home-section nav .search-box{
    position: relative;
    height: 50px;
    max-width: 550px;
    width: 100%;
    margin: 0 20px;
}
nav .search-box input{
    height: 100%;
    width: 100%;
    outline: none;
    background: #F5F6FA;
    border: 2px solid #EFEEF1;
    border-radius: 6px;
    font-size: 18px;
    padding: 0 15px;
}
nav .search-box .bx-search{
    position: absolute;
    height: 40px;
    width: 40px;
    background: blueviolet;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 4px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    transition: all 0.4 ease;
}
.home-section nav .profile-details{
    display: flex;
    align-items: center;
    background: #F5F6FA;
    border: 2px solid #EFEEF1;
    border-radius: 6px;
    height: 50px;
    min-width: 190px;
    padding: 0 15px 0 2px;
}
nav .profile-details img{
    height: 40px;
    width: 40px;
    border-radius: 6px;
    object-fit: cover;
}
nav .profile-details .admin_name{
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin: 0 10px;
    white-space: nowrap;
}
nav .profile-details i{
    font-size: 25px;
    color: #333;
}
.home-section .content-home{
  position: relative;
  padding-top: 104px;
}
@media (max-width: 1240px) {
    .sidebar{
      width: 60px;
    }
    .sidebar.active{
      width: 220px;
    }
    .home-section{
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section{
      /* width: calc(100% - 220px); */
      overflow: hidden;
      left: 220px;
    }
    .home-section nav{
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section nav{
      width: calc(100% - 220px);
      left: 220px;
    }
}
@media (max-width: 700px) {
    nav .sidebar-button .dashboard,
    nav .profile-details .admin_name,
    nav .profile-details i{
      display: none;
    }
    .home-section nav .profile-details{
      height: 50px;
      min-width: 40px;
    }
    .home-content .sales-boxes .sales-details{
      width: 560px;
    }
}
@media (max-width: 550px) {
    .sidebar.active ~ .home-section nav .profile-details{
      display: none;
    }
}
@media (max-width: 400px) {
    .sidebar{
      width: 0;
    }
    .sidebar.active{
      width: 60px;
    }
    .home-section{
      width: 100%;
      left: 0;
    }
    .sidebar.active ~ .home-section{
      left: 60px;
      width: calc(100% - 60px);
    }
    .home-section nav{
      width: 100%;
      left: 0;
    }
    .sidebar.active ~ .home-section nav{
      left: 60px;
      width: calc(100% - 60px);
    }
}

</style>