import './style.css';
import choripan from './Choripan.png';
import Caesar_salad from './Caesar_salad.jpg';

const menuComp= ()=>{    
    console.log("here")
    const allcontentElement = document.createElement('div');

    const contentElement = document.createElement('div');
    contentElement.style.cssText="display:flex;flex-direction:row;justify-content:space-between;"
    let imgContent = document.createElement('div');
    imgContent.className = "centerImage";
    let imgElement = new Image();
    imgElement.src = choripan;
    imgElement.style.cssText = "border-radius:100px; ";
    imgContent.appendChild(imgElement);
    contentElement.appendChild(imgContent);
    let textElement = document.createElement('div');
    textElement.className = "textMenu";
    let snippet2 = document.createTextNode("The choripan is a sandwich from Argentina. ");
    textElement.appendChild(snippet2);
    contentElement.appendChild(textElement);

    let textElement2 = document.createElement('div');
    textElement2.className = "textMenu";
    let snippet3 = document.createTextNode("Price: 100 $");
    textElement2.appendChild(snippet3);
    contentElement.appendChild(textElement2);


    const contentElement2 = document.createElement('div');
    contentElement2.style.cssText="display:flex;flex-direction:row;justify-content:space-between;"
    let imgContent3c = document.createElement('div');
    imgContent3c.className = "centerImage";
    let imgElement3c = new Image();
    imgElement3c.src = Caesar_salad;
    imgElement3c.style.cssText = "border-radius:100px; ";
    imgContent3c.appendChild(imgElement3c);
    contentElement2.appendChild(imgContent3c);
    let textElementC = document.createElement('div');
    textElement.className = "textMenu";
    let snippetC = document.createTextNode("The Caesar salad is light. ");
    textElementC.appendChild(snippetC);
    contentElement2.appendChild(textElementC);

    let textElement2C = document.createElement('div');
    textElement2C.className = "textMenu";
    let snippet3C = document.createTextNode("Price: 50 $");
    textElement2C.appendChild(snippet3C);
    contentElement2.appendChild(textElement2C);


    allcontentElement.appendChild(contentElement);
    allcontentElement.appendChild(contentElement2);
    
    return allcontentElement;    
}

export {menuComp};
