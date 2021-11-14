Vue.component('vmodel',{
    template:
    `
    <div>
    <h1> bindeo de data con v-model</h1>
    <input v-focus v-model='name'>
    <p> Hola {{name}}, que bueno verte  </p>
    </div>
    `,
    data(){
        return {
            name:'Hernan'
    }
}
})