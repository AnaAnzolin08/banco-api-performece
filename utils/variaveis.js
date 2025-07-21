
const config = JSON.parse(open('/../config/local.config.json'));
export function pegarBaseUrl() {
    //return __ENV.BASE_URL || configLocal.baseUrl;
    return __ENV.BASE_URL || config.baseUrl;
    
}