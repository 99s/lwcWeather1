import { api, LightningElement } from 'lwc';
const DATACOLUMNS = [
    {label: 'rh', fieldName:'rh'},
    {label: 'pod', fieldName:'pod'},
    {label: 'lon', fieldName:'lon'},
    {label: 'pres', fieldName:'pres'},
    {label: 'timezone', fieldName:'timezone'},
    {label: 'ob_time', fieldName:'ob_time'},
    {label: 'country_code', fieldName:'country_code'},
    {label: 'clouds', fieldName:'clouds'},
    {label: 'solar_rad', fieldName:'solar_rad'},
    {label: 'state_code', fieldName:'state_code'},
    {label: 'city_name', fieldName:'city_name'},
    {label: 'wind_spd', fieldName:'wind_spd'},
    {label: 'wind_cdir_full', fieldName:'wind_cdir_full'},
    {label: 'wind_cdir', fieldName:'wind_cdir'},
    {label: 'slp', fieldName:'slp'},
    {label: 'vis', fieldName:'vis'},
    {label: 'h_angle', fieldName:'h_angle'},
    {label: 'sunset', fieldName:'sunset'},
    {label: 'dni', fieldName:'dni'},
    {label: 'dewpt', fieldName:'dewpt'},
    {label: 'snow', fieldName:'snow'},
    {label: 'precip', fieldName:'precip'},
    {label: 'wind_dir', fieldName:'wind_dir'},
    {label: 'sunrise', fieldName:'sunrise'},
    {label: 'ghi', fieldName:'ghi'},
    {label: 'dhi', fieldName:'dhi'},
    {label: 'aqi', fieldName:'aqi'},
    {label: 'dni', fieldName:'dni'},
    {label: 'lat', fieldName:'lat'},
    {label: 'weather.description', fieldName:'weather.description'},
    {label: 'datetime', fieldName:'datetime'},
    {label: 'temp', fieldName:'temp'},
    {label: 'station', fieldName:'station'},
    {label: 'elev_angle', fieldName:'elev_angle'},
    {label: 'app_temp', fieldName:'app_temp'}   
];

const MINUTELYCOLUMNS = [
    {label: 'timestamp_utc', fieldName:'timestamp_utc'},
    {label: 'snow', fieldName:'snow'},
    {label: 'temp', fieldName:'temp'},
    {label: 'timestamp_local', fieldName:'ptimestamp_localres'},
    {label: 'ts', fieldName:'ts'},
    {label: 'precip', fieldName:'precip'}
];
export default class WeatherSubParent1 extends LightningElement {
    @api weatherDataFromParent;

    weatherDataArray;
    weatherMinutelyArray; 
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
        return;
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
           let dta =JSON.parse(dt);
            console.log('--getDataFromParent--');
       
            if(dta.data != null && dta.data.length > 0){
                
                this.processWeatherdata(dta.data);
            }
            if(dta.minutely != null && dta.minutely.length > 0){
               
                this.processMinutelydata(dta.minutely);
            }
            this.template.querySelector('c-weather-child').getDataFromSubParent(dt);
        }catch(e){
            console.log('--getDataFromParent--Error');
            console.log(e);
        }
        
    }

    processWeatherdata(dataArray){
        try{
            if(dataArray != null && dataArray.length > 0){
               console.log('processWeatherdata') ;
                this.weatherDataArray = dataArray;
                console.log(this.weatherDataArray) ;
                
            }
        }catch(e){
            console.log('error processWeatherdata') ;
            console.log(e) ;
        }
    }
    processMinutelydata(dataArray){
        try{
            if(dataArray != null && dataArray.length > 0){
                console.log('processMinutelydata') ;
                this.weatherMinutelyArray = dataArray;
                console.log(this.weatherMinutelyArray) ;
            }
        }catch(e){
            console.log('error processMinutelydata') ;
            console.log(e) ;
        }
    }


}