import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type props = {
  requestFormState: RequestFormData,
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>,
}

const HeadersTab = ({requestFormState, setRequestFormState}: props) => {
   const classNames = {
    tableHead: "text-center w-[100px] border-1 border-[#ccc] border-collapse",
    tableCell: "text-center border-1 border-[#ccc] border-collapse",
  }
  return (
    <div>
      <p>Headers</p>
       <div className="w-full">
        <Table className="lg:max-w-[50%]">
          <TableHeader className="">
            <TableRow>
              <TableHead className={classNames.tableHead}>Key</TableHead>
              <TableHead className={classNames.tableHead}>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className={classNames.tableCell}>Key1</TableCell>
              <TableCell className={classNames.tableCell}>Value1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default HeadersTab