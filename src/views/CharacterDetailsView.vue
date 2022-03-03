<template>
  <section id="character-details">
      <h1>{{ data.name }}</h1>
  </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            characterData: null,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.charactersData = data
                    console.log(data)
                    })
                .catch(err => console.log(err.message))    
        },
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/character/' + this.id)
    }
}
</script>

<style>
#character-details {
    margin: auto;
    font-family: 'Righteous', cursive;
}
</style>