import Papa from "papaparse";

export const fetchCsv = async (url, setCsv) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const csvText = await response.text();

  Papa.parse(csvText, {
    complete: (result) => {
      // Store the parsed data in the state
      console.log("Parsed data: ", result.data);
      setCsv(result.data);
    },
    header: true,
  });
};
