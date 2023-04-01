import type { GeneratedDocument } from "../scripts/docgen"

declare module '*.css';

declare module '*.properties.json' {
  const json: GeneratedDocument
  export default json
}
