// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById('horn-select');
      var hornImage = document.querySelector('img[src="assets/images/no-image.png"]');
      var audio = document.querySelector('audio');
      var volumeSlider = document.getElementById('volume');
      var volumeIcon = document.querySelector('#volume-controls img');
      var playButton = document.querySelector('button');

      
      hornSelect.addEventListener('change', function () {
        
        var selectedOption = hornSelect.value;

        if (selectedOption === 'air-horn') {
          hornImage.src = 'assets/images/air-horn.svg';
          audio.src = 'assets/audio/air-horn.mp3';
        } else if (selectedOption === 'car-horn') {
          hornImage.src = 'assets/images/car-horn.svg';
          audio.src = 'assets/audio/car-horn.mp3';
        } else if (selectedOption === 'party-horn') {
          hornImage.src = 'assets/images/party-horn.svg';
          audio.src = 'assets/audio/party-horn.mp3';
        }
      });

      volumeSlider.addEventListener('input', function () {
        var volume = parseFloat(volumeSlider.value) / 100;

        audio.volume = volume;

        if (volume === 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volume < 0.33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volume < 0.67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
      });

      playButton.addEventListener('click', function () {
        audio.play();
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();

        if (hornSelect.value === 'party-horn') {
          confetti({
            particleCount: 100,
          });
        }
      });
    }

