<template>
  <section id="home">
            <div className="home-cards-container">
                <router-link :to="{ name: 'characters' }">
                    <div className="home-cards" id="char-home-card"></div>
                    <h2 className="home-card-text">Characters</h2>
                </router-link>
            </div>
            <div className="home-cards-container">
                <router-link :to="{ name: 'locations' }">
                    <div className="home-cards" id="location-home-card"></div>
                    <h2 className="home-card-text">Locations</h2>
                </router-link>
            </div>
            <div className="home-cards-container">
                <!-- <Link to='/episodes'> -->
                    <div className="home-cards" id="episode-home-card"></div>
                    <h2 className="home-card-text">Episodes</h2>
                <!-- </Link> -->
            </div>
        </section>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>
#home {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Righteous', cursive;
}

.home-cards-container {
    margin: 25px;
    width: min(600px, 80%);
    text-align: center;
    background-color: darkcyan;
    border: 5px darkcyan solid;
    box-shadow: 0px 0px 10px darkcyan;
    border-radius: 10px;
}

.home-cards {
    text-align: center;
    width: 100%;
    min-width: fit-content;
    height: 200px;
    border: 1px black solid;
    border-radius: 10px;
    background-color: darkcyan;
}

.home-card-text {
    color: rgb(240, 240, 240);
    text-shadow: 3px 3px black;
    font-size: 2rem;
    margin: 5px;
}

#char-home-card {
    background-image: url(../assets/r&m-characters.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
#location-home-card {
    background-image: url(../assets/r&m-locations.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
#episode-home-card {
    background-image: url(../assets/r&m-episodes.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>
