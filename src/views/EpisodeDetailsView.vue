<template>
  <section id="episode-details">
    <div id="episode-details-container" v-if="episodeData">
      <h1 id="episode-name">{{ episodeData.name }}</h1>
      <p class="episode-info">
        Season: {{ episodeData.episode.slice(1, 3) }} | Episode: {{ episodeData.episode.slice(4) }}
      </p>
      <p class="episode-info">Air date: {{ episodeData.air_date }}</p>
      <h2 v-if="charactersPool.length > 0">Characters</h2>
      <h2 v-else>No characters in this episode</h2>
      <ul id="characters-list" v-if="charactersPool">
        <router-link
          tag="li"
          class="character-item"
          v-for="character in charactersPool"
          :key="character.id"
          :to="{ name: 'character-details', params: { id: character.id } }">
          <img :src="character.image" alt="" />
          <p>{{ character.name }}</p>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      episodeData: null,
      charactersIDs: [],
      charactersPool: [],
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.episodeData = data;
          this.charactersIDs = data.characters.map(characterUrl => {
            return characterUrl.replace(/\D/g, "");
          });
        })
        .then(() => {
          if (this.charactersIDs.length > 0) {
            this.fetchCharacters("https://rickandmortyapi.com/api/character/" + this.charactersIDs);
          }
        })
        .catch(err => console.log(err.message));
    },
    fetchCharacters(url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.charactersPool = Array.isArray(data) ? [...data] : [data];
        })
        .catch(err => console.log(err.message));
    },
  },
  beforeMount() {
    this.fetchData("https://rickandmortyapi.com/api/episode/" + this.id);
  },
  created() {
    document.title = "R&M Vue App | Episodes";
  },
};
</script>

<style>
#episode-details {
  margin: auto;
  font-family: "Righteous", cursive;
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
  background-color: #bee5fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#episode-name {
  font-size: 2.3rem;
  text-align: center;
}

.episode-info {
  margin: 10px auto;
  font-size: 1.4rem;
}

#characters-list {
  list-style-type: none;
  font-size: 1.5rem;
  padding: 0px;
}

.character-item {
  display: flex;
  align-content: center;
  background-color: rgb(90, 168, 168);
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
}

.character-item:hover {
  background-color: rgb(102, 190, 190);
}

.character-item img {
  border-radius: 50%;
  max-width: 77px;
  height: 15%;
  justify-self: left;
}

.character-item p {
  text-align: center;
  margin: auto;
  padding: 0px 5px;
}
</style>
