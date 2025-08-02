<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Profile Page</title>
  <link rel="stylesheet" href="profilepage.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="sidebar">
    <div class="icon" id="profile-home-btn"><i class="fas fa-home"></i></div>
    <div class="icon" id="profile-settings-btn"><i class="fa-solid fa-gear"></i></div>
  
  <div class="profile-container" id="profile-container">
    <div class="profile-header">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <h1 class="username" id="profile-username">Loading...</h1>
        <div class="stats">
          <div><strong id="post-count">0</strong><br>post</div>
          <div><strong>0</strong><br>followers</div>
          <div><strong>0</strong><br>following</div>
        </div>
        <div class="bio">
          <p><strong id="profile-fullname">.......</strong><br><span id="profile-bio">
            ....</span></p>
        </div>
        <div class="buttons">
          <button id="edit-profile-btn">edit-profile</button>
          <button id="view-archive-btn">view archive</button>
        </div>
      </div>
    </div>

    <div class="center-icon"><i class="fas fa-image"></i></div>

    <div class="post-grid" id="user-posts-container"></div>
    </div>
  </div>

   <div class="popup-overlay hidden" id="settings-popup">
    <div class="main-popup-content">
      <ul>
        <li><a href="index.html">Website</a></li>
        <li data-action="qrcode">QR Code</li>
        <li data-action="privacy">Privacy</li>
        <li data-action="logout">Log Out</li>
        <li data-action="cancel">Cancel</li>
      </ul>
    </div>
  </div>

  <div class="popup-overlay hidden" id="logout-confirm-popup">
    <div class="logout-confirm-content">
      <h2>Log Out</h2>
      <p>Are you sure you want to log out?</p>
      <div class="logout-confirm-buttons">
        <button class="logout-btn-confirm" id="confirm-logout-btn">Log Out</button>
        <button class="logout-btn-cancel" id="cancel-logout-btn">Cancel</button>
      </div>
    </div>
  </div>

  <script src="profile.js"></script>
</body>
</html>
