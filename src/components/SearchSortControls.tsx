export function SearchSortControls({
  search,
  sort,
  handleChangeSearch,
  handleChangeSort,
}: {
  search: string;
  sort: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Search"
        type="text"
        className="border p-2 rounded"
        value={search}
        onChange={handleChangeSearch}
      />
      <select
        className="border p-2 rounded"
        value={sort}
        onChange={handleChangeSort}
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}