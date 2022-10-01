
    (function()

{


    function Start()
    {

     
        document.querySelector('form').addEventListener('submit', (e) => {
            const data = Object.fromEntries(new FormData(e.target).entries());
            console.log(data)
            });
        
          
    }
    window.addEventListener('load',Start);
    
})();
