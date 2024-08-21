<template>
  <div id="conatiner">
    <div id="nav-container">
      <a href="">@Testie</a>
      <router-link to="/home/test">Go Back</router-link>
    </div>
    <h3>Insrtuctions</h3>

    <div>
      <ul>
        <li v-for="item in Testinstruction" :key="item.id">
          {{ item }}
        </li>
      </ul>
      <form action="">
        <input type="checkbox" v-model="ischecked" />
        <label for="">Once read the instruction please check the checkbox</label
        ><br />
        <input type="submit" value="Start Test" :disabled="!ischecked" />
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
}

#nav-conatiner {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
