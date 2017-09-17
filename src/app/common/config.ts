export class CommonConfig{
    private static configs = {
        docRoot : "http://localhost:3000"
    }
    static getConfigs(){
        return CommonConfig.configs;
    }
    static setConfigs(key, value){
        CommonConfig.configs[key]=value;
    }
}