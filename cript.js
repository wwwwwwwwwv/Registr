function createProfile() {
  const username = document.getElementById('username').value;
  username.value=' '

  
  if (username) {

      let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
      profiles.push(username);
      localStorage.setItem('profiles', JSON.stringify(profiles));
      //

      displayProfiles();

  }
}

function resetProfiles() {
  localStorage.removeItem('profiles');
  document.getElementById('profiles').innerHTML = '';
}

function displayProfiles() {
  const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
  const profilesContainer = document.getElementById('profiles');
  profilesContainer.innerHTML = '';

  
  profiles.forEach((profile, index) => {
      const profileElement = document.createElement('div');
      profileElement.textContent = profile;

       

      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить профиль';
      deleteButton.style.width = '60px'
      

      deleteButton.onclick = function() {
          profiles.splice(index, 1);
          localStorage.setItem('profiles', JSON.stringify(profiles));
          displayProfiles();
      };
      
      profileElement.appendChild(deleteButton);
      profilesContainer.appendChild(profileElement);
  });
}



window.onload = displayProfiles;





