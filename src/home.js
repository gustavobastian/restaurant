import './style.css';
import restaurant from './restaurant.jpg';


const homeComp= ()=>{    
        console.log("here")
        const contentElement = document.createElement('div');
        let imgContent = document.createElement('div');
        imgContent.className = "centerImage";
        let imgElement = new Image();
        imgElement.src = restaurant;
        imgElement.style.cssText = "border-radius:100px;";
        imgContent.appendChild(imgElement);
        contentElement.appendChild(imgContent);
        let textElement = document.createElement('div');
        textElement.className = "textBottom";
        let snippet2 = document.createTextNode("A very special place with low volume music, relax and excellent food! Ideal for a good moment!");
        textElement.appendChild(snippet2);
        contentElement.appendChild(textElement);
        return contentElement;    
}

export {homeComp};
