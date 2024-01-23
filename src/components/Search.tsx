import { getCollection } from "astro:content";
import Fuse from "fuse.js";
import type { ChangeEvent } from "preact/compat";
import { useState } from "preact/hooks";

const allPosts = await getCollection("posts");

const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

const options = {
  keys: ["data.title", "data.description", "data.slug"],
  includeMatches: true,
  threshold: 0.5,
};

interface SearchInit {
  tag: string;
}

function Search({ tag }: SearchInit) {
  const [query, setquery] = useState("");
  const fuse = new Fuse(allPosts, options);
  const posts =
    query.length > 0
      ? fuse
          .search(query)
          .map((post) => post.item)
          .sort((a, b) => Number(a.data.pubDate < b.data.pubDate))
      : allPosts;

  const [open, setOpen] = useState(false);
  const [selectedTags, setselectedTags] = useState<string[]>(
    tag.length > 0 ? [tag] : []
  );

  const handlesearch = (event: ChangeEvent<HTMLInputElement>) => {
    setquery(event.currentTarget.value);
  };

  const selectTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setselectedTags(selectedTags.filter((o) => o !== tag));
    } else {
      setselectedTags([...selectedTags, tag]);
    }
  };

  const clearOptions = () => {
    setselectedTags([]);
  };
  return (
    <>
      <div className="flex flex-row w-full gap-3">
        <input
          type="text"
          placeholder="Type here"
          onInput={handlesearch}
          className=" shrink appearance-none h-12 px-4 text-sm leading-loose border rounded-lg focus:focus-within:shadow-none focus:focus-within:border-blue-400 w-full bg-transparent"
        />
      </div>

      {/* tag selector here*/}
      <div
        className=" my-2 relative flex items-center gap-2 w-full px-2 text-sm leading-loose border rounded-lg outline-none focus:border-green-500"
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
      >
        <span className=" flex-grow flex gap-2 flex-wrap">
          {selectedTags.length > 0 ? selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                selectTag(tag);
              }}
              className="inline-flex items-center justify-center hover:bg-amber-500 transition duration-200 ease-out h-5 text-sm leading-5 w-fit px-2 border-base-200 bg-base-100 text-base-content rounded-[1.9rem] border border-neutral bg-neutral text-neutral-content"
            >
              {tag}
              <span className=" text-yellow-900 text-sm">&times;</span>
            </button>
          )) : "Click here to select tags"}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className=" bg-none text-[#a03232] border-none outline-none cursor-pointer p-0 text-lg hover:text-[#333] transition-all"
        >
          &times;
        </button>
        <div className=" bg-[#a03232] self-stretch w-[.05rem]"></div>
        <div className=" translate-x-0 translate-y-1/4 border-[.25em] border-solid border-transparent border-t-[#ca4747]"></div>
      </div>

      <ul
        className={` m-0 p-0 list-none ${
          open ? "" : "hidden"
        } max-h-60 overflow-y-auto border-[.25em] border-solid border-[#777] rounded w-full left-0 top-[calc(100%+0.25em)] z-50`}
      >
        {uniqueTags
          .filter((tag) => !selectedTags.includes(tag))
          .map((option) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                console.log(option);
                selectTag(option);
              }}
              key={option}
              className=" px-2 py-1 cursor-pointer hover:bg-emerald-700 transition-all"
            >
              {option}
            </li>
          ))}
      </ul>

      <p className=" w-full justify-start py-3 text-lg">
        Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
        {query}'
      </p>

      <ul className="w-full">
        {posts &&
          posts
            .filter((post) =>
              selectedTags.every((e) => post.data.tags.includes(e))
            )
            .map((post) => (
              <a href={`/posts/${post.slug}/`}>
                <li className=" bg-slate-600 py-3 px-2 my-1 rounded-lg bg-gradient-to-tl from-red-800 to-teal-600 hover:scale-[1.04] transition-all cursor-pointer">
                  <h1 className="text-xl font-extrabold">{post.data.title}</h1>
                  <p>{post.data.description.slice(0, 100)}</p>
                </li>
              </a>
            ))}
      </ul>
    </>
  );
}

export default Search;
