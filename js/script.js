
const { createApp } = Vue;

createApp({

    data() {

        return{
            
            mails: [],
        }
    },
    
    mounted(){
        for ( let i = 0; i < 10; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((result) => {
    
                console.log(result)
            
                this.mails.push(result.data.response)
    
            });

        }

    }
}).mount(`#app`);