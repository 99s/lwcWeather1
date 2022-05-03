import { api, LightningElement } from 'lwc';

export default class WeatherSubParent1 extends LightningElement {
    @api weatherDataFromParent;

    weatherDataArray;
    constructor(){
        super();
        console.log('B. weather sub-parent constructor');
    }
    connectedCallback(){
        console.log('3. weather sub parent connectedCallback');
    }
    renderedCallback(){
        console.log('4. weather sub parent renderedCallback');
        this.processParentData();
    }

    processParentData(){
        try{
            console.log('S---weatherDataFromParent---P');
            console.log(this.weatherDataFromParent);
            
            let data = JSON.stringify(this.weatherDataFromParent);
            if(data != null){
                    this.weatherDataArray = data.minutely;

                    this.weatherDataFromParent = data.minutely;
            }
        }catch(ex){
            console.log('processParentData--'+ex);
        }
        
    }


    @api getDataFromParent(dt){
        try{
            console.log('--getDataFromParent--');
            console.log(dt);
            this.template.querySelector('c-weather-child').getDataFromSubParent(dt);
        }catch(e){
            console.log('--getDataFromParent--Error');
            console.log(e);
        }
        
    }


}