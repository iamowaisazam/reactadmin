import { toast } from 'react-toastify';
import axios from 'axios'

export const fetch2 = async  (url,body,method) => {
    
    let token = localStorage.getItem('token');

    if(token){

        let response = await fetch(url,{
            method: method,
            body:JSON.stringify(body),
            headers: new Headers({
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer '+token    
            })
        });

        return response;
    }

    let response = await fetch(url,{
        method: method,
        body:JSON.stringify(body),
        headers: new Headers({
            'Accept': 'application/json',
            'content-type': 'application/json',
        })
    });

    return response;
   
}


export const fetch3 = async  (url,body,method) => {
    
    let token = localStorage.getItem('token');
    let headers = new Headers({
        'Accept': 'application/json',
        'content-type': 'application/json', 
    });

    if(token){
        headers = new Headers({
            'Accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token    
        });
    }

    let values = {
        method: method,
        headers:headers 
    }

    if(body){
        values.body = JSON.stringify(body);
    }

    let result = {};
    try {

        let response = await fetch(url,values);
        let responseJson = await response.json();
        
        console.log(responseJson);

        result.data = responseJson;
        result.success = false;  

        if(response.ok){ 
            result.success = true;  
        }else{
            result.message = 'Some Thing Went Wrong Request Failed';
        }

        return result;
        
    } catch (error) {
        
        console.log(error);
        // toast.warning('you`re offline check your connection');      
        return result; 
    }
   
}



export const fetch4 = async  (url,body,method) => {

    let token = localStorage.getItem('token');
    let headers = {};

    if (token) {
      headers["Authorization"] = 'Bearer '+token ;
    }

    let result = {};
    try {

        let response = await fetch(url,{
            method: method ? method : 'get',
            headers:headers,
            body: body ? body : false, 
         });

        let responseJson = await response.json();
        result.data = responseJson;
        result.success = false;  

        if(response.ok){ 
            result.success = true;  
        }else{
            result.message = 'Some Thing Went Wrong Request Failed';
        }

        return result;
        
    } catch (error) {

        toast.warning(error);      
        return result; 
    }
   
}



export const fetch5 = async  (url,body,method) => {

    let token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers["Authorization"] = 'Bearer '+token ;
    }

    try {

        let res = await axios({
            method: method ? method : 'get',
            url:url,
            data:body ? body : false,
        }).then(function (response) {

                let result = {};
                result.data = response.data;
                result.success = true;
                return result;
        })
        .catch(function (error) {

                let result = {};
                result.data = error.response.data;
                result.success = false; 
                return result
        });

      return res;

    } catch (error) {

        console.log('try catch error');
        let result = {};
        result.data = false;
        result.success = false; 
        return result      
    }
   
}