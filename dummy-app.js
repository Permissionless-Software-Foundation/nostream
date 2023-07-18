/*
  A dummy app to get the Docker container started, so that I can interrogate it
  for debugging purposes.
*/


async function start() {
  try {


    setInterval(function() {
      const now = new Date()

      console.log(`heartbeat: ${now.toLocaleString()}`)
    }, 10000)

  } catch(err) {
    console.error(err)
  }
}
start()
