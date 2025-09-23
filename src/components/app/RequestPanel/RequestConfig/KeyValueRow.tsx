"use client";
 
import { Checkbox } from "@/components/ui/checkbox";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {useState} from "react";
type props = {
  requestFormState: RequestFormData;
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>;
  rowNumber: number;
  fieldType: "params" | "headers";
};

const KeyValueRow = ({requestFormState, setRequestFormState, rowNumber, fieldType}: props) => {
  const isLastRow: boolean  = rowNumber === requestFormState[fieldType].length - 1;
  const [isChecked, setIsChecked] = useState(requestFormState[fieldType][rowNumber]?.checked ?? false);
   const classNames = {
    tableCell: "text-center border-1 border-[#ccc] border-collapse",
  };

  let OldFieldData = requestFormState[fieldType];

  const addNewRow = () => {
    console.log("Adding new row");
    setRequestFormState((prev: RequestFormData) => ({
      ...prev,
      [fieldType]: [...OldFieldData, { key: "", value: "", checked: false }],
    }));
  }
  const onCheckChange = (checked: boolean) => {
    setIsChecked(checked);
    OldFieldData[rowNumber].checked = checked;
    setRequestFormState((prev: RequestFormData) => ({
      ...prev,
      [fieldType]: OldFieldData,
    }));
    
    if (isLastRow && checked) {
      addNewRow();
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    OldFieldData[rowNumber][name as "key" | "value"] = value;
    setRequestFormState((prev: RequestFormData) => ({
      ...prev,
      params: OldFieldData,
    }));
  }
  return (
    <TableRow className="">
      <TableCell className="border-0 ">
        <Checkbox
          onCheckedChange={onCheckChange}
          checked={isChecked}
          id="toggle-2"
          className="border-[#949494] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 w-[20px] h-[20px] cursor-pointer"
          />{" "}
      </TableCell>
      <TableCell className={classNames.tableCell}>
        <input
          type="text"
          name="key"
          onChange={onInputChange}
          value={requestFormState[fieldType][rowNumber]?.key ?? ""}
          className="w-full h-full border-0 focus:ring-0 focus:outline-0"
          placeholder="Key"
          />
      </TableCell>
      <TableCell className={classNames.tableCell}>
        <input
          type="text"
          name="value"
          onChange={onInputChange}
          value={requestFormState[fieldType][rowNumber]?.value ?? ""}
          className="w-full h-full border-0 focus:ring-0 focus:outline-0"
          placeholder="Value"
        />
      </TableCell>
      <TableCell className="border-0 ">
      </TableCell>
    </TableRow>
  );
};

export default KeyValueRow;
