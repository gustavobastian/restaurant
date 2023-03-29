import './style.css';
import restaurant from './restaurant.jpg';
import {homeComp} from './home.js'
import {menuComp} from './menu.js'
import {contactComp} from './contact.js'

function component(){
    let contentElement=document.createElement('div') 
    contentElement.className="mainContent";
    //generating header
    let headerElement=document.createElement('header');
    let headerDiv=document.createElement('div');
    let headerDiv2=document.createElement('div');
    let headerDiv3=document.createElement('div');    
    let headerDiv5=document.createElement('div');
    headerDiv.innerHTML="<p> </p>";
    headerDiv2.innerHTML="<p> </p>";
    headerDiv3.innerHTML="<p>  </p>";
    
    headerDiv5.innerHTML="<p>   </p>";
    
    
    let navBarClass=document.createElement('div');
    navBarClass.className="navBarClass";

    let navBarL=document.createElement('div');
    let snippetL = document.createTextNode("Home");
    navBarL.className="navBarText";
    navBarL.appendChild(snippetL)

    let navBarR=document.createElement('div');
    let snippetR = document.createTextNode("Contact");
    navBarR.className="navBarText";
    navBarR.appendChild(snippetR)
    
    let navBarC=document.createElement('div');
    let snippetC = document.createTextNode("Menu");
    navBarC.appendChild(snippetC)
    navBarC.className="navBarText";

    navBarClass.appendChild(navBarL);
    navBarClass.appendChild(navBarC);
    navBarClass.appendChild(navBarR);

    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("Restaurant Juanito");
    navBar.appendChild(snippetLocal);
    navBar.className="titleClass";
    headerElement.appendChild(headerDiv);
    headerElement.appendChild(navBar);
    headerElement.appendChild(headerDiv2);
    headerElement.appendChild(headerDiv3);
    headerElement.appendChild(navBarClass);
    headerElement.appendChild(headerDiv5);

    contentElement.appendChild(headerElement)
    let homeContent= document.createElement('div');    
    contentElement.appendChild(homeContent);
    let menuContent= document.createElement('div');    
    contentElement.appendChild(menuContent);
    let contactContent= document.createElement('div');    
    contentElement.appendChild(contactContent);

    ///dinamic content
    let homeEl = homeComp();
    contentElement.appendChild(homeEl);
    let menuEl = menuComp();
    contentElement.appendChild(menuEl);
    let contactEl = contactComp();
    contentElement.appendChild(contactEl);

    //generating footer

    let footerContent=document.createElement('div');
    footerContent.className="textFooter";
    let snippetFooter = document.createTextNode("Image from Wikimedia Commons by:Simon Burchell");       
    footerContent.appendChild(snippetFooter);
    contentElement.appendChild(footerContent);

    return contentElement;
}
document.body.appendChild(component());

