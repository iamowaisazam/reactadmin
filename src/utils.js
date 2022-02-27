import { toast } from 'react-toastify';

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
        console.log(responseJson)
        result.data = responseJson;
        result.success = false;  

        if(response.ok){ 
            result.success = true;  
        }else{
            result.message = 'Some Thing Went Wrong Request Failed';
        }
        
        return result;
        
    } catch (error) {
        
        toast.warning('you`re offline check your connection');      
        return result; 
    }
   
}