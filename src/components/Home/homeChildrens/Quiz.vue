<template>
    <div :class={isdark:darkvalue}>
        <button @click="dark" id="dark">{{ btnValue }}</button>
         <div>
           <h1>{{sidebarValue.toUpperCase()}}</h1>
         </div>
         <div>
            <h3>INTODUCTION</h3>
            <p v-for="des in description" :key="description.indexOf(des)">
                {{ des[sidebarValue] }}</p>           
           
         </div>
          <div>
            <h3>TEST YOUR KNOWLEDGE :</h3>
        <dl v-for="val in level" :key="level.indexOf(val)">
            <dt>{{ val.name}} :</dt>
            <dd>{{val.description}} {{ sidebarValue}}.Take the test and chance to win the {{ val.name }} certificate .</dd>
            <dd>
                <div id="button-container">
                <button>Try It Yourself >></button>
                <button id="learn">Learn {{ sidebarValue }}</button>
            </div>
            </dd>
            
        </dl>
          </div>
       
    </div>
</template>

<script>

import { mapState } from 'vuex';
import description from '@/description.json'
export default {
    name:"HtmlQuiz",
    data() {
        return{
            level:[{
                name:"BEGINNER",
                description:"This is the basic test of",
                
            },
            {
                name:"INTERMEDIATE",
                description:"This is the intermediate test of"
            },
            {
                name:"ADVANCED",
                description:"This is the ADVANCED Module test of"
            }
        
        ],
        description:description,
        darkvalue:false,
        btnValue:"Dark"
          
            
        }
    },
    methods:{
        dark()
        {
            this.darkvalue=!this.darkvalue
            if(this.btnValue==="Dark")
        {
            this.btnValue="Bright"
        }
        else{
            this.btnValue="Dark"
        }
        }

    },

    computed:{
        ...mapState(["sidebarValue"])
        
        
    }
   
}
</script>
<style scoped>

h1{
    width:fit-content;
   margin:0 auto;
   font-weight: 500;
   font-size: 2em;
   margin-top:10px

}
dl{
    margin-top:20px
}
dt{
    margin-bottom:10px;
    font-weight: 600;

}
p{
    text-indent: 140px;
    line-height: 30px;
    margin-bottom: 20px;
  
}
dd{
    text-indent: 100px;
}
button{
    background-color: green;
    margin: 20px 0px 10px;
  
        color: white;
        border:none;
        padding: 6px 20px;
        border-radius: 2px;
}
#button-container
{
    display: flex;
     gap:50px;
}
button:hover{
    cursor: pointer;
    background-color: rgb(0, 128, 0,.8);

    transform: scale(1.1);
    transition: .5s;
}
#learn{
    background-color: rgb(3, 118, 175);
}
.isdark{
    /* background-color: black; */
    background-color: rgb(0, 0, 0,.85); 
    color: white;
}
#dark
{
    position: absolute;
    right: 20px;
    
}


</style>