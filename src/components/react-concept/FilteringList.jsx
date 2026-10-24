import { useState } from "react";
export const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

const FilteringList = () => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const filteredData = filterItems(foods, query);

  return (
    <div>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />

      <List items={filteredData} />
    </div>
  );
};

export default FilteringList;

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search:
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by name or description"
      />
    </label>
  );
}

function List({ items }) {
  if (items.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name} </td>
            <td> {item.description} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function filterItems(items, query) {
  const lowerQuery = query.toLowerCase().trim();

  if (lowerQuery === "") return items;

  return items.filter((item) =>
    [item.name, item.description].join(" ").toLowerCase().includes(lowerQuery),
  );
}
