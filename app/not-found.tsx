import Link from 'next/link';
import Reveal from './components/Reveal';
import MagneticButton from './components/MagneticButton';
import Spotlight from './components/Spotlight';

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <Spotlight>
        <div className="container-x text-center max-w-[800px] relative z-10 py-32">
          <Reveal>
            <span className="live-dot inline-block mb-6 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            <h1 className="text-[clamp(4rem,4rem+8vw,10rem)] font-display font-bold leading-none tracking-tighter text-gradient mb-6">
              404
            </h1>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
              Signal lost in the noise.
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[500px] mx-auto mb-12">
              The page you're looking for doesn't exist, has been moved, or you've ventured too far off the grid.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <MagneticButton href="/" className="btn btn-primary btn-arrow">
                Return home
              </MagneticButton>
              <Link href="/services" className="btn btn-ghost">
                Our services
              </Link>
            </div>
          </Reveal>
        </div>
      </Spotlight>
      
      {/* Decorative background elements matching the professional theme */}
      <div className="hero-orb w-[500px] h-[500px] top-[10%] -left-[10%] bg-[var(--color-brand-1)] opacity-20 pointer-events-none" />
      <div className="hero-orb w-[400px] h-[400px] bottom-[10%] -right-[5%] bg-[var(--color-brand-3)] opacity-20 pointer-events-none" style={{ animationDelay: '-5s' }} />
    </div>
  );
}
