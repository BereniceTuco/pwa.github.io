self.addEventListener('install',(event)=>{
    console.log('sw: install');
   });
   
   self.addEventListener('fetch',(event)=>{
    if (event.request.url.includes('style.css')){
    console.log(event.request.url);
    
    const resp = new Response (
   
       `
       body{
   
               color: red;
               background-color: #000;
   
           }`,
       {
   
           headers: {
               'Content-Type': 'text/css',
           },
       }  
    );
    event.respondWith(resp)
       
    }
   
   
   });




   
   self.addEventListener('fetch',(event)=>{
    if (event.request.url.includes('image1.jpg')){
        const resp = new Response (
            event.respondWith(fetch('images/image2.jpg'))
           
         );
    console.log(event.request.resp);
       
    }
   
   
   });