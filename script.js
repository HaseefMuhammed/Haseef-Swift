ScrollReveal().reveal('.scaleUp',
{ scale: 0.85 ,  duration: 1000 });

document.getElementById('copyBtn').addEventListener('click', function() {
    // Create a temporary textarea element
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = 'https://haseefmuhammed.github.io/Haseef-Swift/haseef-swift-og.css';
    document.body.appendChild(tempTextarea);
    // Select the text inside the textarea
    tempTextarea.select();
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
    // Inform the user that the text has been copied
    alert('Cdn coppied successfully.');
  });