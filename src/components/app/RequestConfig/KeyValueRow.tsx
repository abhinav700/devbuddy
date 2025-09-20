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
};

const KeyValueRow = ({requestFormState, setRequestFormState, rowNumber}: props) => {
  const isLastRow: boolean  = rowNumber === requestFormState.params.length;
  const [isChecked, setIsChecked] = useState(requestFormState.params[rowNumber]?.checked ?? false);
   const classNames = {
    tableCell: "text-center border-1 border-[#ccc] border-collapse",
  };

  let oldParams = requestFormState.params;
  console.log("oldParams", oldParams)
  const addNewRow = () => {
    setRequestFormState((prev: RequestFormData) => ({
      ...prev,
      params: [...oldParams, { key: "", value: "", checked: true }],
    }));
  }

  const onCheckChange = (checked: boolean) => {
    if (isLastRow && checked) {
      addNewRow();
    }else{
      setIsChecked(checked);
      oldParams[rowNumber].checked = checked;
      setRequestFormState((prev: RequestFormData) => ({
        ...prev,
        params: oldParams,
      }));
    }
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
          className="w-full h-full border-0 focus:ring-0 focus:outline-0"
          placeholder="Key"
        />
      </TableCell>
      <TableCell className={classNames.tableCell}>
        <input
          type="text"
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
