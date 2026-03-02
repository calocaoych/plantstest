import { useEffect, useMemo, useState } from "react";
import Create from "../views/Create.jsx";
import Update from "../views/Update.jsx";
import Delete from "../views/Delete.jsx";

const STORAGE_KEY = "plant-care-plants";

const normalizePlant = (plant) => {
  const safe = plant && typeof plant === "object" ? plant : {};
  const description =
    typeof safe.description === "string"
      ? safe.description
      : typeof safe.notes === "string"
        ? safe.notes
        : "";

  return {
    id: typeof safe.id === "number" ? safe.id : Date.now(),
    name: typeof safe.name === "string" ? safe.name : "",
    species: typeof safe.species === "string" ? safe.species : "",
    light:
      safe.light === "low" || safe.light === "medium" || safe.light === "bright"
        ? safe.light
        : "medium",
    watering:
      safe.watering === "sparse" ||
      safe.watering === "weekly" ||
      safe.watering === "often"
        ? safe.watering
        : "weekly",
    caretakingLevel:
      safe.caretakingLevel === "beginner" ||
      safe.caretakingLevel === "intermediate" ||
      safe.caretakingLevel === "advanced"
        ? safe.caretakingLevel
        : "beginner",
    soil: typeof safe.soil === "string" ? safe.soil : "",
    description,
  };
};

const Searchfield = () => {
  const [plants, setPlants] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedPlantId, setSelectedPlantId] = useState(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setPlants(EXAMPLE_PLANTS.map(normalizePlant));
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setPlants(parsed.map(normalizePlant));
      } else {
        setPlants(EXAMPLE_PLANTS.map(normalizePlant));
      }
    } catch {
      setPlants(EXAMPLE_PLANTS.map(normalizePlant));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  const handleDelete = (id) => {
    setPlants((prev) => prev.filter((plant) => plant.id !== id));
    if (selectedPlantId === id) {
      setSelectedPlantId(null);
    }
  };

  const movePlantUp = (id) => { // Move the plant with the given id one step up in the list
    setPlants((prev) => {
      const index = prev.findIndex((plant) => plant.id === id);
      if (index <= 0) return prev;
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const movePlantDown = (id) => { // Move the plant with the given id one step down in the list
    setPlants((prev) => {
      const index = prev.findIndex((plant) => plant.id === id);
      if (index === -1 || index >= prev.length - 1) return prev;
      const next = [...prev];
      const temp = next[index + 1]; // Store the plant that is currently one step down  
      next[index + 1] = next[index]; // Move the current plant one step down by replacing the plant that is currently one step down with the current plant  
      next[index] = temp;
      return next;
    });
  };

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const combinedText =
        `${plant.name} ${plant.species} ${plant.soil} ${plant.description} ${plant.light} ${plant.watering} ${plant.caretakingLevel}`.toLowerCase();
      const matchesText = combinedText.includes(filterText.toLowerCase());
      return matchesText;
    });
  }, [plants, filterText]);

  const selectedPlant =
    selectedPlantId == null
      ? null
      : plants.find((plant) => plant.id === selectedPlantId) || null;

  const handleCreate = (newPlantData) => {
    const normalized = normalizePlant(newPlantData);
    const withId = { ...normalized, id: Date.now() };
    setPlants((prev) => [...prev, withId]);
  };

  const handleUpdatePlant = (updatedPlantData) => {
    const normalized = normalizePlant(updatedPlantData);
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === normalized.id ? { ...normalized } : plant,
      ),
    );
  };

  return (
    <main className="page">
      <div className="container">
        <header className="page-header">
          <h1>My Plants</h1>
          <p className="lead">
            Add your own plants and filter them by name, light level, or
            watering schedule.
          </p>
        </header>

        <section className="layout-2col">
          <div className="form-column">
            <Create onCreate={handleCreate} />
            <Update
              plant={selectedPlant}
              onSave={handleUpdatePlant}
              onClearSelection={() => setSelectedPlantId(null)}
            />
          </div>
          <section className="card plant-list-card">
            <header className="plant-list-header">
              <h2>Your plants</h2>
              <div className="filters">
                <input
                  type="text"
                  placeholder="Search by name, species, water, light, soil, or level"
                  value={filterText}
                  onChange={(event) => setFilterText(event.target.value)}
                />
              </div>
            </header>

            {filteredPlants.length === 0 ? (
              <p className="empty-state">
                No plants match your current filters yet. Try clearing the
                filters or add a new plant.
              </p>
            ) : (
              <ul className="plant-list">
                {filteredPlants.map((plant) => (
                  <li key={plant.id} className="plant-item">
                    <div className="plant-main">
                      <h3>{plant.name}</h3>
                      {plant.species && (
                        <p className="plant-species">{plant.species}</p>
                      )}
                      {plant.soil && (
                        <p className="plant-soil">
                          <strong>Soil:</strong> {plant.soil}
                        </p>
                      )}
                      {plant.description && (
                        <p className="plant-description">{plant.description}</p>
                      )}
                    </div>
                    <dl className="plant-meta">
                      <div>
                        <dt>Light</dt>
                        <dd>{plant.light}</dd>
                      </div>
                      <div>
                        <dt>Watering</dt>
                        <dd>{plant.watering}</dd>
                      </div>
                      <div>
                        <dt>Level</dt>
                        <dd>{plant.caretakingLevel}</dd>
                      </div>
                    </dl>
                    <div className="plant-actions">
                      <button
                        type="button"
                        className="ghost"
                        onClick={() => setSelectedPlantId(plant.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="ghost"
                        onClick={() => movePlantUp(plant.id)}
                      >
                        Move up
                      </button>
                      <button
                        type="button"
                        className="ghost"
                        onClick={() => movePlantDown(plant.id)}
                      >
                        Move down
                      </button>
                      <Delete onConfirm={() => handleDelete(plant.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Searchfield;