<template>
 <div>  
  <!-- <homepage /> -->
    <router-view></router-view>
    <div>
      <router-view name="about"/>
    </div>
 </div>
</template>

<script>
export default {
  components: {
  

  } ,
  name: 'App',


}
</script>
    Homepage

<style>
*
{
  margin:0px;
  font-family: Arial, Helvetica, sans-serif;
  /* background-color:black; */
}

</style>
