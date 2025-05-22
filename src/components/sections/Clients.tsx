
export function Clients() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-display text-muted-foreground">
            Empresas que confían en nosotros
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
          {/* Logos de empresas */}
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <rect width="100" height="10" rx="5" />
              <rect y="15" width="80" height="10" rx="5" />
              <rect y="30" width="60" height="10" rx="5" />
            </svg>
          </div>
          
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <circle cx="20" cy="20" r="15" />
              <circle cx="80" cy="20" r="15" />
              <rect x="35" y="10" width="30" height="20" rx="5" />
            </svg>
          </div>
          
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <polygon points="50,0 100,40 0,40" />
            </svg>
          </div>
          
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <rect width="100" height="40" rx="10" />
              <rect x="10" y="10" width="80" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
          
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <rect width="45" height="40" rx="8" />
              <rect x="55" width="45" height="40" rx="8" />
            </svg>
          </div>
          
          <div className="w-24 md:w-32 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full text-muted-foreground fill-current">
              <circle cx="50" cy="20" r="20" />
              <rect x="20" y="15" width="60" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
