export const HeroCard = ({ hero }) => {
  const heroImg = `/assets/heroes/${hero.id}.jpg`;
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImg} className="card-img" alt={hero.superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{hero.superhero}</h5>
                <p className="card-text">{hero.alter_ego}</p>
                <p>{hero.characters}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
