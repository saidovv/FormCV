import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Skills({ register, handleSubmit }) {
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto mt-[50px]">
        <h2 className="text-black dark:text-gray-300  font-semibold text-3xl">
          {t("skills")}
        </h2>
        <p className="text-[black] dark:text-gray-300 mt-1 text-md">
          {t("personalskills")}
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-[30px]">
        <h1 className="text-[black] dark:text-gray-300 text-xl font-semibold">
          {t("language")}
        </h1>
        <p className="text-[black] dark:text-gray-300 ">{t("present")}</p>
        <hr className="mt-[10px]" />
        <span className="text-[black] dark:text-gray-300 block text-md mt-[15px] font-bold">
          {t("mothertongue")}
        </span>
        <input
          {...register("motherlanguage")}
          type="text"
          name="motherlanguage"
          id="motherlanguage"
          placeholder="Select"
          className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>

      {/* LANGUAGE SKILLS */}
      <div className="w-[80%] mx-auto mt-[30px]">
        <span className="text-[black] dark:text-gray-300 block text-md mt-[15px] font-bold">
          {t("otherlanguage")}
        </span>
        <div className="flex mt-3 gap-3">
          <div className="flex">
            <input
              {...register("otherlanguage1")}
              type="text"
              name="otherlanguage1"
              id="otherlanguage1"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage2")}
              type="text"
              name="otherlanguage2"
              id="otherlanguage2"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage3")}
              type="text"
              name="otherlanguage3"
              id="otherlanguage3"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage4")}
              type="text"
              name="otherlanguage4"
              id="otherlanguage4"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage5")}
              type="text"
              name="otherlanguage5"
              id="otherlanguage5"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage6")}
              type="text"
              name="otherlanguage6"
              id="otherlanguage6"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage7")}
              type="text"
              name="otherlanguage7"
              id="otherlanguage7"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage8")}
              type="text"
              name="otherlanguage8"
              id="otherlanguage8"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage9")}
              type="text"
              name="otherlanguage9"
              id="otherlanguage9"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("otherlanguage10")}
              type="text"
              name="otherlanguage10"
              id="otherlanguage10"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* DIGITAL SKILLS */}
      <div className="w-[80%] mx-auto mt-[30px]">
        <span className="text-[black] dark:text-gray-300 block text-md mt-[15px] font-bold">
          {t("digitalskills")}
        </span>
        <div className="flex mt-3 gap-3">
          <div className="flex">
            <input
              {...register("digitalskills1")}
              type="text"
              name="digitalskills1"
              id="digitalskills1"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills2")}
              type="text"
              name="digitalskills2"
              id="digitalskills2"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills3")}
              type="text"
              name="digitalskills3"
              id="digitalskills3"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills4")}
              type="text"
              name="digitalskills4"
              id="digitalskills4"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills5")}
              type="text"
              name="digitalskills5"
              id="digitalskills5"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills6")}
              type="text"
              name="digitalskills6"
              id="digitalskills6"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills7")}
              type="text"
              name="digitalskills7"
              id="digitalskills7"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills8")}
              type="text"
              name="digitalskills8"
              id="digitalskills8"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills9")}
              type="text"
              name="digitalskills9"
              id="digitalskills9"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex">
            <input
              {...register("digitalskills10")}
              type="text"
              name="digitalskills10"
              id="digitalskills10"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-20 pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
