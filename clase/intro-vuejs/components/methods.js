Vue.component('methods',{
    template:
    `
    <div>
    <h1> METHODS</h1>
    <p>  </p>
    <p v-on:click = exampleMethod> Hacer click aqui, para activar el ejemplo  </p>
    </div>
    `,
    methods:{
        exampleMethod(){
            this.showAlert();
            
        }
        ,showAlert(){
            alert("Se ejecutó cuando se disparó el evento clic");
        }
    }
})