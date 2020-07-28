document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.bnner').style.display = 'none';
    document.querySelector('.form-cntainer').style.cssText = 'opacity: 1; visibility: visible';
    
});
document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.bnner').style.display = 'flex';
    document.querySelector('.form-cntainer').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.cntainer').style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(images/bg1.jpeg) center no-repeat; background-size: cover';
});
 window.onscroll=function(){myFunction()};
 var nav=document.querySelector(".nav");
 var sticky=nav.offsetTop;
 function myFunction(){
     if(window.pageYOffset>=sticky){
         nav.classList.add("sticky");

     }
     else {
        nav.classList.remove("sticky");
      }
    }

    
 // Get the modal01
 var modal = document.getElementById("myModal");
              
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.querySelector(".img1");
 var modalImg = document.getElementById("img01");
  
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
 
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }

     // Get the modal02
 var modal = document.getElementById("myModal");
              
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.querySelector(".img2");
 var modalImg = document.getElementById("img01");
  
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
 
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }
    // Get the modal03
    var modal = document.getElementById("myModal");
              
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.querySelector(".img3");
    var modalImg = document.getElementById("img01");
     
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
   

 