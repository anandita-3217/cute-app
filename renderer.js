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
    alert('You did something fun!');
  });
  
  document.getElementById('action2').addEventListener('click', () => {
    document.querySelector('.mascot img').classList.add('spin');
    setTimeout(() => {
      document.querySelector('.mascot img').classList.remove('spin');
    }, 1000);
  });