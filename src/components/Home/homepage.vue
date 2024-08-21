<template>
    <div >
     <nav>
        <P>@TESTIE</P>
        <router-link to="/home" :class="{Home:isHome}">Home</router-link>
        <router-link to="">Dashboard</router-link>
        <router-link to="/home/test" >Test</router-link>
        <form action="">
            <input type="search" placeholder="search">
           
        </form>     
        <p @click="themeChange">{{ theme }}   </p>
          <router-link to="/home/profile" id="profile-router"><img src="@/assets/blueprofile.jpg" alt=""></router-link>

     </nav>
     <router-view id="profile-router" />
        <router-view name="sidebar" />

    

     <Introduction v-if="show" />



                   
    </div>
    
</template>

<script>
import { mapState } from 'vuex';
import Introduction from './Introduction.vue';
export default{
    name:"homePage",
    components:{
                Introduction
         
    },
    data()
    {
        return{
             show:true,
             isHome:true,
             theme:"Dark"
        }
    },
    methods:{
        themeChange()
        {
            if(this.theme==="Dark")
        {
            this.theme="Bright"
        }
        else{
            this.theme="Dark"
        }
        }
    },
    computed:{
      
        ...mapState(["profileName"])
    },
    watch:{
        $route(to){
        if(to.path==="/home" || to.path==="/home/profile")
        {
            this.show=true
        
        }
        else{
            this.isHome=false
            this.show=false
        }
            
    }
        
    },
    created() {
    this.show= this.$route.path !== '/home/test';
  }

  
  }


</script>
<style scoped>



#profile-router{
    position: absolute;
    top:10px;
    right:40px
}
a{
    position: relative;
    color: grey;
    text-decoration: none;
   

}
img{
    width:40px;
    border-radius: 50%;
}
nav{

    color:white;
    background-color: white ;
    border-bottom:1px solid rgb(206, 206, 206);
    padding: 16px;
    display: flex;
    width:100%;
    justify-content: space-between;
    position: fixed;
}
nav form{
    flex:4;
    margin:0px auto;
   
}
nav p
{
    
    color:blue;
    font-weight: 600;
    flex:1;
}
nav a{
    flex:1.05
}

input[type="submit"]
{
   
    background-color: rgb(3, 118, 175);
    padding: 5.5px 16px;
    color: white;
    border:none;
    border-radius: 0px 10px 10px 0px;

}
input[type="submit"]:hover
{
cursor: pointer;
transform: scale(1.05);
transition: .5s;

}
input[type="search"]
{
    font-size:1.02em;
    background-color:rgb(234, 233, 233);
    border: none;
    padding:6px 10px;
    border-radius:4px
}
input[type="search"]:focus{
    outline: none;
}
#content
{
    display: flex;
    justify-content: space-between;
   

}
#content-sidebar
{
    flex:1
}

#content-a
{
   padding:0px 30px;
    flex:6;
   

}
.Home
{
    color:blue 
}
a:hover,p:hover
{
    color:blue;
   
   
}
a:focus,p:focus
{
    color:blue
}

@media only screen and (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: center;
      
    }
    
    nav form {
        width: 100%;
        position: relative;
        left:100px;
      
    }
    
    nav a, nav p {
        flex: unset;
        margin: 5px 0;
    }
    
    #profile-router {
        position: relative;
        top: 0;
        right: 0;
        margin-top: 10px;
    }
}

</style>