<template>
  <section id="character-details">
      <div id="character-details-container" v-if="characterData">
        <h1 id="character-name">{{ characterData.name }}</h1>
        <img :src="characterData.image" alt="">
        <ul id="character-details-list">
            <li class="character-details-item" :v-if="characterData.status">Status: {{ characterData.status }}</li>
            <li class="character-details-item" :v-if="characterData.gender">Gender: {{ characterData.gender }}</li>
            <li class="character-details-item" :v-if="characterData.species">Species: {{ characterData.species }}</li>
            <li class="character-details-item" :v-if="characterData.origin.name">Origin: {{ characterData.origin.name }}</li>
        </ul>
      </div>
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
                    this.characterData = data
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

#character-details-container {
    color: black;
    position: relative;
    min-width: 250px;
    max-width: min(670px, 90%);
    height: fit-content;
    margin: auto;
    padding: 20px 3px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px;
    background-color: #BEE5fD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#character-name {
    font-size: 2.3rem;
    text-align: center;
}

#character-details-container img {
    border-radius: 10px;
    border: 3px solid darkcyan;
    max-width: 100%;
}

#character-details-list {
    list-style-type: none;
    font-size: 1.5rem;
    padding: 0px;
}
</style>