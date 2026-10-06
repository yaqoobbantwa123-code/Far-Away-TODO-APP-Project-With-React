function Stats({ items }) {
  const numItems = items.length;

  const numPacked = items.filter(
    (item) => item.packed
  ).length;

  const percentage =
    numItems === 0
      ? 0
      : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        🧳 You have {numItems} items on your list, and you
        already packed {numPacked} ({percentage}%)
      </p>
    </footer>
  );
}

export default Stats;