function App() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--background-color-00)' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-title-4xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Aperçu des Composants
          </h1>
          <p className="text-base" style={{ color: 'var(--text-color-neutral-secondary)' }}>
            Système de design avec Tailwind v4 et tokens CSS personnalisés
          </p>
        </header>

        {/* Typography Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Typographie
          </h2>
          <div className="space-y-3 p-6 rounded-lg" style={{ backgroundColor: 'var(--background-color-01)' }}>
            <p className="text-title-4xl">Title 4XL - 3.5rem</p>
            <p className="text-title-3xl">Title 3XL - 2rem</p>
            <p className="text-title-2xl">Title 2XL - 1.75rem</p>
            <p className="text-title-xl">Title XL - 1.5rem</p>
            <p className="text-title-lg">Title LG - 1.25rem</p>
            <p className="text-base-bold">Base Bold - 1.125rem</p>
            <p className="text-base">Base - 1.125rem</p>
            <p className="text-sm">Small - 1rem</p>
            <p className="text-xs">Extra Small - 0.75rem</p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Couleurs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-target-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Target</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-turquoise-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Turquoise</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-light-blue-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Light Blue</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-green-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Green</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-orange-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Orange</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-purple-02)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Purple</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-danger-04)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Danger</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: 'var(--background-color-neutral-invert-00)' }}></div>
              <p className="text-xs" style={{ color: 'var(--text-color-neutral-secondary)' }}>Neutral Dark</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Boutons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors"
              style={{ 
                backgroundColor: 'var(--background-color-button-primary-01)',
                color: 'var(--text-color-neutral-invert-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-button-primary-state-01-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-button-primary-01)'}
            >
              Primary Button
            </button>
            
            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors"
              style={{ 
                backgroundColor: 'var(--background-color-button-primary-02)',
                color: 'var(--text-color-neutral-primary)',
                border: '2px solid var(--border-color-neutral-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-neutral-state-00-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-button-primary-02)'}
            >
              Secondary Button
            </button>

            <button 
              className="px-6 py-3 rounded-lg text-base transition-colors"
              style={{ 
                backgroundColor: 'var(--background-color-danger-04)',
                color: 'var(--text-color-neutral-invert-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-danger-state-04-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background-color-danger-04)'}
            >
              Danger Button
            </button>

            <button 
              className="px-6 py-3 rounded-lg text-base opacity-50 cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--background-color-button-primary-state-01-disabled)',
                color: 'var(--text-color-neutral-secondary)'
              }}
              disabled
            >
              Disabled Button
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Cartes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="p-6 rounded-lg space-y-3 shadow-md"
              style={{ 
                backgroundColor: 'var(--background-color-01)',
                border: '1px solid var(--border-color-neutral-secondary)'
              }}
            >
              <h3 className="text-title-lg" style={{ color: 'var(--text-color-neutral-primary)' }}>
                Carte Standard
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-color-neutral-secondary)' }}>
                Une carte avec bordure neutre et fond de base
              </p>
            </div>

            <div 
              className="p-6 rounded-lg space-y-3 shadow-md"
              style={{ 
                backgroundColor: 'var(--background-color-turquoise-00)',
                border: '2px solid var(--border-color-highlight-primary)'
              }}
            >
              <h3 className="text-title-lg" style={{ color: 'var(--text-color-semantic-info-primary)' }}>
                Carte Highlight
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-color-neutral-secondary)' }}>
                Une carte mise en avant avec bordure turquoise
              </p>
            </div>

            <div 
              className="p-6 rounded-lg space-y-3 shadow-md"
              style={{ 
                backgroundColor: 'var(--background-color-danger-01)',
                border: '2px solid var(--border-color-danger-primary)'
              }}
            >
              <h3 className="text-title-lg" style={{ color: 'var(--text-color-semantic-danger-primary)' }}>
                Carte Danger
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-color-neutral-secondary)' }}>
                Une carte d'avertissement avec bordure rouge
              </p>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            <span 
              className="px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--background-color-tags-primary)',
                color: 'var(--text-color-neutral-invert-primary)'
              }}
            >
              Primary Tag
            </span>
            <span 
              className="px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--background-color-tags-secondary)',
                color: 'var(--text-color-neutral-primary)'
              }}
            >
              Secondary Tag
            </span>
            <span 
              className="px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--background-color-tags-danger-solid)',
                color: 'var(--text-color-neutral-invert-primary)'
              }}
            >
              Danger Solid
            </span>
            <span 
              className="px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--background-color-tags-danger-soft)',
                color: 'var(--text-color-semantic-danger-primary)'
              }}
            >
              Danger Soft
            </span>
          </div>
        </section>

        {/* Status Messages */}
        <section className="space-y-4">
          <h2 className="text-title-2xl" style={{ color: 'var(--text-color-neutral-primary)' }}>
            Messages de Statut
          </h2>
          <div className="space-y-3">
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--background-color-green-00)' }}
            >
              <p className="text-base" style={{ color: 'var(--text-color-semantic-success-primary)' }}>
                ✓ Succès - Opération terminée avec succès
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--background-color-turquoise-00)' }}
            >
              <p className="text-base" style={{ color: 'var(--text-color-semantic-info-primary)' }}>
                ℹ Info - Information importante pour l'utilisateur
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--background-color-orange-00)' }}
            >
              <p className="text-base" style={{ color: 'var(--text-color-semantic-warning-primary)' }}>
                ⚠ Attention - Action nécessitant votre attention
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--background-color-danger-01)' }}
            >
              <p className="text-base" style={{ color: 'var(--text-color-semantic-danger-primary)' }}>
                ✕ Erreur - Une erreur s'est produite
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
