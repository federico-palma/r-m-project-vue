<template>
  <section id="episode-details">
      <div id="episode-details-container" v-if="episodeData">
        <h1 id="episode-name">{{ episodeData.name }}</h1>
        <h2>Type: {{ episodeData.type }}</h2>
        <h2 v-if="residentsPool.length > 0">Characters</h2>
        <h2 v-else>No characters in this episode</h2>
        <ul id="residents-list" v-if="residentsPool">
            <router-link tag="li" class="resident-item" v-for="resident in residentsPool" :key="resident.id" :to="{ name: 'character-details', params: {id: resident.id} }"> 
                <img :src="resident.image" alt="">
                <p>{{ resident.name }} </p>
            </router-link>
        </ul>
      </div>
  </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            episodeData: null,
            residentsIDs: [],
            residentsPool: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.episodeData = data
                    this.residentsIDs = data.characters.map((residentUrl) => {
                        return residentUrl.replace(/\D/g, "")
                    })
                })
                .then(() => {
                    if (this.residentsIDs.length > 0) {
                        this.fetchResidents('https://rickandmortyapi.com/api/character/' + this.residentsIDs)
                    }
                })
                .catch(err => console.log(err.message))    
        },
        fetchResidents(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.residentsPool = Array.isArray(data) ? [...data] : [data]
                    })
                .catch(err => console.log(err.message))
        },
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/episode/' + this.id)
    }
}
</script>

<style>
#episode-details {
    margin: auto;
    font-family: 'Righteous', cursive;
}

#episode-details-container {
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

#episode-name {
    font-size: 2.3rem;
    text-align: center;
}

#residents-list {
    list-style-type: none;
    font-size: 1.5rem;
    padding: 0px;
}

.resident-item {
    display: flex;
    align-content: center;
    background-color: rgb(90, 168, 168);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
}

.resident-item img {
    border-radius: 50%;
    max-width: 77px;
    height: 15%;
    justify-self: left;
}

.resident-item p {
    text-align: center;
    margin: auto;
    padding: 0px 5px;
}
</style>