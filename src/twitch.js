const twitch = document.querySelector('#twitch')

const channels = [
  'test',
  'ucsm'
]

async function removeStream(channel) {
  try {
    const res = await fetch('/api/twitch/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel })
    })

    const body = await res.json()
    return body
  } catch (err) {
    console.error(err.message)
  }
}

async function bootstrap() {
  for (const channel of channels) {
    const player = document.createElement('div')
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', () => {
      const res = removeStream(channel)
      if (res.ok) {
        embed.pause()
        embed.disableCaptions()
        player.remove()
      } else {
        alert('Ошибка!')
      }
    })

    const embed = new Twitch.Embed(player, {
      width: 320,
      height: 240,
      channel
    })

    player.appendChild(embed._iframe)
    player.appendChild(button)
    twitch.appendChild(player)
    console.log(embed)
  }
}

bootstrap()
