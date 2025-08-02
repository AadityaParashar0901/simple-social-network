// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all the buttons by their IDs
    const profileBtn = document.getElementById('profile-btn');
    const homeBtn = document.getElementById('home-btn');
    const addBtn = document.getElementById('add-btn');
    const publishBtn = document.getElementById('publish-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const aboutBtn = document.getElementById('about-btn');
    const logoutConfirmBtn = document.getElementById('logout-confirm-btn');
    const logoutCancelBtn = document.getElementById('logout-cancel-btn');
    const aboutCloseBtn = document.getElementById('about-close-btn');
    const settingsCloseBtn = document.getElementById('settings-close-btn');
    const closePostBtn = document.getElementById('close-post-btn');
    
    // Get other elements
    const homePageContent = document.getElementById('home-page-content');
    const postPageContent = document.getElementById('post-page-content');
    const logoutPopup = document.getElementById('logout-popup');
    const aboutPopup = document.getElementById('about-popup');
    const settingsPopup = document.getElementById('settings-popup');
    const fileInput = document.getElementById('file-input');
    const mediaPreviewContainer = document.getElementById('media-preview-container');
    const captionInput = document.getElementById('caption-input');
    const mainContainer = document.getElementById('main-container');
    
    // Create settings popup element if it doesn't exist
    if (!settingsPopup) {
        const settingsPopupElement = document.createElement('div');
        settingsPopupElement.id = 'settings-popup';
        settingsPopupElement.className = 'popup-overlay hidden';
        settingsPopupElement.innerHTML = `
            <div class="popup-content">
                <button class="popup-close-btn" id="settings-close-btn">&times;</button>
                <h2>Settings</h2>
                <p>The settings panel is under construction.</p>
                <div class="popup-buttons">
                    <button class="popup-btn cancel" id="settings-cancel-btn">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(settingsPopupElement);
        
        // Add event listener for the new cancel button
        document.getElementById('settings-cancel-btn').addEventListener('click', function() {
            settingsPopupElement.classList.add('hidden');
        });
        
        // Update the settingsCloseBtn reference
        settingsCloseBtn = document.getElementById('settings-close-btn');
    }
    
    // Add Settings button to the sidebar
    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'nav-btn';
    settingsBtn.id = 'settings-btn';
    settingsBtn.innerHTML = '<i class="fas fa-cog"></i><span>Settings</span>';
    document.querySelector('.sidebar').appendChild(settingsBtn);
    
    // Add event listener for settings button
    settingsBtn.addEventListener('click', function() {
        document.getElementById('settings-popup').classList.remove('hidden');
    });
    
    // Function to add animation class to container
    function addAnimation(animationClass) {
        mainContainer.classList.add(animationClass);
        // Remove animation class after animation completes
        setTimeout(() => {
            mainContainer.classList.remove(animationClass);
        }, 500);
    }
    
    // Profile button - redirect to profile page with animation
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            addAnimation('blur-it');
            setTimeout(() => {
                window.location.href = 'profilepage.php';
            }, 300);
        });
    }
    
    // Home button - refresh the page with animation
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            addAnimation('blur-it');
            setTimeout(() => {
                window.location.href = 'homepage.php';
            }, 300);
        });
    }
    
    // Add button - show post creation page with animation
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            addAnimation('blur-it');
            setTimeout(() => {
                homePageContent.classList.add('hidden');
                postPageContent.classList.remove('hidden');
                mainContainer.classList.remove('blur-it');
            }, 300);
        });
    }
    
    // Close post button - hide post creation page with animation
    if (closePostBtn) {
        closePostBtn.addEventListener('click', function() {
            addAnimation('blur-it');
            setTimeout(() => {
                postPageContent.classList.add('hidden');
                homePageContent.classList.remove('hidden');
                mainContainer.classList.remove('blur-it');
                // Clear the form
                captionInput.value = '';
                mediaPreviewContainer.innerHTML = '';
                mediaPreviewContainer.style.display = 'none';
            }, 300);
        });
    }
    
    // File input handling for post creation
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    mediaPreviewContainer.innerHTML = '';
                    if (file.type.includes('image')) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        mediaPreviewContainer.appendChild(img);
                    } else if (file.type.includes('video')) {
                        const video = document.createElement('video');
                        video.src = e.target.result;
                        video.controls = true;
                        mediaPreviewContainer.appendChild(video);
                    }
                    mediaPreviewContainer.style.display = 'flex';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Publish button functionality
    if (publishBtn) {
        publishBtn.addEventListener('click', function() {
            const caption = captionInput.value;
            const file = fileInput.files[0];
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just show an alert and reset the form
            if (caption || file) {
                alert('Post published successfully!');
                // Reset the form
                captionInput.value = '';
                fileInput.value = '';
                mediaPreviewContainer.innerHTML = '';
                mediaPreviewContainer.style.display = 'none';
                // Close the post creation page with animation
                addAnimation('blur-it');
                setTimeout(() => {
                    postPageContent.classList.add('hidden');
                    homePageContent.classList.remove('hidden');
                    mainContainer.classList.remove('blur-it');
                }, 300);
            } else {
                alert('Please add a caption or media to your post.');
            }
        });
    }
    
    // Logout button - show logout popup
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logoutPopup.classList.remove('hidden');
        });
    }
    
    // Logout confirm button - redirect to logout with animation
    if (logoutConfirmBtn) {
        logoutConfirmBtn.addEventListener('click', function() {
            addAnimation('blur-it');
            setTimeout(() => {
                window.location.href = 'logout.php';
            }, 300);
        });
    }
    
    // Logout cancel button - hide logout popup
    if (logoutCancelBtn) {
        logoutCancelBtn.addEventListener('click', function() {
            logoutPopup.classList.add('hidden');
        });
    }
    
    // About button - show about popup
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            aboutPopup.classList.remove('hidden');
        });
    }
    
    // Settings close button - hide settings popup
    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden');
        });
    }
    
    // About close button - hide about popup
    if (aboutCloseBtn) {
        aboutCloseBtn.addEventListener('click', function() {
            aboutPopup.classList.add('hidden');
        });
    }
    
    // Add click outside to close popups
    window.addEventListener('click', function(e) {
        if (e.target === logoutPopup) {
            logoutPopup.classList.add('hidden');
        }
        if (e.target === aboutPopup) {
            aboutPopup.classList.add('hidden');
        }
        if (e.target === settingsPopup) {
            settingsPopup.classList.add('hidden');
        }
    });
});
