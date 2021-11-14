Vue.component('parent-data',{
    template:
    `
    <div>
    <h1> Acceder a data del componente padre</h1>
    <p> {{$parent.textoParent}} </p>
    
    </div>
    `,
    mounted(){
        console.log(this);
    }
})