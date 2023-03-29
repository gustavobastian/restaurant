import './style.css';
import restaurant from './restaurant.jpg';


const contactComp= ()=>{    
        console.log("contact")
        const contentElement = document.createElement('div');                
        let textElement = document.createElement('div');
        textElement.className = "textBottom";
        let snippet2 = document.createTextNode("for contact, send email to: juanito@juanito-rest.com");
        textElement.appendChild(snippet2);
        contentElement.appendChild(textElement);
        return contentElement;    
}

export {contactComp};