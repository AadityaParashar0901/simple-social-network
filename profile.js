document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('profile-container');
    const profilePic = document.getElementById('profile-pic');
    const profileUsername = document.getElementById('profile-username');
    const postCount = document.getElementById('post-count');
    const profileFullname = document.getElementById('profile-fullname');
    const profileBio = document.getElementById('profile-bio');

    const profileHomeBtn = document.getElementById('profile-home-btn');
    const profileSettingsBtn = document.getElementById('profile-settings-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');

    const settingsPopup = document.getElementById('settings-popup');
    const settingsCloseBtn = document.getElementById('settings-close-btn');
    const settingsWebsiteLink = document.getElementById('settings-website-link');
    const settingsQrcodeBtn = document.getElementById('settings-qrcode-btn');
    const settingsPrivacyBtn = document.getElementById('settings-privacy-btn');
    const settingsLogoutBtn = document.getElementById('settings-logout-btn');
    const settingsCancelBtn = document.getElementById('settings-cancel-btn');

    const underConstructionModal = document.getElementById('underConstructionModal');
    const underConstructionOkBtn = document.getElementById('under-construction-ok-btn');

    const logoutConfirmPopup = document.getElementById('logout-confirm-popup');
    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    const cancelLogoutBtn = document.getElementById('cancel-logout-btn');

    // --- Helper function for blur animation ---
    function toggleBlur(addBlur) {
        if (addBlur) {
            profileContainer.classList.add('blur-it');
        } else {
            profileContainer.classList.remove('blur-it');
        }
    }

    // --- Dynamic Profile Data (Placeholder) ---
    // In a real application, you would fetch this data from a server.
    // For demonstration, we'll use dummy data and simulate updates.
    let userData = {
        username: 'JohnDoe',
        profilePicUrl: 'https://placehold.co/180x180/8897AA/FFFFFF?text=JD', // Example placeholder image
        postCount: 15,
        fullName: 'Johnathan Doe',
        bio: 'Passionate about web development and open source projects.'
    };

    function updateProfileUI() {
        profileUsername.textContent = userData.username;
        profilePic.style.backgroundImage = `url('${userData.profilePicUrl}')`;
        postCount.textContent = userData.postCount;
        profileFullname.textContent = userData.fullName;
        profileBio.textContent = userData.bio;
    }

    // Initial UI update
    updateProfileUI();

    // --- Home Button Functionality with Animation ---
    if (profileHomeBtn) {
        profileHomeBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleBlur(true); // Apply blur
            setTimeout(() => {
                window.location.href = 'homepage.php'; // Redirect after a short delay
            }, 300); // Match CSS transition duration
        });
    }

    // --- Settings Icon Functionality ---
    if (profileSettingsBtn) {
        profileSettingsBtn.addEventListener('click', function() {
            settingsPopup.classList.remove('hidden');
            toggleBlur(true); // Apply blur when settings popup opens
        });
    }

    if (settingsCloseBtn) {
        settingsCloseBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden');
            toggleBlur(false); // Remove blur when settings popup closes
        });
    }

    // Handle clicks on settings list items
    if (settingsQrcodeBtn) {
        settingsQrcodeBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden'); // Hide settings popup
            underConstructionModal.classList.remove('hidden'); // Show under construction
        });
    }

    if (settingsPrivacyBtn) {
        settingsPrivacyBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden'); // Hide settings popup
            underConstructionModal.classList.remove('hidden'); // Show under construction
        });
    }

    if (settingsLogoutBtn) {
        settingsLogoutBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden'); // Hide settings popup
            logoutConfirmPopup.classList.remove('hidden'); // Show logout confirmation
        });
    }

    if (settingsCancelBtn) {
        settingsCancelBtn.addEventListener('click', function() {
            settingsPopup.classList.add('hidden');
            toggleBlur(false); // Remove blur
        });
    }

    // --- Under Construction Modal Functionality ---
    if (underConstructionOkBtn) {
        underConstructionOkBtn.addEventListener('click', function() {
            underConstructionModal.classList.add('hidden');
            toggleBlur(false); // Remove blur
        });
    }

    // --- Logout Confirmation Functionality (from homepage.php, adapted for profile) ---
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            toggleBlur(true); // Apply blur for logout
            setTimeout(() => {
                window.location.href = 'logout.php'; // Redirect to logout script
            }, 300);
        });
    }

    if (cancelLogoutBtn) {
        cancelLogoutBtn.addEventListener('click', function() {
            logoutConfirmPopup.classList.add('hidden');
            toggleBlur(false); // Remove blur
        });
    }

    // --- Edit Profile Button Redirection ---
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            toggleBlur(true); // Apply blur before redirect
            setTimeout(() => {
                window.location.href = 'edit_profile.php'; // Redirect to edit profile page
            }, 300);
        });
    }

    // --- Close popups when clicking outside ---
    window.addEventListener('click', function(event) {
        if (event.target === settingsPopup) {
            settingsPopup.classList.add('hidden');
            toggleBlur(false);
        }
        if (event.target === underConstructionModal) {
            underConstructionModal.classList.add('hidden');
            toggleBlur(false);
        }
        if (event.target === logoutConfirmPopup) {
            logoutConfirmPopup.classList.add('hidden');
            toggleBlur(false);
        }
    });

    // --- Placeholder for dynamic post count update ---
    // In a real scenario, this would involve fetching actual post data
    // and updating the count. For now, it's just a UI placeholder.
    // To manually test, you can change userData.postCount and call updateProfileUI()
});
