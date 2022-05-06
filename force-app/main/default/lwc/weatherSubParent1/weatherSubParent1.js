import { api, LightningElement } from 'lwc';
import testDataFetch from './testDataFetch';
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

const TESTCOLUMNS = [
    {label: 'Color', fieldName:'color'},
    {label: 'Name', fieldName:'name'},
    {label: 'Number', fieldName:'number'}
];
const TESTURLDATACOLUMNS = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class WeatherSubParent1 extends LightningElement {
    @api weatherDataFromParent;

    weatherDataArray;
    weatherMinutelyArray;
    testDataArray = [];
    testFetchData = [];

    dataColumns = DATACOLUMNS;
    testColumns = TESTCOLUMNS;
    minutelyColumns = MINUTELYCOLUMNS;
    testFetchCol = TESTURLDATACOLUMNS;

    
    constructor(){
        super();
        console.log('B. weather sub-parent constructor');
    }
async testFetchDataFunc(){
    try{
        this.testFetchData = await testDataFetch({ amountOfRecords: 100 });
        console.log('~~~~~~~~~~~~~~~~~~');
        console.log(this.testFetchData);
        
        }catch(ex){
            console.log('testFetchDataFunc--');
            console.log(ex);
        }
}
     testDataArrayFunc(){
        this.testDataArray.push(
            {
                'id':'1',
                'color':'red',
                'name':'redu',
                'number':'One'
            }
        );
        this.testDataArray.push(
            {
                'id':'2',
                'color':'blue',
                'name':'bulu',
                'number':'Two'
            }
        );
        this.testDataArray.push(
            {
                'id':'3',
                'color':'green',
                'name':'girgiti',
                'number':'Three'
            }
        );
         console.log(this.testDataArray);
     }

    connectedCallback(){
        console.log('3. weather sub parent connectedCallback');
        this.testDataArrayFunc();
        this.testFetchDataFunc();
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