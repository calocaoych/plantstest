import { useState } from "react";

const emptyForm = {
  name: "",
  species: "",
  light: "medium",
  watering: "weekly",
  caretakingLevel: "beginner",
  soil: "",
  description: "",
};

const Create = ({ onCreate }) => {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    if (!name) return;

    onCreate(form);
    setForm(emptyForm);
  };

  return (
    <form className="card plant-form" onSubmit={handleSubmit}>
      <h2>Add a new plant</h2>

      <label>
        Name
        <input
          type="text"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="e.g. Fern in the hallway"
        />
      </label>

      <label>
        Species (optional)
        <input
          type="text"
          value={form.species}
          onChange={(event) => handleChange("species", event.target.value)}
          placeholder="e.g. Boston fern"
        />
      </label>

      <div className="field-row">
        <label>
          Light
          <div className="segmented">
            <button
              type="button"
              className={
                form.light === "low" ? "segmented-option active" : "segmented-option"
              }
              onClick={() => handleChange("light", "low")}
            >
              Low
            </button>
            <button
              type="button"
              className={
                form.light === "medium"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("light", "medium")}
            >
              Medium
            </button>
            <button
              type="button"
              className={
                form.light === "bright"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("light", "bright")}
            >
              Bright
            </button>
          </div>
        </label>

        <label>
          Watering
          <div className="segmented">
            <button
              type="button"
              className={
                form.watering === "sparse"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("watering", "sparse")}
            >
              2+ weeks
            </button>
            <button
              type="button"
              className={
                form.watering === "weekly"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("watering", "weekly")}
            >
              Weekly
            </button>
            <button
              type="button"
              className={
                form.watering === "often"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("watering", "often")}
            >
              Often
            </button>
          </div>
        </label>
      </div>

      <div className="field-row">
        <label>
          Caretaking level
          <div className="segmented">
            <button
              type="button"
              className={
                form.caretakingLevel === "beginner"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("caretakingLevel", "beginner")}
            >
              Beginner
            </button>
            <button
              type="button"
              className={
                form.caretakingLevel === "intermediate"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("caretakingLevel", "intermediate")}
            >
              Intermediate
            </button>
            <button
              type="button"
              className={
                form.caretakingLevel === "advanced"
                  ? "segmented-option active"
                  : "segmented-option"
              }
              onClick={() => handleChange("caretakingLevel", "advanced")}
            >
              Advanced
            </button>
          </div>
        </label>

        <label>
          Soil (optional)
          <input
            type="text"
            value={form.soil}
            onChange={(event) => handleChange("soil", event.target.value)}
            placeholder="e.g. All-purpose + perlite"
          />
        </label>
      </div>

      <label>
        Description (optional)
        <textarea
          rows={3}
          value={form.description}
          onChange={(event) => handleChange("description", event.target.value)}
          placeholder="Where is it? Anything you want to remember?"
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="primary">
          Save plant
        </button>
      </div>
    </form>
  );
};

export default Create;