import { Metadata } from "next";
import { DataTable } from "@/components/ui/data-table/data-table";
import { columns } from "@/components/ui/data-table/columns";
import taskData from "@/app/(dashboard)/dashboard/task/data/tasks.json";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function TaskPage() {
  const tasks = taskData;

  return <DataTable data={tasks} columns={columns} />;
}
