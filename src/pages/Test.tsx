import InputSelect from "components/InputSelect";
import React, { ChangeEvent, MouseEvent, useState } from "react";

export default function Test() {
  // Local state
  const [selectedOption, setSelectedOption] = useState("1");

  // Properties
  const numberOfSeasons = 5;
  const seasonLabels = generateSeasonLabels(numberOfSeasons);

  // Methods
  function generateSeasonLabels(seasons: number): string[] {
    let result: string[] = [];

    for (let index = 0; index < seasons; index++) {
      result.push(`Season ${index + 1}`);
    }

    return result;
  }

  function onChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedOption(event.currentTarget.value);
  }

  return (
    <div>
      <h1>Test page: @{selectedOption}@</h1>
      <InputSelect
        data={seasonLabels}
        state={selectedOption}
        onChange={onChange}
      />
    </div>
  );
}
