import { api, LightningElement } from 'lwc';

class ChildClass{
    constructor(tsu,sn,te,tsl,t,pr){
this.timestamp_utc = tsu;
this.snow = sn;
this.temp = te;
this.timestamp_local = tsl;
this.ts = t;
this.precip = pr;
    }
}

export default class WeatherChild extends LightningElement {

    @api weatherDataFromSubParent;

    dataElement = null;
    connectedCallback(){
        this.processSubparentData();
    }

    processSubparentData(){
        try{
            this.dataElement = this.weatherDataFromSubParent; // new ChildClass(tsu,sn,te,tsl,t,pr);
            console.log('----WeatherChild----');
            console.log(this.dataElement);
        }catch(ex){
            console.log('----processSubparentDataerror----');
            console.log(ex);
        }
        
    }
    
}