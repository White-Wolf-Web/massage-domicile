import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Oups, la page que vous demandez n&apos;existe pas.</p>
      <Link href="/">Accueil</Link>
    </div>
  )
}
