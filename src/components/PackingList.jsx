import { useState } from "react";

function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === "packed") {
    sortedItems.sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <section className="packing-list">
      

      <div className="items">
        {sortedItems.map((item) => (
          <div className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onToggleItem(item.id)}
            />

            <span
              className={item.packed ? "packed" : ""}
            >
              {item.quantity} {item.description}
            </span>

            <button
              className="delete"
              onClick={() => onDeleteItem(item.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className="packing-controls">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>

        <button onClick={onClearList}>
          CLEAR LIST
        </button>
      </div>
    </section>
  );
}

export default PackingList;