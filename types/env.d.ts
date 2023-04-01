import type { GeneratedDocument } from "../scripts/docgen"

declare module '*.css' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.properties.json' {
  const json: GeneratedDocument
  export default json
}
