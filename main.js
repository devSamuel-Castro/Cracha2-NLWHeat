const linksSocialMedia = {
  github: 'devSamuel-Castro',
  youtube: 'channel/UC9K-9gTFKevuwiHPUC6YFaA',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'Samuel03602467'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/*
LINKS:
https://github.com/devSamuel-Castro

https://youtube.com/channel/UC9K-9gTFKevuwiHPUC6YFaA

https://pt-br.facebook.com/

https://www.instagram.com/

https://twitter.com/Samuel03602467
*/

/*
function changeUserName() {
  document.getElementById('userName').textContent = 'Samuel Castro'

  Como foi usado um 'id' para identificar o 'h1' pode-se simplicar a linha acima por:

  userName.textContent = 'Samuel Castro'

  github.children[0].href = `https://github.com/${linksSocialMedia.github}`
}
  */

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      description.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

getGithubProfileInfos()

/*
///// Function:

function nomeDaFuncao(argumento1, argumento2) {
  código
}

///// Arrow function ou função anônima:

argumento1 => {
  código
}

(argumento1, argumento2) => {
  código
}

() => {
  código
}

*/
