import { useMemo, useState } from "react";
import countriesData from "../api/postApi.json";

const INITIAL_VISIBLE = 30;
const LOAD_STEP = 20;

export const Country = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchValue, setSearchValue] = useState("");

  const filteredCountries = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    const filtered = countriesData.filter(({ country }) => {
      if (!query) return true;
      return country.toLowerCase().startsWith(query);
    });

    return [...filtered].sort((a, b) =>
      sortOrder === "asc"
        ? a.country.localeCompare(b.country)
        : b.country.localeCompare(a.country),
    );
  }, [searchValue, sortOrder]);

  const visibleCountries = filteredCountries.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCountries.length;

  const handleToggle = () => {
    if (hasMore) {
      setVisibleCount((prev) => prev + LOAD_STEP);
    } else {
      setVisibleCount(INITIAL_VISIBLE);
    }
  };

  const handleSort = (value) => {
    setSortOrder(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="country-section">
      <div className="container">
        <h2 className="container-title">Explore Countries</h2>

        <div className="country-toolbar">
          <form
            className="country-search"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search countries"
            />
          </form>

          <div className="country-sort">
            <button
              type="button"
              className={sortOrder === "asc" ? "active" : ""}
              onClick={() => handleSort("asc")}
            >
              Ascending
            </button>
            <button
              type="button"
              className={sortOrder === "desc" ? "active" : ""}
              onClick={() => handleSort("desc")}
            >
              Descending
            </button>
          </div>
        </div>

        <p
          className="card-description"
          style={{ textAlign: "center", marginBottom: "2.4rem" }}
        >
          Showing {visibleCountries.length} of {filteredCountries.length}{" "}
          countries
        </p>

        {visibleCountries.length === 0 ? (
          <div
            className="container-card bg-white-box"
            style={{ maxWidth: "50rem", margin: "0 auto" }}
          >
            <p className="card-description" style={{ textAlign: "center" }}>
              No countries matched your search.
            </p>
          </div>
        ) : (
          <div className="gradient-cards">
            {visibleCountries.map(
              ({ id, country, capital, currency, continent , iso2 ,iso3 ,dial_code , tld}) => (
                <div key={id} className="card country-card">
                  <div className="container-card bg-blue-box">
                    <h3 className="card-title">{country}</h3>
                    <p className="card-description">
                      <strong>Capital:</strong> {capital}
                      <br />
                      <strong>Currency:</strong> {currency}
                      <br />
                      <strong>Continent:</strong> {continent}
                      <br />
                      <strong>Iso2:</strong> {iso2}
                      <br />
                      <strong>Iso3:</strong> {iso3}
                      <br />
                      <strong>Dial Code:</strong>{dial_code}
                      <br />
                      <strong>Tld:</strong>{tld}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
          <button onClick={handleToggle}>
            {hasMore ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
    </section>
  );
};
