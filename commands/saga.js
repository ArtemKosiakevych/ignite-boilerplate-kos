// @cliDescription  Generates a saga with an optional test.

module.exports = async function (context) {
  // grab some features
  const { parameters, ignite, print, strings } = context
  const { pascalCase, isBlank } = strings

  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate saga <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(parameters.first)
  const props = { name }

  const jobs = [{ template: `saga.ejs`, target: `App/Sagas/${name}Sagas.js` }]

  // make the templates
  await ignite.copyBatch(context, jobs, props)
}