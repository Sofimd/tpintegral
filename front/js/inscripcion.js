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

    //HEAD
    methods: 
        fetchApi(){
            fetch(this.url)
            .then(res => res.json())
            .then(data =>{
                this.inscripcion = data;
                this.cargando = false;
            })
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        }

  methods: {
    fetchApi(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.usuarios = data;
          this.cargando = false;
          const tabla = document.getElementById("tabla");
          tabla.classList.remove("hide");
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    getByDni(dni) {}

    getByType(type) {}

    delUser(dni) {
      const url = this.url + "/" + dni;
      let options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          this.fetchApi(url);
        })
        .catch((err) => console.error(err));
    },

    editUser(user) {},


  created() {},
}).mount("#app");
