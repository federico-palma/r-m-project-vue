<template>
  <section id="characters">
        <div id="character-cards" v-if="charactersData">
            
            <router-link tag="div" v-for="singleChar in characterPool" class="char-card" :key="singleChar.id" :to="{ name: 'character-details', params: {id: singleChar.id} }">
                <img :src="singleChar.image" alt="" class="char-img" :style="setImgGenderColor(singleChar.gender)"/>
                <h2 class="char-name">{{ singleChar.name }}</h2>
                <p class="char-id">{{ singleChar.id }}</p>
            </router-link>
            
        </div>
        <!-- { loading && hasMore && <MainLoading/>} -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            charactersData: null,
            characterPool: []
        }
    },
    methods: {
        setImgGenderColor(charGender) {
            switch (charGender) {
                case 'Male':
                    return {boxShadow: '0px 0px 5px 3px #1512da'} 
                    break;
                case 'Female':
                    return {boxShadow: '0px 0px 5px 3px #da122d'}
                    break;
                case 'Genderless':
                    return {boxShadow: '0px 0px 5px 3px #ee7b22'}
                    break;
                case 'unknown':
                    return {boxShadow: '0px 0px 5px 3px #4ecf27'}
                    break;
                default:
                    return {boxShadow: '0px 0px 5px 3px #f60fe3'}
                    break;
            }
        },
        fetchData(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.charactersData = data
                    this.characterPool = [...this.characterPool, ...data.results]
                    })
                .catch(err => console.log(err.message))    
        },
        getNextPage() {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow && this.charactersData.info.next != null) {
                this.fetchData(this.charactersData.info.next)
            }
        }
    },
    created () {
            document.title = "Characters | R&M Vue Project";
    },
    beforeMount() {
        this.fetchData('https://rickandmortyapi.com/api/character')
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
#characters {
    margin: auto;
    font-family: 'Righteous', cursive;
}

#character-cards {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.char-card{
    color: black;
    position: relative;
    max-width: 216px;
    height: 300px;
    margin: 25px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px;
    background-color: #BEE5fD;
    display: grid;
    grid-row: 70% 20%;
}

.char-card:hover {
    background-color: #a8cbe0;
}

@media only screen and (max-width: 670px) {
    .char-card {
        margin: 5px;
    }
}

@media only screen and (max-width: 660px) {
    .char-card {
        max-width: 190px;
    }
}

.char-card:hover {
    cursor: pointer;
}

.char-img {
    max-width: 80%;
    max-height: 90%;
    margin: auto;
    margin-top: 17%;
    box-shadow: 0px 0px 5px 5px #F675Da;
    border-radius: 50%;
}

.char-name{
    margin: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 2px;
}

.char-id {
    position: absolute;
    right: 10px;
    top: -10px;
    background-color: rgba(19, 0, 0, 0);
    width: 20px;
    text-align: end;
}
</style>