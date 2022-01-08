var aboutus
var home;
var contacts;
var services;
//////services//////////services/////////services/////////services/////////
//services//////////services/////////services/////////services//////services
//////services//////////services/////////services/////////services/////////
var FacialsBody = document.getElementById("FacialsBody");
var DermaplaningBody = document.getElementById("DermaplaningBody");
var BrowTintingBody = document.getElementById("BrowTintingBody");
var LashExtensionsBody = document.getElementById("LashExtensionsBody");
var LashExtensions = document.getElementById("LashExtensions");
var WaxingBody = document.getElementById("WaxingBody");
var ChemicalPeelsBody = document.getElementById("ChemicalPeelsBody");
var BrowShapingBody = document.getElementById("BrowShapingBody");
var Facials = document.getElementById("Facials");
var Dermaplaning = document.getElementById("Dermaplaning");
var BrowTinting = document.getElementById("BrowTinting");
var Waxing = document.getElementById("Waxing");
var ChemicalPeels = document.getElementById("ChemicalPeels");
var BrowShaping = document.getElementById("BrowShaping");

//home/////////home////////home//////////home///////home//////home///////
/////////home////////home//////////home///////home//////home//////home//
//home/////////home////////home//////////home///////home//////home/////

var SkinBody = document.getElementById("SkinBody");
var Skin = document.getElementById("Skin");
var HAboutBody = document.getElementById("HAboutBody");
var HAbout = document.getElementById("HAbout");
var HAbout2 = document.getElementById("HAbout2");
var OurServices = document.getElementById('OurServices');
var OurServices2 = document.getElementById('OurServices2');

var HomeChenovaAes = document.getElementById('HomeChenovaAes');
var HomeChenova = document.getElementById('HomeChenova');
var HomeMission = document.getElementById('HomeMission');
var HomePhilosophy = document.getElementById('HomePhilosophy');




////contacts////contacts////contacts////contacts////contacts////contacts/
var contactname = document.getElementById("contactname");
var contactaddress = document.getElementById('contactaddress');
var contactemil = document.getElementById("contactemil");
var contactphone = document.getElementById("contactphone");



///about///
var aboutAboutBody = document.getElementById('aboutAboutBody');
var aboutMission = document.getElementById('aboutMission');
var aboutCheSub = document.getElementById('aboutCheSub');
var aboutCheBody = document.getElementById('aboutCheBody');
var aboutPhilosophy = document.getElementById('aboutPhilosophy');


window.onload = codeAddress;





function codeAddress() {
    //alert('ok');
    getHomepage();
    getAboutUs();
    getContacts();
    getServices();


}
async function getHomepage() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("https://chenova.net/tryathing.php", requestOptions)
            .then(response => response.json())
            .then(result => home = result)
            .catch(error => console.log('error', error));
        console.log(home[0].Title);
        SkinBody.innerHTML = home[2].Body;
        Skin.innerHTML = home[2].Title;
        HAboutBody.innerHTML = home[1].Body;
        HAbout.innerHTML = home[1].Title.split(" ")[0] + '<span class="mybaby" id="HAbout2"></span>';
        var HAbout2 = document.getElementById("HAbout2");
        HAbout2.innerHTML = ' ' + home[1].Title.split(" ")[1];


        return home
    } catch (error) {
        console.log(error);
    }
}

async function getAboutUs() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("https://chenova.net/AboutUsPage.php", requestOptions)
            .then(response => response.json())
            .then(result => aboutus = result)
            .catch(error => console.log('error', error));
        console.log(aboutus[1].Title);
        //thisa.innerHTML = aboutus[1].Title;
        // HomeChenovaAes.innerHTML = aboutus[1].Title;
        // HomeChenova.innerHTML = aboutus[3].Title;
        // HomeMission.innerHTML = aboutus[1].Title;
        // HomePhilosophy.innerHTML = aboutus[1].Title;

        aboutAboutBody.innerHTML = aboutus[1].Body;
        aboutMission.innerHTML = aboutus[2].Body;
       // aboutCheSub.innerHTML = aboutus[3].Title;
        aboutCheBody.innerHTML = aboutus[3].Body;
        aboutPhilosophy.innerHTML = aboutus[4].Body;


        return aboutus
    } catch (error) {
        console.log(error);
    }
}

async function getContacts() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("https://chenova.net/contacts.php", requestOptions)
            .then(response => response.json())
            .then(result => contacts = result)
            .catch(error => console.log('error', error));
        console.log(contacts[1].Title);
        //thisa.innerHTML = aboutus[1].Title;
        contactname.innerHTML = contacts[0].name;
        contactaddress.innerHTML = contacts[0].address;
        contactemil.innerHTML = contacts[0].email;
        contactphone.innerHTML = contacts[0].phone;
        return contacts
    } catch (error) {
        console.log(error);
    }
}

async function getServices() {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("https://chenova.net/Service.php", requestOptions)
            .then(response => response.json())
            .then(result => services = result)
            .catch(error => console.log('error', error));
        console.log(services[0].Title);
        FacialsBody.innerHTML = services[0].Body;
        Facials.innerHTML = services[0].Title;
        DermaplaningBody.innerHTML = services[1].Body;
        Dermaplaning.innerHTML = services[1].Title;
        BrowTinting.innerHTML = services[2].Title;
        BrowTintingBody.innerHTML = services[2].Body;
        LashExtensionsBody.innerHTML = services[3].Body;
        LashExtensions.innerHTML = services[3].Title;
        WaxingBody.innerHTML = services[4].Body;
        Waxing.innerHTML = services[4].Title;
        ChemicalPeelsBody.innerHTML = services[5].Body;
        ChemicalPeels.innerHTML = services[5].Title;
        BrowShapingBody.innerHTML = services[6].Body;
        BrowShaping.innerHTML = services[6].Title;




        return services
    } catch (error) {
        console.log(error);
    }
}



