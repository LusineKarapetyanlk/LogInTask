

function setLSData (email, pass) {
   
    const newData={
        email,
        pass
    }
    const serialNumber = Math.random()
    

    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const storedObject = JSON.parse(localStorage.getItem(key));
      
        
    //     if (typeof storedObject === 'object' &&  storedObject.email === email &&  storedObject.pass === pass) {
    //       // Object exists
    //       console.log('Object exists in local storage. Please LOG IN!!');
    //       break; 
    //     }
            
        
    //   }
      console.log('Object does not exist in local storage')
      localStorage.setItem(`${serialNumber}`,JSON.stringify(newData))   
    
}


export default setLSData