export default function Stats({ items }) {
  const numItens = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const porcentage = Math.round((numPacked / numItens) * 100);
  if (!numItens)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>;
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {numPacked === numItens
          ? "You got everything! Ready to go ✈️"
          : `🙈 You
        have ${numItens ? numItens : 0} items on your list, and you already
        packed ${numPacked} (${porcentage ? porcentage : "0"}%)`}
      </em>
    </footer>
  );
}
