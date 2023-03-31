import './style.css';
import choripan from './Choripan.png';
import Caesar_salad from './Caesar_salad.jpg';
import glass_water from './glass_water.jpg';

let dataMenu2=require('./data.json');





const menuComp= ()=>{    
    

    let menuData=dataMenu2;

    const allcontentElement = document.createElement('div');
    allcontentElement.className="allMenu";

    menuData.forEach(element => {
        console.log(JSON.stringify(element));    
        console.log(JSON.stringify(element.img));    
        
            const contentCardL=document.createElement('div');
            contentCardL.className="menu";
            const contentElement = document.createElement('div');
            contentElement.style.cssText="display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:100%;"
            let nameContent = document.createElement('div');
            let snippet = document.createTextNode(element.name);
            nameContent.appendChild(snippet);
            nameContent.className = "textMenuName";
            contentElement.appendChild(nameContent);
            /* todo adding picture*/
            /*
            let imgContent = document.createElement('div');
            imgContent.className = "menuImage";
            let imgElement = new Image();
            imgElement.src = element.img;
            imgElement.style.cssText = "border-radius:100px; ";
            imgContent.appendChild(imgElement);
            contentElement.appendChild(imgContent);*/
            let textElement = document.createElement('div');
            textElement.className = "textMenu";
            let snippet2 = document.createTextNode(element.text);
            textElement.appendChild(snippet2);
            contentElement.appendChild(textElement);

            let textElement2 = document.createElement('div');
            textElement2.className = "textMenu";
            let snippet3 = document.createTextNode("Price:"+element.price+"$");
            textElement2.appendChild(snippet3);
            contentElement.appendChild(textElement2);
            contentCardL.appendChild(contentElement);
            allcontentElement.appendChild(contentCardL);
            console.log("adding element")
        
    });


    
    return allcontentElement;    
}

export {menuComp};
