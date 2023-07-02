const {createApp} = Vue;

createApp({
    data(){
        return{
            inscripcion: [],
            url: '',
            cargando: true,
            error: false,
        }
    },

    methods: {
        fetchApi(){
            fetch(this.url)
            .then(res => res.jason())
            .then(data =>{
                this.inscripcion = data;
                this.cargando = false;
            })
        .catch(err=>{
            console.error(err);
            this.error = true;
        })
    },

    created()
    this.fetchApi(this.url);
    }
}).mount('#app')