
<template>
    <div class="main">
        <div class="profile">
            <router-link to="/home">X</router-link>
            <h3>User Details</h3>
             <img src="@/assets/profile.webp">
             <h5>User Name :</h5>
             <span>{{ profileName }}</span>
            <h5>User Email :</h5>
            <span>{{ profileEmail}}</span>
            <button @click="profileclick">LOG OUT</button>
        </div>      
         
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    name:'profilePage',
    data()
    {
        return{

        }
    },
    computed:{
        ...mapState(["profileName","profileEmail"])
    },
    methods:{
        profileclick()
        {
           
            this.$router.push("/login")
        }
    }

}
</script>
<style scoped>
*
{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
}
img{
    border-radius:50%;
    width: 150px;
    margin: 20px;

}
.main{
 
    position:absolute;
    width:100vw;
    height:100vh;
  
    
    
    
}
.main div{
    
    background-color: white;
    width:fit-content;
    display: flex;
    flex-direction: column;
    margin:0px auto;
    position: absolute;
    right:-30px;
    top:50px;
    padding: 6px 20px 40px 40px;
    border-radius: 10px;
    
    
}
a{
    display: block;
    text-align: end;
    text-decoration: none;
    color:red;
    font-size: 1.6em;
}

h5
{
    font-size: 1.01em;
    margin-top:10px ;

}
span{
    font-size: 0.9em;
    color: rgb(8, 61, 134);
    margin: 6px 0px 16px;

}
h3
{
    color: rgb(8, 61, 134);
    font-weight:600 ;
    text-align: center;
    margin:20px;
    font-size: 1.4em;

}
button{
    color:white;
    background-color: red;
    border: none;
    padding: 6px;
    border-radius: 8px;
}
button:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: .7s;
    box-shadow: 4px 0px 6px rgba(4, 4, 4, 0.5);
    background-color: rgba(255, 1, 1,.7);
}

</style>