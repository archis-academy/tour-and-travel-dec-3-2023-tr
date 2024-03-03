
const touchButton = document.getElementById('touchBtn');


touchButton.addEventListener('click', function() {
 
  const buildScreen = document.getElementById('touchBuild-screen');
  
  
  if (buildScreen.style.display === 'none') {
   
    buildScreen.style.display = 'block';
  } else {
   
    buildScreen.style.display = 'none';
  }
});

const close = document.getElementById('closeBtn');
close.addEventListener('click', function() {
    
    const buildScreen = document.getElementById('touchBuild-screen');
    
    buildScreen.style.display = 'none';
  });
