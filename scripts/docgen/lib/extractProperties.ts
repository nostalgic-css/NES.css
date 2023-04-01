import postcss from 'postcss'

export type Doc = {
  comments: string
  property: string
  syntax: string
  inherits: boolean
  'initial-value': string
}

export function extractProperties(css: string): Doc[] {
  const docs: Doc[] = []

  const root = postcss.parse(css)
  root.walkAtRules('property', rule => {
    const doc: Record<string, unknown> = {}

    rule.walkComments(comment => { doc['comments'] = comment.text })

    rule.walkDecls(/(syntax|inherits|initial-value)/, decl => {
      doc[decl.prop] = decl.value
    })

    docs.push(doc as Doc)
  })

  return docs
}
