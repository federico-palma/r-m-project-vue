<template>
  <nav className="navbar">
            <div>
                <router-link :to="{ name: 'home' }">
                    <img id="logo" src="../assets/RickAndMortyLogo.png" alt="Rick and Morty logo"/>
                </router-link>
            </div>
            <!-- <div id="hamburger" onClick={ toggleHamburger } className={ isHamMenuOpen ? 'open-burger' : null }>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div> -->
            <div class="navbar-links" >
                <router-link :to="{ name: 'characters' }">
                    <p id="nav-link-character">Characters</p>
                </router-link>
                <router-link :to="{ name: 'locations' }">
                    <p id="nav-link-location">Locations</p>
                </router-link>
                <router-link :to="{ name: 'episodes' }">
                    <p id="nav-link-episode">Episodes</p>
                </router-link>
            </div>
        </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #276a75;
    box-shadow: 0px 0px 2px 3px  #335768b4;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    font-family: 'Righteous', cursive;
}

#logo {
    width: 15%;
    min-width: 150px;
    max-height: 95%;
    background-color: rgba(0, 0, 0, 0);
    margin: 0px 30px;
    margin-right: auto;
}

.navbar-links {
    width: fit-content;
    display: flex;
    box-sizing: border-box;
}

.navbar-links p {
    color: rgb(240, 240, 240);
    margin: 30px;
    font-size: 1.6rem;
}

.navbar-links a:hover{
    background-color: #318895;
    border-radius: 5px;
}
</style>