import '../../index.css'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [
    { slug: [''] }, // Default route
    { slug: ['favicon.ico'] } // Add favicon route
  ]
}
 
export default function Page() {
  return <ClientOnly />
}