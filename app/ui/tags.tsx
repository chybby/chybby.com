export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-4">
      {items.map((item) => {
        return (
          <li
            key={item}
            className="rounded-full border-2 border-indigo-500 bg-indigo-300 px-4 py-2 text-lg dark:border-indigo-300 dark:bg-indigo-500"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
