import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./models/product.model ";

const initialProductValue: Product[] = [{ id: "", title: "", imageUrl: "" }];

export default function FetchCSVData() {
  const [csvData, setCsvData] = useState<Product[]>(initialProductValue);

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    axios
      .get(import.meta.env.VITE_CSV_URL || "")
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setCsvData(parsedCsvData);
        // console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  function parseCSV(csvText: string) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
    const data: Product[] = [];
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Split the row, handling '\r' characters
      const rowObject: Product = {
        id: "",
        title: "",
        imageUrl: "",
      };
      for (let j = 0; j < headers.length; j++) {
        if (headers[j] === "id") rowObject.id = rowData[j];
        if (headers[j] === "title") rowObject.title = rowData[j];
        if (headers[j] === "imageUrl") rowObject.imageUrl = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return csvData;
}
