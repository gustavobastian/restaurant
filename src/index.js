import './style.css';
import restaurant from './restaurant.jpg';

function component(){
    console.log("here")
    let contentElement=document.createElement('div')    
    let p= document.createElement('h1'); 
    let snippet = document.createTextNode("Restaurant juanito");
    p.appendChild(snippet);
    contentElement.appendChild(p);
    let imgElement= new Image();;    
    imgElement.src = restaurant;    
    imgElement.width="50%";
    contentElement.appendChild(imgElement);
    let textElement=document.createElement('p');
    let snippet2 = document.createTextNode("A very special place. Good music, relax and excellent food! Ideal for a good moment!");
    textElement.appendChild(snippet2);
    contentElement.appendChild(textElement);
    return contentElement;
}
document.body.appendChild(component());

