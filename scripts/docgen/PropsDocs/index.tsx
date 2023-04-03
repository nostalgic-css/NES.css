import type { GeneratedDocument } from ".."
import './PropsDocs.module.css'

type Props = {
  json: GeneratedDocument
}

export function PropsDocs({ json }: Props) {

  const hasProperties = Array.isArray(json) && json.length > 0

  if (hasProperties === false) {
    return <p>Has no property</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>@property</th>
          <th>syntax</th>
          <th>inherits</th>
          <th>initial-value</th>
          <th>comments</th>
        </tr>
      </thead>
      <tbody>
        {json.map(doc => {
          return (
            <tr>
              <td><code>{doc.property}</code></td>
              <td><code>{doc.syntax}</code></td>
              <td><code>{doc.inherits}</code></td>
              <td><code>{doc["initial-value"]}</code></td>
              <td>{doc.comments}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
