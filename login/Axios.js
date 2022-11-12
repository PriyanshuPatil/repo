import axios from 'axios'
import { useState } from 'react';
export function CreateAccount(data){
    let ans= axios(
        {
            method:"POST",
            url:"http://localhost:3000/login_data",
            data:data
    }
   
    )
    console.log(ans);
    console.log("hello")
    return ans;
    }

    export function LoginAccount(data){
  let ans= axios(
            {
                method:"POST",
                url:"http://localhost:3000/login_data",
                data:data
        }
       


        )
        return ans;
        }
   