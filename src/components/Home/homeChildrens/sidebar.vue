<template>
    <div id=container>
        <div class="main">
            <h5>Categories</h5>
        <router-link @click.native="sidebarValue"
        v-for="category in categories"
        :key="category"
        :to="{ name: 'Quiz', params: { languages: category } }"
      > {{ category }}
    </router-link>
        </div>  
        <div id="router">
            <router-view />

        </div>
        
  
    </div>
</template>
<script>
export default {
    name:'sideBar',
    data(){
        return{
            value:null,
            categories: [
        'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'PYTHON', 'JAVA', 'PHP',
        'VUE JS', 'REACT JS', 'ANGULAR JS', 'THREE JS', 'MONGO DB',
        'C', 'C++', 'C#', 'NODE JS', 'BOOTSTRAP', 'JQUERY', 'DATA SCIENCE'
      ]
        }
    },
    methods:{
        sidebarValue(e)
        {
            this.value=e.target.innerText
            this.$store.commit("changeSidebar",e.target.innerText);
            
        }

    },
   

}
</script>
<style scoped>

#container
{
    display: flex;
}
.main{
    margin-top:65px;
    position: fixed;
    height:92vh;
    width:15%;
    background-color: white;
    overflow-y: auto;
    flex:2
    

}
#router
{
    height: 100vh;
    flex:10;
    margin-left:230px;
    color:black;
    
    padding:10px 20px;
}
.main div{
    padding:14px;

}
h5
{
    
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 1.5em;

}
a
{
    display: block;
    color: rgb(74, 73, 73);
    text-decoration: none;
    padding: 8px;
   
   
}
a:hover
{
    background-color: rgb(248, 246, 246);

}
a:focus
{
    color: blue;
}
::-webkit-scrollbar {
    width: 16px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background-color:rgb(201, 200, 200);
  
}

</style>