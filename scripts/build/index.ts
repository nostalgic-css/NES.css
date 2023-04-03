import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import atImport from 'postcss-import'
import { __dirname } from '../lib/commonjs'
import type { Config as FindMatchingFilesConfig } from '../lib/findMatchingFiles'
import { findMatchingFiles } from '../lib/findMatchingFiles'
import { config } from './config'

export type Config =
  & FindMatchingFilesConfig

console.time('[bundle]')

const files = findMatchingFiles(config.include, config.exclude)

const bundlers = files.map(async file => {
  const css = fs.readFileSync(file, 'utf8')
  const result = await postcss()
    .use(atImport())
    .process(css, { from: file })

  /**
   * Inputs:
   * /src/elements/button/index.css
   * /src/form/input/index.css
   *
   * Outputs:
   * /dist/elements/button.css
   * /dist/form/input.css
   */
  const dir = path.dirname(file).replace('src/', 'dist/')
  const exportPath = path.join(__dirname, '../../', `${dir}.css`)

  const checkDir = path.dirname(exportPath)
  if (fs.existsSync(checkDir) === false) {
    fs.mkdirSync(checkDir)
  }

  fs.writeFileSync(exportPath, result.css, 'utf8')

  console.info(exportPath, '(generated)')
})

await Promise.all(bundlers)

console.timeEnd('[bundle]')
