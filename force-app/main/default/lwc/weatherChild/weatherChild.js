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

     @api weatherElement = null;

    constructor(){
        super();
        console.log('C. weather child constructor');
    }
    connectedCallback(){
        console.log('5. weather child connectedCallback');   
    }

    renderedCallback(){
        console.log('6. weather child renderedCallback');
        //this.processSubparentData();
    }

    @api getDataFromSubParent(dt){
    
        console.log('--getDataFromSubParent--');

        console.log(dt);
        this.weatherElement = new ChildClass(
            dt.timestamp_utc ,
            dt.snow ,
            dt.temp ,
            dt.timestamp_local,
            dt.ts,
            dt.precip
        );



    }
    getDataFromLwc(dt){
    
        console.log('--getDataFromSubParent--');

        console.log(dt);
        this.dataElement = new ChildClass(
            dt.timestamp_utc ,
            dt.snow ,
            dt.temp ,
            dt.timestamp_local,
            dt.ts,
            dt.precip
        );



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