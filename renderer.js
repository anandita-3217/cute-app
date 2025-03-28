document.getElementById('minimize-btn').addEventListener('click', () => {
    window.electronAPI.minimizeWindow();
  });
document.getElementById('maximize-btn').addEventListener('click', () => {
    window.electronAPI.maximizeWindow();
  });
  
  document.getElementById('close-btn').addEventListener('click', () => {
    window.electronAPI.closeWindow();
  });

  document.getElementById('action1').addEventListener('click', () => {
    // Enhanced fun action with color change
    const mascot = document.querySelector('.mascot img');
    mascot.classList.add('rainbow-effect');
    setTimeout(() => {
        mascot.classList.remove('rainbow-effect');
    }, 20000);
});

  
  document.getElementById('action2').addEventListener('click', () => {
    document.querySelector('.mascot img').classList.add('spin');
    setTimeout(() => {
      document.querySelector('.mascot img').classList.remove('spin');
    }, 1000);
  });
  
  let secretClickCount = 0;
  document.querySelector.apply('.mascot img').addEventListener('click',() =>{
    secretClickCount++;
    if(secretClickCount >= 5){
      alert('You found the secret! ✨');
      secretClickCount = 0;
    }
  });