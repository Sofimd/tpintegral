const { createApp } = Vue;

createApp({
  data() {
    return {
      usuarios: [],
      url: "https://mlmh3113.pythonanywhere.com/usuarios",
      cargando: true,
      error: false,
    }
  },

    //HEAD


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

     
        getByDni(dni) {

        },

        getByType(type) {

        },

        delUser(dni) {
          const url = this.url + "/" + dni;
          let options = {
            method: "DELETE",
          };
          fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
              location.reload();
            })
            .catch((err) => console.error(err));
          }, 
        
      
     

    },



  created() {
    this.fetchApi(this.url)
  }

}).mount("#app")
