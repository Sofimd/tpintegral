const {createApp} = Vue;

createApp({
    data(){
        return{
            alumnos_inscripcion: [],
            url: '',
            cargando: true,
            error: false,
        }
    },

    methods: {
        fetchApi(){
            fetch(this.url)
            .then()
            .then()
        }
    },

    created(){

    }
}).mount('#app')