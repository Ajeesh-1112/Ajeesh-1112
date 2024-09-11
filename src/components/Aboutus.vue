<template>
    <div class="container">
        <div class="aboutus">
           
            <div class="aboutus-content">
                
                <h1>About <span>Us</span> : </h1>
            <p>Founded in 2025, Testie  was born out of the necessity to address [mention the problem or challenge that the application solves] . We noticed a gap in [industry or market] and decided to build a solution that would not only fill that gap but also push the boundaries of what’s possible.</p>
            </div>
            

        </div>

        <div class="mission">
            <div>
                <h5>Our Mission : </h5>
                <p>Our mission is to provide a seamless and intuitive platform that meets the evolving needs of our users.</p>
            </div>

            <div>
                <h5>Our Visson : </h5>
               <p> We aim to be a leader in [your industry], continuously innovating to create an outstanding user experience. We believe that technology should be an enabler, not a barrier, and our team is committed to making [Your Application Name] as user-friendly and efficient as possible.</p>
            </div>
           

        </div>
        <div class="ourteam">
            <h5>Our Team : </h5>
            <img src="@/assets/employee.webp" alt="">
           
           <p>Behind [Your Application Name] is a diverse group of passionate professionals. Our team brings together expertise in [mention relevant fields like software development, UX design, customer support, etc.], all working towards a common goal—your success.</p>
        </div>

        <div class="support-us">
            <div>
                <img src="@/assets/github.jpg" alt="">
                <img src="@/assets/insta.png" alt="">
                <img src="@/assets/github.jpg" alt="">
                <img src="@/assets/insta.png" alt="">
                <img src="@/assets/linkedin.webp" alt="">
            </div>
            <div class="nav-links">
                <router-link to="/home">Home</router-link>
                <router-link to="/home/dashboard">Dashboard</router-link>
                <router-link to="/home/test">Test</router-link>
            </div>
           
        </div>
        <div id="footer">
                <p>@copyrights.xxxxxxxxxxxxxxxxxxxx</p>
            </div>
    </div>
</template>

<script>
export default {
    name:"aboutUs",
}
</script>
<style scoped>
*
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
span
{
    color: blue;
    
}

a
{
    text-decoration: none;
    color: white;
}

.container{
 
    
    padding: 70px 0px 0px 0px;
    background-color: rgb(243, 242, 242);
}
img{
    height:400px;
    width:100%;
    border-radius: 40px 8px 0px 0px;
}
.aboutus 
{
    height:91vh;
    background: url("@/assets/aboutus.webp");
    background-repeat: no-repeat;
    background-size: cover;
   
   
}
.aboutus p
{
    text-indent: 100px;
    margin-top: 100px;
    line-height: 60px;
    font-size: 2em;

}
.aboutus-content
{
    color: rgb(237, 237, 237);
    background-color: rgb(0, 0, 0,.6);
    height:80vh;
    width:94.5%;
    padding:40px;
}
.mission
{
 
  margin: 50px;
  background-color: white;
  border-radius: 70px 4px 70px 4px;
  padding: 40px 40px;
  
}
.mission h5,
.ourteam h5
{
  
    color: blue;
    margin: 20px 0px;
    font-size: 1.4em;
}
.mission p,.ourteam p
{
   
    text-indent: 100px;
    font-size:1.3em;
    margin-bottom: 20px;
    line-height: 40px;
} 
.ourteam p
{
    /* width:86%; */
    background-color: white;
    padding:30px;
    margin:0px;
    border-radius: 0px 0px 40px 0px;
 
}
.ourteam
{
    margin:0px 50px 50px;
}
.support-us{
    padding: 50px 20px ;
    background-color: rgb(0, 0, 0,.85);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
   
}
.support-us img{
    position: relative;
    left:50px;
    width:40px;
    height:40px;
    border-radius:50% ;
    margin:0px 20px  20px 0px;

}
.nav-links
{
    margin:30px ;
}
a
{
    margin-left: 100px;
    text-align: center;
  
}
a:hover
{
    cursor: pointer;
    color: blue;
}
#footer
{
    padding: 30px 0px;
    width:100vw;
    color: white;
    background-color:black;
    text-align: center;
}
.support-us img:hover{
    cursor: pointer;
    transform: rotate(60deg);
    transition: .7s;
    box-shadow: 0px 0px 10px white;
}
</style>