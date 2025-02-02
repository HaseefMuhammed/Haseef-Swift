(function () {
  const hsAccessibilityDiv = document.querySelector('.hs-accessibility');

  // Only proceed if hs-accessibility div is found
  if (hsAccessibilityDiv) {
      // Create Accessibility Button
      const hsAccessibilityButton = document.createElement("button");
      hsAccessibilityButton.className = "hs-accessibility-btn";
      hsAccessibilityButton.innerHTML = '<span class="hs-accessibility-icon">🧑‍🦽</span>';
      hsAccessibilityDiv.appendChild(hsAccessibilityButton);

      // Create Modal HTML
      const hsModalHTML = `
          <div id="hsAccessibilityModal" class="hs-accessibility-modal">
              <div class="hs-accessibility-modal-dialog">
                  <div class="hs-accessibility-modal-content">
                      <div class="hs-accessibility-modal-header">
                          <h5 class="hs-modal-title">Accessibility Modes</h5>
                          <button id="hsCloseModal" class="hs-btn-close">&times;</button>
                      </div>
                      <div class="hs-accessibility-modal-body">
                          <p>Choose an accessibility mode:</p>
                          <button class="hs-btn hs-btn-primary" id="hsToggleContrast">Toggle High Contrast</button>
                          <button class="hs-btn hs-btn-secondary" id="hsToggleGrayscale">Toggle Grayscale</button>
                          <button class="hs-btn hs-btn-warning" id="hsToggleSepia">Toggle Sepia</button>
                          <button class="hs-btn hs-btn-success" id="hsIncreaseFont">Increase Font Size</button>
                          <button class="hs-btn hs-btn-danger" id="hsDecreaseFont">Decrease Font Size</button>
                          <button class="hs-btn hs-btn-dark" id="hsResetModes">Reset</button>
                          <a href="https://haseef-swift.netlify.app/" target="_blank">Add accessibility feature to your website</a>
                          <a href="https://haseef-swift.netlify.app/" target="_blank"><p>Powered by Haseef Swift</p></a>
                      </div>
                  </div>
              </div>
          </div>
      `;
      hsAccessibilityDiv.insertAdjacentHTML("beforeend", hsModalHTML);

      // Sound Effect
      const hsClickSound = new Audio("https://www.soundjay.com/button/button-4.mp3");

      function hsPlaySound() {
          hsClickSound.currentTime = 0;
          hsClickSound.play();
      }

      // Open Modal
      hsAccessibilityButton.addEventListener("click", function () {
          hsPlaySound();
          document.getElementById("hsAccessibilityModal").style.display = "block";
      });

      // Close Modal
      document.getElementById("hsCloseModal").addEventListener("click", function () {
          hsPlaySound();
          document.getElementById("hsAccessibilityModal").style.display = "none";
      });

      // Accessibility Features
      let hsDefaultFontSize = 16;

      document.getElementById("hsToggleContrast").addEventListener("click", function () {
          hsPlaySound();
          document.body.classList.toggle("hs-high-contrast");
      });

      document.getElementById("hsToggleGrayscale").addEventListener("click", function () {
          hsPlaySound();
          document.body.classList.toggle("hs-grayscale");
      });

      document.getElementById("hsToggleSepia").addEventListener("click", function () {
          hsPlaySound();
          document.body.classList.toggle("hs-sepia");
      });

      document.getElementById("hsIncreaseFont").addEventListener("click", function () {
          hsPlaySound();
          hsDefaultFontSize += 2;
          document.body.style.fontSize = hsDefaultFontSize + "px";
      });

      document.getElementById("hsDecreaseFont").addEventListener("click", function () {
          hsPlaySound();
          hsDefaultFontSize -= 2;
          document.body.style.fontSize = hsDefaultFontSize + "px";
      });

      document.getElementById("hsResetModes").addEventListener("click", function () {
          hsPlaySound();
          document.body.classList.remove("hs-high-contrast", "hs-grayscale", "hs-sepia");
          hsDefaultFontSize = 16;
          document.body.style.fontSize = hsDefaultFontSize + "px";
      });
  }
})();

// Dark and White Mode

function toggleDarkMode() {
    document.body.classList.toggle('hs-dark-mode');
    const icon = document.getElementById('hs-toggle-icon');
    const text = document.getElementById('hs-toggle-text');
    if (document.body.classList.contains('hs-dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.src = "https://cdn-icons-png.flaticon.com/512/6714/6714979.png";
        text.textContent = "Dark Mode";
    } else {
        localStorage.setItem('theme', 'light');
        icon.src = "https://cdn-icons-png.flaticon.com/512/6714/6714978.png";
        text.textContent = "Light Mode";
    }
}

(function () {
    const text = document.getElementById('hs-toggle-text');
    const insertContainer = document.querySelector('.hs-nila');
    
    if (insertContainer) {
        const toggleContainer = document.createElement('div');
        toggleContainer.classList.add('hs-toggle-container');
        toggleContainer.setAttribute('onclick', 'toggleDarkMode()');
        
        const toggleText = document.createElement('span');
        toggleText.classList.add('hs-toggle-text');
        toggleText.id = 'hs-toggle-text';
        toggleText.textContent = 'Light Mode';
        
        const toggleIcon = document.createElement('img');
        toggleIcon.classList.add('hs-toggle-icon');
        toggleIcon.id = 'hs-toggle-icon';
        toggleIcon.src = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';
        toggleIcon.alt = 'Mode Icon';
        
        toggleContainer.appendChild(toggleText);
        toggleContainer.appendChild(toggleIcon);
        insertContainer.appendChild(toggleContainer); // Append to the div with class hs-nila
    }

    // Check localStorage for theme and apply it
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('hs-dark-mode');
        document.getElementById('hs-toggle-icon').src = "https://cdn-icons-png.flaticon.com/512/6714/6714979.png";
        text.textContent = "Dark Mode";
    }
})();


console.log(`
  
 _   _    _    ____  _____ _____ _____   ______        _____ _____ _____ 
| | | |  / \  / ___|| ____| ____|  ___| / ___\ \      / /_ _|  ___|_   _|
| |_| | / _ \ \___ \|  _| |  _| | |_    \___ \\ \ /\ / / | || |_    | |  
|  _  |/ ___ \ ___) | |___| |___|  _|    ___) |\ V  V /  | ||  _|   | |  
|_| |_/_/   \_\____/|_____|_____|_|     |____/  \_/\_/  |___|_|     |_|  

VERSION : 26
POWERED BY HASEEF SWIFT
https://haseef-swift.netlify.app
  `);