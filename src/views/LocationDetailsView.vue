<template>
  <section id="location-details">
    <div id="location-details-container" v-if="locationData">
      <h1 id="location-name">{{ locationData.name }}</h1>
      <h2>Type: {{ locationData.type }}</h2>
      <h2 v-if="residentsPool.length > 0">Residents</h2>
      <h2 v-else>No residents in this location</h2>
      <ul id="residents-list" v-if="residentsPool">
        <router-link
          tag="li"
          class="resident-item"
          v-for="resident in residentsPool"
          :key="resident.id"
          :to="{ name: 'character-details', params: { id: resident.id } }">
          <img :src="resident.image" alt="" />
          <p>{{ resident.name }}</p>
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
      locationData: null,
      residentsIDs: [],
      residentsPool: [],
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.locationData = data;
          this.residentsIDs = data.residents.map(residentUrl => {
            return residentUrl.replace(/\D/g, "");
          });
        })
        .then(() => {
          if (this.residentsIDs.length > 0) {
            this.fetchResidents("https://rickandmortyapi.com/api/character/" + this.residentsIDs);
          }
        })
        .catch(err => console.log(err.message));
    },
    fetchResidents(url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.residentsPool = Array.isArray(data) ? [...data] : [data];
        })
        .catch(err => console.log(err.message));
    },
  },
  created() {
    document.title = "R&M Vue App | Locations";
  },
  beforeMount() {
    this.fetchData("https://rickandmortyapi.com/api/location/" + this.id);
  },
};
</script>

<style>
#location-details {
  margin: auto;
  font-family: "Righteous", cursive;
}

#location-details-container {
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

#location-name {
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

.resident-item:hover {
  background-color: rgb(102, 190, 190);
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
