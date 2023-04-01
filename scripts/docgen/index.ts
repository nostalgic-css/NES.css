import path from 'path'
import fs from 'fs'
import { findMatchingFiles, Config as FindMatchingFilesConfig } from './lib/findMatchingFiles'
import { extractProperties } from './lib/extractProperties'
import { config }from './config'

export type Config =
  & FindMatchingFilesConfig
  & {
    filename: string
  }

console.time('[docgen]')

const files = findMatchingFiles(config.include, config.exclude)

const writers = files.map(async file => {
  const filename = path.parse(file).name + config.filename
  const exportPath = path.join(path.dirname(file), filename)

  const css = await fs.promises.readFile(file, 'utf8')
  const doc = extractProperties(css)
  return fs.promises
    .writeFile(exportPath, JSON.stringify(doc, null, 2), 'utf8')
    .then(() => console.info(exportPath, '(generated)'))
})

await Promise.all(writers)

console.timeEnd('[docgen]')
