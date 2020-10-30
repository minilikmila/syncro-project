import axios from "axios";
export class apiservice {

   constructor() {}
     // Login request
     async login(data){
      let response = await axios.post(`${process.env.baseUrl}/Useraccounts/login`, data);
      console.log(response.data);
      return response.data;
    }
   // get contacts data registerd under a single user account........
   async getContact(id){
     let response = await axios.get(`${process.env.baseUrl}/contacts/${id}/getContacts`);
     console.log(response.data);
     return response.data;
   }
   //get specific data of contacts........
   async getContactById(id){
     let response = await axios.get(`${process.env.baseUrl}/contacts/${id}`);
     console.log(response);
     return response;
   }
   // Send updated contact information.... ...
   async editContacts(id, data){
     let response = await axios.patch(`${process.env.baseUrl}/contacts/${id}`, data);
     console.log(response.data);
     return response.data;
   }
   // To Create new user accounts
   async createAccount(data){
     let response = await axios.post(`${process.env.baseUrl}/Useraccounts`, data);
     console.log(response.data);
     return response.data;
   }
   // To Delete contacts in a user account
   async deleteContact(id){
     let response = await axios.delete(`${process.env.baseUrl}/contacts/${id}`);
     console.log(response);
     return response;
   }
   // update Accounts Informations ( User accounts)
   async updateAccount(id, data){
     let response = await axios.patch(`${process.env.baseUrl}/Useraccounts/${id}`, data);
     console.log(response.data);
     return response.data;
   }
   // Get Accounts Informaiton
   async getAccountInfo(id){
     let response = await axios.get(`${process.env.baseUrl}/Useraccounts/${id}`);
     console.log(response);
     return response;
   }
  // Delete all contacts of the model (Specific account's record)
  async deleteAllContacts(id){
     let response = await axios.delete(`${process.env.baseUrl}/Useraccounts/${id}/contacts`);
     console.log(response);
     return response;
  }
  /// Remove your user account of the model
  async deleteYourAccount(id){
    let response = await axios.delete(`${process.env.baseUrl}/Useraccounts/${id}`);
    console.log(response);
    return response;
  }
  async uploadImage(image){
    const url = `${process.env.baseUrl}/containers/images/upload`;
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        let fd = new FormData();

        xhr.open("post", url, true);
        fd.append("file", image);
        xhr.send(fd);
    });
  }
}
