import { IconButton, Typography } from "@material-tailwind/react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import React from "react";
 
// eslint-disable-next-line react/prop-types
const Pagination = ({active, onPageChange, lastPage}) => {
    
  const next = () => {
    if (active === 10) return;
    onPageChange(active + 1,lastPage);
  };
 
  const prev = () => {
    
    if (active === 1) return;
    onPageChange(active - 1,lastPage);
  };
 
  return (
    <div className="flex items-center justify-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
    
)}

export default Pagination