import axios from "axios";
export class apiservice {

   constructor() {}
     // Login request
     async login(data){
      let response = await axios.post(`http://localhost:5000/api/Useraccounts/login`, data);
      console.log(response.data);
      return response.data;
    }
   // get contacts data registerd under a single user account........
   async getContact(id){
     let response = await axios.get(`http://localhost:5000/api//contacts/${id}/getContacts`);
     console.log(response.data);
     return response.data;
   }
   //get specific data of contacts........
   async getContactById(id){
     let response = await axios.get(`http://localhost:5000/api/contacts/${id}`);
     console.log(response);
     return response;
   }
   // Send updated contact information.... ...
   async editContacts(id, data){
     let response = await axios.patch(`http://localhost:5000/api/contacts/${id}`, data);
     console.log(response.data);
     return response.data;
   }
   // To Create new user accounts
   async createAccount(data){
     let response = await axios.post(`http://localhost:5000/api/Useraccounts`, data);
     console.log(response.data);
     return response.data;
   }
   // To Delete contacts in a user account
   async deleteContact(id){
     let response = await axios.delete(`http://localhost:5000/api/contacts/${id}`);
     console.log(response);
     return response;
   }
   // update Accounts Informations ( User accounts)
   async updateAccount(id, data){
     let response = await axios.patch(`http://localhost:5000/api/Useraccounts/${id}`, data);
     console.log(response.data);
     return response.data;
   }
   // Get Accounts Informaiton
   async getAccountInfo(id){
     let response = await axios.get(`http://localhost:5000/api/Useraccounts/${id}`);
     console.log(response);
     return response;
   }


}
