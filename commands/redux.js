// @cliDescription  Generates a action/creator/reducer set for Redux.

module.exports = async function (context) {
  // grab some features
  const { parameters, ignite, strings, print } = context
  const { isBlank, pascalCase } = strings

  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate redux <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(parameters.first)
  const props = { name }

  const jobs = [{ template: `redux.ejs`, target: `App/Redux/${name}Redux.js` }]

  await ignite.copyBatch(context, jobs, props)
}