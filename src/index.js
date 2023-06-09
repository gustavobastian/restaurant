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
    navBarL.addEventListener("click",onLeft)

    let navBarR=document.createElement('div');
    let snippetR = document.createTextNode("Contact");
    navBarR.className="navBarText";
    navBarR.appendChild(snippetR)
    navBarR.addEventListener("click",onRight)
    
    let navBarC=document.createElement('div');
    let snippetC = document.createTextNode("Menu");
    navBarC.appendChild(snippetC)
    navBarC.className="navBarText";
    navBarC.addEventListener("click",onCenter)

    navBarClass.appendChild(navBarL);
    navBarClass.appendChild(navBarC);
    navBarClass.appendChild(navBarR);

    let navBar= document.createElement('div'); 
    let snippetLocal = document.createTextNode("JUANITO's Restaurant");
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
    let dinamicContentElement=document.createElement('div') 
    dinamicContentElement.id="dinamicContent";
    dinamicContentElement.className="dinamicContent"
    let homeEl = homeComp();//initial page home
    dinamicContentElement.appendChild(homeEl);
    contentElement.appendChild(dinamicContentElement);


    //generating footer

    let footerContent=document.createElement('div');
    footerContent.className="textFooter";
    let snippetFooter = document.createTextNode("All images from Wikimedia Commons (Simon Burchell,Finn McMissile,stu_spivack,Susan Slater)");       
    footerContent.appendChild(snippetFooter);
    contentElement.appendChild(footerContent);

    return contentElement;
}

function onLeft() {
    console.log("Left Cliked");
    let element=document.getElementById("dinamicContent");
    element.innerHTML=" ";
    let homeEl = homeComp();
    element.appendChild(homeEl);
    
}
function onRight() {
    console.log("Right Cliked");
    let element=document.getElementById("dinamicContent");
    element.innerHTML=" ";    
    let contactEl = contactComp();
    element.appendChild(contactEl);
    
}
function onCenter() {
    console.log("Center Cliked");
    let element=document.getElementById("dinamicContent");
    element.innerHTML=" ";        
    
    let menuEl = menuComp();
    element.appendChild(menuEl);    
}
document.body.appendChild(component());

