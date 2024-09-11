<template>
    <div id="main">
        <h1>MAKE YOUR KNOWLEGE IN TESTIE</h1>
        <div id="container">
            <div id="welcome-msg">
                <p>Test your language <br> level online and get <br> a certificate</p>
                 <button id="learn" @click="aboutus">About Us </button>
                 <button id="start" @click="test">Get Started ></button>
            </div>
            <div id="image-container">
                <img src="@/assets/online.jpeg">
            </div>
        </div>

        <h3>Best Way to Improve Your Coding Skilss</h3>

    </div>
</template>

<script>
export default{
    name:"introduction-testie",
    methods:{
        test()
        {
            this.$router.push("/home/test")
        },
        aboutus()
        {
            this.$router.push("/aboutus")
        }
    }
}
</script>
<style scoped>

#main
{
    /* margin-top:100px; */
    padding-top:30px ;
    width:100%;
    height: 100vh;
    background-color:whitesmoke;

}
     h1,h3
     {
        margin-top:90px;
        text-align: center;
     }
     #container
     {        
        margin:50px auto;
        display: flex;
        justify-content: center;
        
     }
     img{
        width:500px
     }
     #welcome-msg
     {
      color:white;
        padding: 70px 80px;
        align-self: center;
        background-color: rgb(3, 118, 175);
        border-radius: 30px 0px 0px 30px;
     }
     #image-container
     {
        background-color: white;
        border-radius: 0px 30px 30px 0px;
        padding: 2px 50px 0px 0px;
        /* align-self: center; */
     }
     p{
        font-size:2em;
        line-height:60px;
     }
     button{
        border:none;
        padding: 10px 20px;
        margin:20px;
        color: white;
        border-radius: 6px;
     }
     #learn
     {
        background-color: green;
     }
     #start
     {
        background-color: orangered;
     }
     #start:hover,#learn:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: .7s;
     }


     @media (max-width: 768px) {
    #container {
        flex-direction: column;
        align-items: center;
    }
    
    img {
        width: 100%;
        max-width: 300px;
    }
    
    #welcome-msg {
        padding: 30px 40px;
        /* border-radius: 30px 30px 0 0; */
    }

    #image-container {
        /* border-radius: 0 0 30px 30px; */
        padding: 20px 0;
    }

    p {
        font-size: 1.5em;
        line-height: 40px;
    }

    button {
        width: 100%;
        max-width: 200px;
        margin: 10px auto;
        padding: 8px 16px;
    }
}
</style>