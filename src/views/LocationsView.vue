<template>
  <section id="locations">
        <div id="location-cards" v-if="locationsData">
            <div v-for="singleLocation in locationsPool" class="location-card" :key="singleLocation.id">
                <p class="location-id">{{ singleLocation.id }}</p>
                <h2 class="location-name">{{ singleLocation.name }}</h2>
                <div>
                <p class="location-type">Type: {{ singleLocation.type }}</p>
                <p class="location-dimension">Dimension: {{ singleLocation.dimension }}</p>
                </div>
                <router-link tag="button" class="residents-btn" :to="{ name: 'location-details', params: {id: singleLocation.id} }">Residents</router-link>
            </div>
        </div>
            <!-- { loading && hasMore && <MainLoading/> } -->
        </section>
</template>

<script>
export default {
    data() {
        return {
            locationsData: null,
            locationsPool: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.locationsData = data
                    this.locationsPool = [...this.locationsPool, ...data.results]
                    })
                .catch(err => console.log(err.message))    
        },
        getNextPage() {
            let bottomOfWindow = Math.round(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                this.fetchData(this.locationsData.info.next)                
            }
        },
    },
    created () {
        document.title = "Locations | R&M Vue Project";
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/location')
    },
    updated() {
        window.addEventListener('scroll', this.getNextPage)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.getNextPage)
    }
}
</script>

<style>
#locations {
    margin: auto;
    font-family: 'Righteous', cursive;
}

#location-cards {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.location-card{
    position: relative;
    width: 400px;
    min-height: 300px;
    max-height: fit-content;
    margin: 25px;
    padding: 20px 40px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px;
    background-color: #BEE5fD;
    display: grid;
}

@media only screen and (max-width: 1135px) {
    .location-card {
        margin: 10px;
    }
}

.location-name{
    margin: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 2px;
    font-size: 2rem;
}

.location-id {
    position: absolute;
    right: 10px;
    top: -10px;
    background-color: rgba(19, 0, 0, 0);
    width: 20px;
    text-align: end;
}

.location-type {
    font-size: 1.5rem;
}

.location-dimension {
    font-size: 1.5rem;
}

.residents-btn {
    margin: auto;
    width: 70%;
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid darkcyan;
    border-radius: 8px;
    font-size: 1.3rem;
    font-family: 'Righteous', cursive;
    text-align: center;
}

.residents-btn:hover {
    cursor: pointer;
}

</style>