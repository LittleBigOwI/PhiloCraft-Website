const body = document.getElementsByTagName("body")[0];
const products = document.querySelectorAll(".products")[1];

const ranksButton = document.getElementById("ranks");
const homesButton = document.getElementById("homes");
const donationsButton = document.getElementById("donations");
const packsButton = document.getElementById("packs");

const ranksButtonMobile = document.getElementById("ranksMobile");
const homesButtonMobile = document.getElementById("homesMobile");
const donationsButtonMobile = document.getElementById("donationsMobile");
const packsButtonMobile = document.getElementById("packsMobile");

const splash = document.querySelector(".splash");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("h2");
const modalDescription = document.querySelector(".modal-description");

function buy() {
    return false;
}

function showSplash() {
    splash.style.display = "inline";
    splash.style.backgroundColor = "#282b30cb";
}

function showModal() {
    modal.style.display = "block";
}

function hideSplash() {
    modal.style.display = "none";
}

function hideModal() {
    splash.style.display = "none";
    splash.style.backgroundColor = "transparent";
}

function lockScroll() {
    body.style.overflowY = "hidden";
}

function unlockScroll() {
    body.style.overflowY = "visible";
}

function showRanks() {
    products.innerHTML = `
        <div class="product"><img src="../assets/images/donator1.png" alt="1 month donator"><button class="buy" onclick="buy('1donator')">Buy</button><button class="info" onclick="return showRankInfo('donator', '1', '5')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/donator2.png" alt="2 months Donator"><button class="buy" onclick="buy('2donator')">Buy</button><button class="info" onclick="return showRankInfo('donator', '2', '9.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/donator3.png" alt="3 months Donator"><button class="buy" onclick="buy('3donator')">Buy</button><button class="info" onclick="return showRankInfo('donator', '3', '13.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/ultimate1.png" alt="1 month Ultimate"><button class="buy" onclick="buy('1ultimate')">Buy</button><button class="info" onclick="return showRankInfo('ultimate', '1', '10')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/ultimate2.png" alt="2 months Ultimate"><button class="buy" onclick="buy('2ultimate')">Buy</button><button class="info" onclick="return showRankInfo('ultimate', '2', '17.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/ultimate3.png" alt="3 months Ultimate"><button class="buy" onclick="buy('3ultimate')">Buy</button><button class="info" onclick="return showRankInfo('ultimate', '3', '26.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
    `;

    ranksButton.classList.add("menu-active");
    ranksButtonMobile.classList.add("menu-active");

    homesButton.classList.remove("menu-active");
    homesButtonMobile.classList.remove("menu-active");

    donationsButton.classList.remove("menu-active");
    donationsButtonMobile.classList.remove("menu-active");

    packsButton.classList.remove("menu-active");
    packsButtonMobile.classList.remove("menu-active");

    return false;
}

function showHomes() {
    products.innerHTML = `
        <div class="product"><img src="../assets/images/home1.png" alt="1 home for 1 dollar"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showHomeInfo('1', '1')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/home2.png" alt="5 homes for 4.99 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showHomeInfo('5', '4.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/home3.png" alt="10 homes for 8.99 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showHomeInfo('10', '8.99')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
    `;

    ranksButton.classList.remove("menu-active");
    ranksButtonMobile.classList.remove("menu-active");

    homesButton.classList.add("menu-active");
    homesButtonMobile.classList.add("menu-active");

    donationsButton.classList.remove("menu-active");
    donationsButtonMobile.classList.remove("menu-active");

    packsButton.classList.remove("menu-active");
    packsButtonMobile.classList.remove("menu-active");

    return false;
}

function showDonations() {
    products.innerHTML = `
        <div class="product"><img src="../assets/images/donation1.png" alt="1 dollar donation"><button class="buy" onclick="buy()">Donate</button></div>
        <div class="product"><img src="../assets/images/donation2.png" alt="5 dollar donation"><button class="buy" onclick="buy()">Donate</button></div>
        <div class="product"><img src="../assets/images/donation3.png" alt="10 dollar donation"><button class="buy" onclick="buy()">Donate</button></div>
        <div class="product"><img src="../assets/images/donation4.png" alt="20 dollar donation"><button class="buy" onclick="buy()">Donate</button></div>
        <div class="product"><img src="../assets/images/donation5.png" alt="50 dollar donation"><button class="buy" onclick="buy()">Donate</button></div>
        <div class="product"><img src="../assets/images/donation6.png" alt="Custom donation"><button class="buy" onclick="buy()">Donate</button></div>
    `;

    ranksButton.classList.remove("menu-active");
    ranksButtonMobile.classList.remove("menu-active");

    homesButton.classList.remove("menu-active");
    homesButtonMobile.classList.remove("menu-active");

    donationsButton.classList.add("menu-active");
    donationsButtonMobile.classList.add("menu-active");

    packsButton.classList.remove("menu-active");
    packsButtonMobile.classList.remove("menu-active");

    return false;
}

function showPacks() {
    products.innerHTML = `
        <div class="product"><img src="../assets/images/pack1.png" alt="Starter pack for 3 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showPackInfo('starter', '3')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/pack2.png" alt="Music pack for 5 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showPackInfo('music', '5')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/pack3.png" alt="Redstone pack for 10 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showPackInfo('redstone', '10')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
        <div class="product"><img src="../assets/images/pack4.png" alt="PVP pack for 10 dollars"><button class="buy" onclick="buy()">Buy</button><button class="info" onclick="return showPackInfo('PVP', '10')"><i class="fa fa-info" aria-hidden="true"></i></button></div>
    `;

    ranksButton.classList.remove("menu-active");
    ranksButtonMobile.classList.remove("menu-active");

    homesButton.classList.remove("menu-active");
    homesButtonMobile.classList.remove("menu-active");

    donationsButton.classList.remove("menu-active");
    donationsButtonMobile.classList.remove("menu-active");

    packsButton.classList.add("menu-active");
    packsButtonMobile.classList.add("menu-active");

    return false;
}

function showRankInfo(title, duration, price) {
    modalTitle.innerHTML = "More about " + duration + " month(s) of " + title + " rank";

    var perks;
    if(title === 'donator') {
        perks = `
            - 2 extra homes<br>
            - Access to your enderchest anywhere with /enderchest<br>
            - Custom nicknames with /nick<br>
            - Custom particle trails with /particle
        `;
    } else {
        perks = `
            - Allows you to fly inside of claims with /fly<br>
            - 11 extra chunks of claims<br>
            - 4 extra homes<br>
            - Custom item names with /anvil<br>
            - And all the perks included in the donator rank
        `;
    }

    modalDescription.innerHTML = `
        This purchase includes ${duration} month(s) of ${title} rank for ${price} USD.<br><br>${perks}
    `;

    showSplash();
    showModal();
    lockScroll();
    return false;
}

function showHomeInfo(amount, price) {
    modalTitle.innerHTML = `More about ${amount} home(s)`;

    var perks = `+${amount} home(s) added on top of your existing homes`;
    modalDescription.innerHTML = `This purchase includes ${amount} home(s) for ${price} USD.<br><br>${perks}`

    showSplash();
    showModal();
    lockScroll();
    return false;
}

function showPackInfo(pack, price) {
    modalTitle.innerHTML = `More about the ${pack} pack`;

    var perks;
    if(pack === 'starter') {
        perks = `
            - 1 iron pickaxe enchanted with unbreaking III<br>
            - 32 coal<br>
            - 2 furnaces<br>
            - 32 torches<br>
            - 8 gold ingots<br>
            - 4 iron ingots<br>
            - 1 diamond
        `;

    } else if(pack === 'music') {
        perks = `
            - Disc 13<br>
            - Cat disc<br>
            - Block disc<br>
            - Chirp disc<br>
            - Far disc<br>
            - Mall disc<br>
            - Mellohi disc<br>
            - Stal disc<br>
            - Strad disc<br>
            - Ward disc<br>
            - Disc 11<br>
            - Wait disc<br>
            - Pigstep disc<br>
            - 1 jukebox<br>
            - 2 note blocks
        `;

    } else if(pack === 'redstone') {
        perks = `
            - 6 sticky pistons<br>
            - 6 pistons<br>
            - 64 redstone<br>
            - 12 comparators<br>
            - 4 droppers<br>
            - 6 hoppers<br>
            - 16 redstone torches<br>
            - 6 observers<br>
            - 6 levers<br>
            - 8 levers<br>
            - 3 light sensors<br>
            - 3 target blocks
        `;

    } else if(pack === 'PVP') {
        perks = `
            - 1 Iron helmet enchanted with unbreaking III, thorns III, protection III, curse of vanishsing<br>
            - 1 Iron chestplate enchanted with unbreaking III, thorns III, protection III, curse of vanishing<br>
            - Iron leggings enchanted with unbreaking III, thorns III, protection III, curse of vanishing<br>
            - Iron boots enchanted with unbreaking III, thorns III, protection III, curse of vanishing<br>
            - 2 golden apples<br>
            - 2 ender pearls<br>
            - 1 iron sword enchanted with sharpness IV, unbreaking II, fire aspect II
        `;

    }
    modalDescription.innerHTML = `This purchase includes the ${pack} pack for ${price} USD.<br><br>${perks}`

    showSplash();
    showModal();
    lockScroll();
    return false;
}

function hideInfo() {
    hideModal();
    hideSplash();
    unlockScroll();
    return false;
}