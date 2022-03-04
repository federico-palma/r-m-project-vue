<template>
  <section id="location-details">
      <div id="location-details-container" v-if="locationData">
        <h1 id="location-name">{{ locationData.name }}</h1>
        <h2>Type: {{ locationData.type }}</h2>
        <h2>Residents</h2>
        <ul id="residents-list" :v-if="residentsPool">
            <li :v-for="resident in residentsPool"> {{ resident.name }} </li>

        </ul>
      </div>
  </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            locationData: null,
            residentsIDs: [],
            residentsPool: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.locationData = data
                    this.residentsIDs = data.residents.map((residentUrl) => {
                        return residentUrl.replace(/\D/g, "")
                    })
                })
                .then(() => {
                    this.fetchResidents('https://rickandmortyapi.com/api/character/' + this.residentsIDs)
                })
                .catch(err => console.log(err.message))    
        },
        fetchResidents(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.residentsPool = data
                    console.log(this.residentsPool)
                    })
                .catch(err => console.log(err.message))
        },
        // getNextPage() {
        //     window.onscroll = () => {
        //         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        //         if (bottomOfWindow) {
        //             // this.fetchData(this.charactersData.info.next)
        //         }
        //     }
        // }
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/location/' + this.id)
    }
}
</script>

<style>
#location-details {
    margin: auto;
    font-family: 'Righteous', cursive;
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
    background-color: #BEE5fD;
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
</style>