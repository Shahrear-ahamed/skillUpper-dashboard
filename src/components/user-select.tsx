"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeRole } from "@/lib/features/change-role/changeRoleSlice";
import { handleLocalStorage } from "@/utils/localstorage";

export default function UserSelect() {
  const roles = [
    { id: 1, role: "Super Admin" },
    { id: 2, role: "Admin" },
    { id: 3, role: "Course Manager" },
    { id: 4, role: "Marketer" },
    { id: 5, role: "Call Support" },
    { id: 6, role: "Student" },
    { id: 7, role: "Instructor" },
    { id: 8, role: "Author" },
  ];

  // redux things
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.role.role);

  // handle value change
  const handleRoleChange = (value: string) => {
    dispatch(changeRole(value));
    handleLocalStorage("role", value);
  };

  // return value
  return (
    <Select onValueChange={(data) => handleRoleChange(data)}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder={role} />
      </SelectTrigger>
      <SelectContent>
        {roles.map((role) => (
          <SelectItem key={role.id} value={role.role}>
            {role.role}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
