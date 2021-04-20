
const closeNav=()=>{
    const getElement= document.querySelector('.sidebar');
    getElement.style.display="none";
    getElement.style.left="-250px"


    const anotherElement=document.querySelector('.homepage')
    anotherElement.style.marginLeft="0";

    const togglebtn=document.querySelector('.nav-toggle')
    togglebtn.style.left="0"

}

const openNav=()=>{
    const getElement= document.querySelector('.sidebar');
    getElement.style.display="block";
    getElement.style.left="0"

    const anotherElement=document.querySelector('.homepage')
    anotherElement.style.marginLeft = "250px";
    
    const togglebtn=document.querySelector('.nav-toggle')
    togglebtn.style.left="250px"
}







  
