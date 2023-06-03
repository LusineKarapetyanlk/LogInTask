

function getLSData (email, pass) {
    let dataExist = false
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedObject = JSON.parse(localStorage.getItem(key));
          
            
            if (typeof storedObject === 'object' &&  storedObject.email === email &&  storedObject.pass === pass) {
            
              console.log('Object exists in local storage!!');
                dataExist= !dataExist
              break; 
            }
    }
   return dataExist
}


export default getLSData