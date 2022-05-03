import { LightningElement } from 'lwc';
import apiCaller from '@salesforce/apex/WeatherController.apiCaller';
import apiCaller2 from '@salesforce/apex/WeatherController.apiCaller2';
import apiCaller3 from '@salesforce/apex/WeatherController.apiCaller3';

export default class WeatherParent extends LightningElement {

    weatherData = 'no-Data';
    weatherError = 'no-Error';
constructor(){
    super();
    console.log('A. weather parent constructor');
}
    connectedCallback(){
       console.log('1. weather parent connectedCallback');
        this.weatherApiCaller();
       
    }

    renderedCallback(){
        console.log('2. weather parent renderedCallback');
    }

    weatherApiCaller(){
        console.log('~~weatherApiCaller----');
        try{

            apiCaller({apiInput:'apiInput'}).then(result=>{
                this.weatherData = result;
                this.template.querySelector('c-weather-sub-parent1').getDataFromParent(result);
               // console.log(result);
              //  console.log(JSON.stringify(result));
            }).catch(error=>{
                this.weatherError = error;
                console.log('-----error-----');
                console.log(error);
            })
            console.log('~-weatherApiCaller-~');
        }  
        catch(e){
            console.log('weatherApiCaller-----error-----weatherApiCaller');
            console.log(e);
        }
    }
}