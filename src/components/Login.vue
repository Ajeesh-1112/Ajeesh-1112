<template>
    <div id="login-container">
        <form action="" @submit.prevent="logindata">
            <img src="@/assets/login3.png" alt="">
            <h3>Login</h3>
            <label for="">Enter your email</label>
            <input type="email" v-model="loginemail" required>
            <label for="">Enter your Password</label>
            <input type="password" v-model="loginpassword">
            <span>{{ errmsg }}</span>
            <div>
                <span>Don't have an account ?</span>
                <router-link to="/">sign up</router-link>
            </div>
            <input type="submit">
        </form>
        <div>

        </div>
    </div>
    
</template>

<script>
import { mapState } from 'vuex';
export default{
    name:"login-vue",

    data()
    {
        return{
            loginemail:null,
            loginpassword:null,
            errmsg:null

        }
    },
    computed:{
            ...mapState(["signupdetails"])
    },
    methods:{
        logindata()
        {
              this.signupdetails.forEach((val)=>{
                if(val.email==this.loginemail && val.password==this.loginpassword)
              {
                this.signupdetails.forEach((value)=>{
                if(value.email===this.loginemail)
                {
                    const obj={
                        name:value.name,
                        email:value.email
                    }
                    this.$store.commit("changeProfileName",obj)
                    
                }

                })
                this.$router.push("/home")
                
              }
              else{
                setTimeout(() => {
                    this.errmsg=""
                     this.loginpassword=""
                    
                }, 2000);
              this.errmsg="data doesn't match"
              
              }
              })
        }
    }
}
</script>
<style scoped>
h3
{
    text-transform: capitalize;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 1px;
    margin-top:50px;
    margin-bottom:20px
}

form{
    position: relative;
    display: flex;
    flex-direction: column;
    width:fit-content;
    margin:0px auto;
    background-color: white;
    padding: 20px 30px;
    border-radius: 8px;
   
}
#login-container
{
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgb(232, 232, 232);
}
img{
    border-radius:50% ;
    width:100px;
    position: absolute;
    top:-40px;
    left:100px
}
#login-container div{
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
}
input[type="submit"]
{background-color: rgb(3, 118, 175);
    
    padding: 6px;
    color: white;
    border:none;
    margin-top: 30px;
    border-radius: 4px;
    margin-bottom: 10px;
}
input[type="text"],input[type="email"],input[type="password"]
{
    font-size:1.02em;
    margin-bottom:16px;
    background-color:rgb(234, 233, 233);
    border: none;
    border-radius: 4px;
    padding:4px 40px 4px 6px
}
label{
    margin-bottom:10px ;
    color:  rgb(3, 118, 175);
}

a
{
    color:  rgb(3, 118, 175);
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus{
    outline: none;
}
input[type="submit"]:hover
{
cursor: pointer;
transform: scale(1.05);
transition: .5s;
background-color:  rgb(25, 146, 207);
}
span{
    color: red;
}





</style>