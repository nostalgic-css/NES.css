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
    const doc = {} as Record<keyof Doc, unknown>
    doc.property = rule.params

    rule.walkComments(comment => { doc.comments = comment.text })

    rule.walkDecls(/(syntax|inherits|initial-value)/, decl => {
      if (isDecls(decl.prop)) {
        doc[decl.prop] = decl.value
      }
    })

    docs.push(doc as Doc)
  })

  return docs
}

function isDecls(key: any): key is keyof Doc {
  return Array<keyof Doc>('comments', 'property', 'syntax', 'inherits', 'initial-value').includes(key)
}
