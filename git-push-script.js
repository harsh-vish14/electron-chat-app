const shell = require('shelljs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Ask the user for a commit message
rl.question('Enter commit message: ', (commitMessage) => {
  rl.close()

  // Execute Git commands
  if (!commitMessage) {
    console.log('Commit message is required.')
    process.exit(1)
  }

  shell.exec('git add .')
  shell.exec(`git commit -m "${commitMessage}"`)
  shell.exec('git push origin master')

  console.log('Git push complete.')
})
