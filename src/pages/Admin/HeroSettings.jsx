/** @format */

import useHero from "@/hooks/useHero";

function HeroSettings() {
  const {
    hero,

    loading,

    deleteHero,
  } = useHero();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='p-6'>
      <h1 className='text-2xl font-bold'>Hero Settings</h1>

      {hero && (
        <div className='mt-6 space-y-3'>
          <h2>{hero.title}</h2>

          <p>{hero.subtitle}</p>

          <p>{hero.description}</p>

          <button
            onClick={deleteHero}

            className='btn btn-error'>
            Delete Hero
          </button>
        </div>
      )}
    </section>
  );
}

export default HeroSettings;
