import path from 'path'
import fs from 'fs'
import { findMatchingFiles, type Config as FindMatchingFilesConfig } from '../lib/findMatchingFiles'
import { extractProperties, type Doc } from './lib/extractProperties'
import { config }from './config'

export type Config =
  & FindMatchingFilesConfig

export type GeneratedDocument = Doc[]

console.time('[docgen]')

const files = findMatchingFiles(config.include, config.exclude)

const writers = files.map(async file => {
  const filename = path.parse(file).name + '.json'
  const exportPath = path.join(path.dirname(file), filename)

  const css = await fs.promises.readFile(file, 'utf8')
  const doc = extractProperties(css)
  return fs.promises
    .writeFile(exportPath, JSON.stringify(doc, null, 2), 'utf8')
    .then(() => console.info(exportPath, '(generated)'))
})

await Promise.all(writers)

console.timeEnd('[docgen]')
