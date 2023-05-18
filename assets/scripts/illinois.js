function addAlertToButton() {
    const button = document.querySelector('button.btn.btnReg');
    
    if (button) {
      button.addEventListener('click', function() {
        alert('Button clicked!');
      });
    } else {
      console.log('No button with the classes "btn btnReg" found.');
    }
  }
  
  addAlertToButton();