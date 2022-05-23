const inventory = newInventory()
move(inventory).to(0, 0)
const character = newImage('assets/green-character/static.gif')
//create a function and passing that function to moveWithArrowKeys
//To change the character's appearance, we just need to update its src attribute.
function handleDirectionChange(direction){ //direction can also accept it as a parameter
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}
move(character).withArrowKeys(100, 250, handleDirectionChange) // passing that function to with Arrowkeys
//character should move with another image, like the tree
//move(newImage('assets/tree.png')).withArrowKeys(200, 450,handleDirectio

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)