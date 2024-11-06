
    let counter = 1

    const counterDisplay = document.getElementById('counter')
    const increaseButton = document.getElementById('increaseButton')
    const decreaseButton = document.getElementById('decreaseButton')
    
    function updateCounter(){
        counterDisplay.textContent = counter;
    };
    
    increaseButton.addEventListener('click', () => {
        counter++;
        updateCounter();
    });
    
    decreaseButton.addEventListener('click', () => {
        counter--;
        updateCounter();
    
    });

    


