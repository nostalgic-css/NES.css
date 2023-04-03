import glob from 'glob'

export type Config = {
  include: string[]
  exclude?: string[]
}

export function findMatchingFiles(globs: string[], ignores: string[] = []): string[] {
  const paths = globs
    .map(pattern => glob.sync(pattern, { ignore: ignores }))
    .flat()

  return paths
}
