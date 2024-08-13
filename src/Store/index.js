import vue from "vue"
import vuex from "vuex"
vue.use(vuex)

const store=new vuex.Store({
 state:{
      signupdetails:[
        { 
            name:"Ajessh",
            email:"smajeesh3@gmail.com",
            password:"ajeesh"
        }
      ],
      profileName:null,
      profileEmail:null,
      sidebarValue:null
 },
 mutations:{
    addsignup(state,data)
    {
        state.signupdetails.push(data)   
    },
    changeProfileName(state,response)
    {
     
      
             state.profileName=response.name
             state.profileEmail=response.email
             console.log(state.profileEmail);
             
    },
    changeSidebar(state,response)
    {
         state.sidebarValue=response.toLowerCase()
    }
 }

})



export default store