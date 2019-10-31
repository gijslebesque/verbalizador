import React, { useStatel, useEffect } from "react";
import TableHeader from "./TableHeader";
import { columns } from ".config";

export default function({ columns }) {
  return (
    <table>
      <TableHeader columns={columns} />
    </table>
  );
}
