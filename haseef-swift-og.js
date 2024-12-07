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

console.log(`
  
 _   _    _    ____  _____ _____ _____   ______        _____ _____ _____ 
| | | |  / \  / ___|| ____| ____|  ___| / ___\ \      / /_ _|  ___|_   _|
| |_| | / _ \ \___ \|  _| |  _| | |_    \___ \\ \ /\ / / | || |_    | |  
|  _  |/ ___ \ ___) | |___| |___|  _|    ___) |\ V  V /  | ||  _|   | |  
|_| |_/_/   \_\____/|_____|_____|_|     |____/  \_/\_/  |___|_|     |_|  

POWERED BY HASEEF SWIFT
https://haseef-swift.netlify.app
  `);