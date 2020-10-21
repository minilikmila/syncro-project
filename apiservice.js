import axios from "axios";
export class apiservice {

   constructor() {}
   async getContact(id){
     let response = await axios.get(`http://localhost:5000/api//contacts/${id}/getContacts`);
     console.log(response.data);
     return response.data;
   }
   async getContactById(id){
     let response = await axios.get(`http://localhost:5000/api/contacts/${id}`);
     console.log(response);
     return response;
   }

}
