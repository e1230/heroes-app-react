import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          Searching
          <hr />
          <form>
            <input
              type="text"
              placeholder="select a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a Hero</div>
          <div className="alert alert-danger">
            No results for <b>ABC</b>
          </div>
          {/* {<HeroCard />} */}
        </div>
      </div>
    </>
  );
};
