const { createApp } = Vue;

createApp({
  data() {
    return {
      usuarios: [],
      url: "https://mlmh3113.pythonanywhere.com/usuarios",
      cargando: true,
      error: false,
    };
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
        }
    },

    editUser(user) {},
  },

  created() {},
}).mount("#app");
