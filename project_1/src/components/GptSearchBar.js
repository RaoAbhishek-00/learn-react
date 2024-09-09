import React from "react";
import language from "../utils/languageConstants";
import {useSelector} from "react-redux"

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.changeLanguage.language);
  return (
    <div>
      <form className="mt-[10%] flex justify-center ">
        <input
          className="bg-white text-black w-2/5"
          placeholder={language[langKey].placeholder}
          type="text"
        />
        <button className="bg-black text-red-600 px-4 py-2 rounded-lg mx-4">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
