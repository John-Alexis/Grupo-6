Vue.component('message',{
    template: `
    <div>
    <h1> message component</h1>
    <p> Esto es un parrafo </p>
    </div>
    `
    ,
    data(){
        return {
        message: "Hola mundo"
    }
    }
})