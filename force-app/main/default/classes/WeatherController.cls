public with sharing class WeatherController {
    static String baseApi = '';
    static String apiKey = '';
    
        public static String getApiKey(){
                    String aK = '';
                    Map<String, weatherApi_setting__mdt> mapEd = weatherApi_setting__mdt.getAll();
            for(String nameEmailDomain : mapEd.keySet()){
                aK = mapEd.get(nameEmailDomain).weatherapiKey__c;

            }

            return aK;

    }
    @AuraEnabled(Cacheable=true)
    public static String  apiCaller(String apiInput){
        String ret;
        apiKey = getApiKey();
        baseApi = 'https://api.weatherbit.io/';
        try{
            String exampleReq = baseApi+'v2.0/current?lat=35.7796&lon=-78.6382&key='+apiKey+'&include=minutely';
            ret+=exampleReq;
            HttpRequest req = new HttpRequest();
            req.setEndpoint(exampleReq);
            req.setMethod('GET');
            Http http = new Http();
            HTTPResponse res = http.send(req);
            ret += res.getBody();
            System.debug(ret);
        }catch (Exception e){
           
            ret += e.getMessage();
            System.debug('err:'+ret);
        }
        return ret;
    }
    @AuraEnabled(Cacheable=true)
    public static String  apiCaller2(String apiInput){
        return 'apiCaller2:'+apiInput;
    }
    @AuraEnabled(Cacheable=true)
    public static String  apiCaller3(){
        return 'apiCaller3';
    }
}
