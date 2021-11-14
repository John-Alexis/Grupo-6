Vue.component('computed',{
    template:
    `
    <div>
    <h1> Computed Properties</h1>
    <p> nombre:{{name}} lastName: {{lastName}} </p>
    <p> {{fullName}}</p>
    </div>
    `,
    data(){
        return {
            name:"Lupe",
            lastName:"De los Angeles"
        }
    },
    computed:{
    fullName(){
        return `${this.name} de la casa ${this.lastName}`
    }
}
})