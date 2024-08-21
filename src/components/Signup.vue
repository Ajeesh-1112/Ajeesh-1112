<template>
   <div id="signup-container">
      <form action="" @submit.prevent="formdata">
        <img src="@/assets/login3.png" alt="">
             <h3>{{ signupheading }}</h3>
             <label for="">Name</label>
             <input type="text" v-model="username" required>
             <label for="">Email</label>
             <input type="email" v-model="useremail" required>
             <label for="">Password</label>
             <input type="text" v-model="userpassword" required>
             <span>{{ errmsg }}</span>
             <label for="">Confirm Password</label>
             <input type="password" v-model="usercnfpassword" required>
             <div>
                <span>Already Have an account</span>
                 <router-link to="/login">Login</router-link>

             </div>
             <input type="submit">
      </form>
      <div></div>
   </div> 
</template>

<script>
export default{
    name:"signup-vue",
    data()
    {
        return{
            signupheading:"Signup",
            username:null,
            useremail:null,
            userpassword:null,
            usercnfpassword:null,
            errmsg:null

        }
    },

    methods:{
        formdata()
    {
        if(this.usercnfpassword===this.userpassword)
    {
        const userobj={
            name:this.username,
            email:this.useremail,
            password:this.userpassword,
            cnfpassword:this.usercnfpassword
 
        }
        this.$store.commit("addsignup",userobj)
        this.$router.push("/login")
    }
    else{
        setTimeout(() => {
            this.errmsg=""
            this.usercnfpassword=""
            
        }, 2000);
        this.errmsg="password doesn't match"

    }
        
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
    margin-top:50px
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
#signup-container
{
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgb(232, 232, 232);
}
input[type="submit"]
{
    background-color: rgb(3, 118, 175);
    padding: 6px;
    color: white;
    border:none;
    margin-top: 30px;
    border-radius: 4px;
    margin-bottom: 10px;
}
img{
    border-radius:50% ;
    width:100px;
    position: absolute;
    top:-40px;
    left:100px
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
#signup-container div{
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
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