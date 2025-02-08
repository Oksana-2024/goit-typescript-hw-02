import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.query.value.trim();
    if (query.length < 1) {
      toast.error("Please enter search data.");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />

        <button className={s.button} type="submit">
          <IoIosSearch size={24} className={s.icon} />
        </button>
      </form>
    </div>
  );
}
