$.getJSON("./assets/js/data.json", (data) => {
  let profiles = data.profiles;

  let cardParent = document.getElementById("profile-cards");
  for (let index = 0; index < profiles.length; index += 1) {
    let card = document.createElement("div");
    card.classList.add("col-12");
    card.classList.add("col-sm-6");
    card.classList.add("col-lg-4");
    card.classList.add("p-3");
    card.classList.add("first-card-body");

    let profile = profiles[index];
    card.innerHTML = `<div class='card'>
            <div class='column'>
              <div class='col-12 ftc-image'>
                <img src='${profile.image_link}' class='card-img' alt='${profile.name}' onerror="this.style.display='none'">
              </div>
              <div class='col-12'>
                <div class='f-card-body'>
                  <h4 class='card-title'>${profile.name}</h4>
                  <p class='card-message'>${profile.message}</p>
                        <a
                          href="https://www.github.com/in/${profile.handle}/"
                          target="_blank"
                          ><i class="fa fa-2x fa-github"></i
                        ></a>
                </div>
              </div>
            </div>
          </div>
      `;
    cardParent.appendChild(card);
  }
  if (!profiles.length) {
    let card = document.createElement("div");
    card.classList.add("col-12");
    card.innerHTML =
      "<h1>This section is empty. You can check out other works by us.</h1>";
    cardParent.append(card);
  }
});