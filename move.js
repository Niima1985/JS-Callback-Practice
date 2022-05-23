// create a move function that will allow us to use it on any image
// create another function moveWithArrowKeys() and attach it to the object we return
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        element.style.zIndex = -1; //to make the character appear to be above the other images
    }

    function moveWithArrowKeys(left, bottom, callback){ // handleDirectionChange() function accept as a parameter(callback) inside of moveWithArrowKeys
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px' //replace character with element as we can used different character as well
        element.style.bottom = y + 'px'
    
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        // create an event listeners to change the direction whenever the user presses one of the arrow keys
        // create another callback function and inside the call back function we will need to check which key has presses using e.key  
        document.addEventListener('keydown', function(e){ //"e" is an object containing details about the event that fired.
            if(e.repeat) return; //we will use this line to skip any repeat events.
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction) //direction is in scope where we call handleDirectionChange. Therefore, we can pass it as an argument.
        })
        //create one more event listener to stop the character when the user releases a key.
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction) //call the handleDirectionChange where direction pass it as an arguement.
        })
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}


