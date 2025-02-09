"use client";

import useVisitors from "@/hooks/useVisitors";
import { addOrdinalSuffix } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export default function Visitors() {
  const { views, isLoading } = useVisitors();

  if (isLoading) return <Skeleton className="w-48 h-4" />;

  return (
    <i className="text-muted-foreground font-thin">
      Welcome, {addOrdinalSuffix(views)} visitor.
    </i>
  );
}
