import './style.css';
import restaurant from './restaurant.jpg';


const contactComp= ()=>{    
        console.log("contact")

        const globalElement = document.createElement('div');   
        globalElement.style.cssText="display:flex;flex-direction:column;justify-content:center;text-align:center;"             

        ///mail 
        const contentElement = document.createElement('div');                
        let textElement = document.createElement('div');
        textElement.className = "textContact";
        let snippet3 = document.createTextNode("For more information, send email to: juanito@juanito-rest.com");
        textElement.appendChild(snippet3);
        contentElement.appendChild(textElement);


        ///showing a map
        const contentElement2 = document.createElement('H2');                
        let snippet2 = document.createTextNode("Or visit us:");
        contentElement2.appendChild(snippet2);

        const contentElement3 = document.createElement('div');                
        contentElement3.innerHTML=" <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2848963682663!2d-60.75319641198171!3d-31.66849121382591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a88a875bc171%3A0x3ab6de74b58a36f1!2sPuente%20Carretero%20Santa%20Fe%20-%20Santo%20Tom%C3%A9!5e0!3m2!1ses-419!2sar!4v1680125825690!5m2!1ses-419!2sar' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
        contentElement3.style.cssText="display:flex;justify-content:center;width:100%";
        globalElement.appendChild(contentElement);
        globalElement.appendChild(contentElement2);
        globalElement.appendChild(contentElement3);

        return globalElement;    
}

export {contactComp};