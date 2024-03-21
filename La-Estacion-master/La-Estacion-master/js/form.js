var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        form.reset();
        status.innerHTML = "Thanks for your submission!";
        status.classList.add('success')
        setTimeout(() => {
        status.innerHTML = "";
        status.classList.remove('success')
            
        }, 3000);
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add('error')
        setTimeout(() => {
            status.innerHTML = "";
            status.classList.remove('success')
                
            }, 3000);

      });
    }
    form.addEventListener("submit", handleSubmit)