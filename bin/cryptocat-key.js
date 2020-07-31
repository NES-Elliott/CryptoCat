const program = require('commander')
const key = require('../commands/key')

program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com')
  .action(() => key.set)

program
  .command('show')
  .description('Set API Key -- Get at https://nomics.com')
  .action(() => key.show)

program
  .command('remove')
  .description('Set API Key -- Get at https://nomics.com')
  .action(() => key.remove)

program.parse(process.argv)
