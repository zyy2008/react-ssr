import { request } from 'umi';

const baseUrl = 'https://api.americanmuslimtoday.net/'

const ajax = (url,options)=>request(url,{...options,prefix:baseUrl, skipErrorHandler: true,errorHandler:err=>{
    console.log(err)
}})

export default ajax