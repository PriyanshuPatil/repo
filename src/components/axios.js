import axios from 'axios';
export function Getpost(limit,page){
return axios(
    {
        method:"GET",
        url:"http://localhost:8080/products",
        params:{
            _limit:limit,
            _page:page
        }
}
)

}

export function Postpost(data){
    return axios(
        {
            method:"POST",
            url:"http://localhost:8080/products",
            data:data
    }
    )
    
    }