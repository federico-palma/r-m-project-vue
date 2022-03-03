<template>
  <section id="episodes">
            <div v-if="episodesData" id="episode-cards">
                <div v-for="singleEpisode in episodesPool" class="episode-card" :key="singleEpisode.id" :style="setBackgroundColor(singleEpisode.episode)">
                    <p class="episode-id">{{ singleEpisode.id }}</p>
                    <h2 class="episode-name">{{ singleEpisode.name }}</h2>
                    <p class="episode-number">Season: {{ singleEpisode.episode.slice(1, 3) }} | Episode: {{ singleEpisode.episode.slice(4) }}</p>
                    <p class="episode-date">{{ singleEpisode.air_date }}</p>
                    <!-- <button className="episode-char-btn">Characters</button> -->
                </div>
            </div>

            <!-- { loading && hasMore && <MainLoading/>} -->
        </section>
</template>

<script>
export default {
    data() {
        return {
            episodesData: null,
            episodesPool: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.episodesData = data
                    this.episodesPool = [...this.episodesPool, ...data.results]
                    })
                .catch(err => console.log(err.message))    
        },
        getNextPage() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.fetchData(this.episodesData.info.next)
                    console.log(this.episodesData.info.next)
                }
            }
        },
        setBackgroundColor(season) {
            switch (season.slice(0, 3)) {
                case 'S01':
                    return {backgroundColor: '#7a78dd'}
                    break;
                case 'S02':
                    return {backgroundColor: '#d35868'}
                    break;
                case 'S03':
                    return {backgroundColor: '#e98c46'}
                    break;
                case 'S04':
                    return {backgroundColor: '#85c870'}
                    break;
                case 'S05':
                    return {backgroundColor: '#eb63df'}
                    break;
                case 'S06':
                    return {backgroundColor: '#eeec7f'}
                    break;
                case 'S07':
                    return {backgroundColor: '#82e4cf'}
                    break;
                default:
                    return ''
                    break;
            }
        }   
    },
    created () {
            document.title = "Episodes | R&M Vue Project";
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/episode')
    },
    mounted() {
        this.getNextPage()
    }
}
</script>

<style>
#episodes {
    margin: auto;
    font-family: 'Righteous', cursive;
}

#episode-cards {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.episode-card{
    position: relative;
    width: max(70%, 380px);
    height: 300px;
    margin: 25px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px;
    background-color: #BEE5fD;
    display: grid;
    grid-template-rows: 40% 20% 20% 20%;
}

.episode-name{
    margin: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    font-size: 2rem;
}

.episode-id {
    position: absolute;
    right: 10px;
    top: -10px;
    background-color: rgba(19, 0, 0, 0);
    width: 20px;
    text-align: end;
}

.episode-number {
    margin: auto;
    font-size: 1.4rem;
}

.episode-date {
    margin: auto;
    font-size: 1.4rem;
}

.episode-char-btn {
    margin: auto;
    width: 70%;
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid black;
    border-radius: 8px;
    font-size: 1.3rem;
    font-family: 'Righteous', cursive;
}

.episode-char-btn:hover {
    cursor: pointer;
}
</style>