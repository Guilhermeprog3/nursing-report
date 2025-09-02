import Link from 'next/link';
import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export function Header() {
  return (
    <header className="bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center p-4">
        <Link href="/" className={`flex items-center gap-2 text-2xl font-bold ${nunito.className}`}>
          <Image 
            src="/logo.jpeg" 
            alt='logo' 
            width={40} 
            height={40} 
            className='rounded-full'
          />
          <span style={{ color: '#FAD1D1' }}>The</span>
          <span style={{ color: '#E86A7A' }}>Home</span>
          <span style={{ color: '#52A9D8' }}>Care</span>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center gap-6 items-center">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Início
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Quem Somos
          </Link>
          <Link href="/professionals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Nossos Profissionais
          </Link>
        </nav>
      </div>
    </header>
  );
}