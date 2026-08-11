/** @format */

import useHero from "@/hooks/useHero";

function HeroSettings() {
  const { hero, loading, error, refresh, deleteHero } = useHero();

  if (loading) {
    return <section className='p-6'>Loading...</section>;
  }

  if (error) {
    return (
      <section className='p-6'>
        <p className='text-error'>Failed to load Hero.</p>

        <button onClick={refresh} className='btn btn-primary mt-4'>
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className='p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Hero Settings</h1>

        <button onClick={refresh} className='btn btn-outline'>
          Refresh
        </button>
      </div>

      {hero && (
        <div className='mt-6 space-y-4 rounded-xl border border-base-300 bg-base-100 p-6'>
          <div>
            <span className='text-sm opacity-60'>Title</span>

            <h2 className='text-xl font-bold'>{hero.title}</h2>
          </div>

          <div>
            <span className='text-sm opacity-60'>Subtitle</span>

            <p>{hero.subtitle}</p>
          </div>

          <div>
            <span className='text-sm opacity-60'>Description</span>

            <p>{hero.description}</p>
          </div>

          <button onClick={deleteHero} className='btn btn-error'>
            Delete Hero
          </button>
        </div>
      )}
    </section>
  );
}

export default HeroSettings;
