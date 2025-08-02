<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Social Media Page</title>
  
  <link rel="stylesheet" href="homestyle.css"/>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
</head>
<body>
  <!-- New thing if it help then implement -->
  <div class="container" id="main-container">
    <div class="sidebar">
      <button class="nav-btn" id="profile-btn"><i class="fas fa-user"></i><span>Profile</span></button>
      <button class="nav-btn" id="home-btn"><i class="fas fa-home"></i><span>Home</span></button>
      <button class="nav-btn" id="add-btn"><i class="fas fa-plus-circle"></i><span>Add</span></button>
    </div>

    <main class="main-content" id="main-content">
      <!-- This is where the posts will appear -->
      <div id="home-page-content">
        <div id="posts-container">
          <p class="no-posts-message">No posts yet. Why not create one?</p>
        </div>
      </div>

      <!-- The new and improved "Create Post" page -->
      <div id="post-page-content" class="hidden">
        <span class="close-btn" id="close-post-btn">&times;</span>
        <h1>Create a New Post</h1>

        <!-- This is the container where the selected image/video will be shown -->
        <div id="media-preview-container"></div>

        <!-- This is a styled button that triggers the hidden file input -->
        <label for="file-input" class="file-input-label">Select Image or Video</label>
        <input type="file" id="file-input" accept="image/*,video/*" class="hidden">

        <textarea id="caption-input" placeholder="Write a caption..."></textarea>
        <button class="top-btn" id="publish-btn">Publish</button>
      </div>
    </main>

    <div class="right-panel">
      <div class="top-buttons">
        <button class="top-btn" id="logout-btn">Log-out</button>
        <button class="top-btn" id="about-btn">About</button>
      </div>
    </div>
  </div>

  <!-- Popups -->
  <div id="logout-popup" class="popup-overlay hidden">
    <div class="popup-content">
      <h2>Log Out</h2>
      <p>Are you sure you want to log out?</p>
       <div class="popup-buttons">
        <button class="popup-btn confirm" id="logout-confirm-btn">Log Out</button>
        <button class="popup-btn cancel" id="logout-cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
  
  <div id="about-popup" class="popup-overlay hidden">
    <div class="popup-content"><button class="popup-close-btn" id="about-close-btn">&times;</button>
      <h2>About Us</h2>
      <div style="text-align: left; margin-top: 20px;">
        <p><strong>Website Name:</strong> Simple Social Network</p>
        <p><strong>Version:</strong> 1.0</p>
        <p><strong>Email:</strong> support@simplesocial.com</p>
        <br>
        <p style="text-align: center; font-style: italic;">"Where your voice becomes a vibe"</p>
      </div>
    </div>
  </div>

  <div id="settings-popup" class="popup-overlay hidden">
    <div class="popup-content"><button class="popup-close-btn" id="settings-close-btn">&times;</button>
      <h2>Settings</h2>
      <p>The settings panel is under construction.</p>
    </div>
  </div>

  <script src="home.js"></script>
</body>

</html>