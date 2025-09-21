import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import KeyValueRow from "./KeyValueRow";

type props = {
  requestFormState: RequestFormData;
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>;
  fieldType: "params" | "headers";
};

const FieldTab = ({ requestFormState, setRequestFormState, fieldType }: props) => {
  const classNames = {
    tableHead: "text-center border-1 border-[#ccc] border-collapse",
    tableCell: "text-center border-1 border-[#ccc] border-collapse",
  };


  return (
    <>
      <div className="w-full">
        <Table className="lg:max-w-[50%] table-fixed">
          <TableHeader className="">
            <TableRow>
              <TableHead className="w-[50px] border-0 border-[#ccc] border-collapse"></TableHead>
              <TableHead className={classNames.tableHead}>Key</TableHead>
              <TableHead className={classNames.tableHead}>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {requestFormState[fieldType].map((value , index) => (
              <KeyValueRow
                key={index}
                requestFormState={requestFormState}
                setRequestFormState={setRequestFormState}
                rowNumber={index}
                fieldType={fieldType}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default FieldTab;
