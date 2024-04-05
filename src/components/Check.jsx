// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Check({ id, complete, setComplete }) {
  return (
    <>
      <input
        type="checkbox"
        checked={complete}
        onChange={(e) => setComplete(id, e.target.checked)}
      />
    </>
  );
}
