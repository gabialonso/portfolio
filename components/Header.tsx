import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          Gabriel Alonso
        </Link>
        <nav>
          <ul>
            <li><Link href="/about">About Me</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
