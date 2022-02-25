<template>
  <nav className="navbar">
            <div>
                <router-link :to="{ name: 'home' }">
                    <img id="logo" src="../assets/RickAndMortyLogo.png" alt="Rick and Morty logo"/>
                </router-link>
            </div>
            <div id="hamburger" @click="toggleBurger" :class="isMenuOpen ? 'open-burger' : null">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div class="navbar-links" :class="isMenuOpen ? 'open-menu' : 'closed-menu'">
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
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleBurger() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }

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

#hamburger {
    display: none;
    position: absolute;
    right: 50px;
    top: 20px;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    position: relative;
    right: 10px;
    width: 35px;
    height: 5px;
    background-color: rgb(240, 240, 240);
    margin: 6px 0;
    transition: 0.4s;
  }

/* Rotate first bar */
.open-burger .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 7px) ;
}

/* Fade out the second bar */
.open-burger .bar2 {
    opacity: 0;
}

/* Rotate last bar */
.open-burger .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -7px) ;
}

@media only screen and (max-width: 800px) {
    #hamburger {
        display: block;
    }

    .navbar-links {
        width: 195px;
        height: fit-content;
        position: relative;
        top: 85px;
        right: 5px;
        flex-direction: column;
        background-color: #276a75;
        border: solid 2px #1c4c53;
        border-radius: 5px;
        /* transition: 0.3s; */
    }

    .navbar-links a {
        border-top: solid 1px #30828f;
        border-bottom: solid 1px #30828f;
    }

    .navbar-links a:hover{
        background-color: #318895;
    }
    
    .closed-menu {
        transform: translate(200px, 0px);
        /* transition: 0.1s; */
    }

    .open-menu {
        transform: rotate(0deg) translate(10px, 0px);
        transition: 0.3s ease-out;
    }
}
</style>