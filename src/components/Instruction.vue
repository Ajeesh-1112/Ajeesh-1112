<template>
  <div id="container">
    <div id="sub-container">
      <div id="nav-container">
      <!-- <div> -->
       <a href="">@Testie</a>
      <router-link to="/home/test" id="go-back">Go Back</router-link>
      <!-- </div> -->
    
    </div>
    <h3>Instructions</h3>

    <div id="instruction-container">
      <ul>
        <li v-for="item in Testinstruction" :key="item.id">
          {{ item }}
        </li>
      </ul>
      
      
    </div>
    
      <form action="">
        <input type="checkbox" v-model="ischecked" />
        <label for=""> Please read all the above instruction carefully .Once you have done  please check the checkbox</label
        ><br /><br>
        <div id="submit">
          <input type="submit" value="Start Test" :disabled="!ischecked" :class="{color:ischecked}" />

        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "instructionPage",
  data() {
    return {
      ischecked: null,
      Testinstruction: [
        "Ensure you have a stable internet connection.",
        "Make sure you are using a compatible browser (Chrome, Firefox, Safari, etc.).",
        "The test is timed. You have 30 minutes to complete it.",
        "The test consists of 30 multiple-choice questions ",
        "Read each question carefully before answering.",
        "Use the Next and Previous buttons to navigate between questions.",
        "Once you have answered all the questions, click on the Submit button to finish the test.",
        "You cannot make changes after submission.",
        "Do not refresh the page or close the browser window as it may cause you to lose your progress.",
        "Do not attempt to cheat or use unauthorized resources.",
        "Any suspicious activity may lead to disqualification.",
        "After submitting, you will receive a confirmation message.",
      ],
    };
  },
};
</script>

<style scoped>

#container {
  width: 100vw;
  height: 100vh;
  background:url("@/assets/important-removebg - Copy.png");
  color:rgb(206, 205, 205);
  line-height: 22px;
  background-size: cover;
}
h3
{
  margin-top:18px;
  margin-left:20px;
  font-size:2em;
}
a
{
  font-size: 1.2em;
  text-decoration: none;
  color:blue;
}
#go-back
{
  position: fixed;
  right: 6px;
  text-decoration: underline;
  color: red;
}

li
{
  font-size:1.2em;
  margin-top:20px;
  margin-left:40px;
  text-indent: 10px;
}
img
{
  width:500px;
}
#sub-container
{
  width: 100vw;
  height: 100vh;
  background-color: rgba(6, 6, 6, 0.9);
}
input[type="submit"]
{
  padding: 10px 20px;
  letter-spacing: 3px;
}
.color
{
  padding: 10px 20px;
  color: white;
  background-color:green ;
  letter-spacing: 3px;
  border:none;
  
}
.color:hover{
  transform: scale(1.1);
  transition: .7s ease-in;
  cursor: pointer;
  background-color:rgb(27, 142, 27) ;
}
form{
  border-radius: 4px;
  padding: 20px 80px;
  color:black;
  width:fit-content;
  background-color: white;
  margin:20px auto;
  
}



</style>
