<template>
    <div>
     <nav>
        <P>@TESTIE</P>
        <router-link to="/home">Home</router-link>
        <router-link to="">Dashboard</router-link>
        <router-link to="/home/test" >Test</router-link>
        <form action="">
            <input type="search">
            <input type="submit" value="search">
        </form>        
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
             show:true
        }
    },
    computed:{
      
        ...mapState(["profileName"])
    },
    watch:{
        $route(to){
            console.log(to);
        if(to.path==="/home" || to.path==="/home/profile")
        {
            this.show=true
        }
        else{
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
    right:6px
}
a{
    position: relative;
    color: white;
    text-decoration: none;

}
img{
    width:40px;
    border-radius: 50%;
}
nav{
    color:white;
    /* background-color:rgba(0, 29, 72, 0.9); */
    background-color: rgba(11, 11, 11, 0.85); 
    border-bottom:4px solid rgba(249, 249, 249, 0.2);
    padding: 16px;
    display: flex;
    justify-content: space-between;
}
nav form{
    flex:4;
    margin:0px auto;
}
nav p
{
    flex:1;
    /* color: rgb(8, 8, 128); */
}
nav a{
    flex:1.05
}

input[type="submit"]
{
   
    background-color: rgb(8, 8, 128);
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
    padding:3px 10px 4px 6px;
    border-radius: 10px 0px 0px 10px;
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
a:hover
{
    color:blue
}
a:focus
{
    color:blue
}



</style>