import { api, LightningElement } from 'lwc';

export default class WeatherSubParent1 extends LightningElement {
    @api weatherDataFromParent;

    weatherDataArray;

    connectedCallback(){
        this.processParentData();
    }

    processParentData(){
        try{
            console.log('---weatherDataFromParent---');
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


}