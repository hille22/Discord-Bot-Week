const { ipcRenderer } = require("electron");

class App{
    constructor(){
        console.log("log depuis la page HTML")
        this.initListener();
    }

    initListener(){
        ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
    }

    loadJSON(url){
        return fetch(url).then(data=>data.json()).then(json=>json)
    }

    async onMessage(event, message){

        const json = await this.loadJSON(message.url);


        console.log(message);
        console.log(json);
      
            document.body.style.backgroundImage = `url('${json.results[0].media[0].gif.url}')`;
            document.querySelector("p").innerHTML = message.text;
            //document.body.innerHTML = message.text;
    

        // if(message == "hi"){
           
        //         document.body.style.backgroundImage = "url('https://media.giphy.com/media/3ornjH13tpluslvH20/giphy.gif')";
        //         document.body.innerHTML = message;
            
            
        // }//else {
           // document.body.innerHTML = message;
       // }
        // if(message.image){
        //     const image = document.getElementById("img-source");
        //     image.src = message.image.proxyURL;
        // }
    }

}

window.onload = () => {
    new App();
};


