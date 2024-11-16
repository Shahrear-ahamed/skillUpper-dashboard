import { Separator } from "@/components/ui/separator";
import React from "react";
import PersonalInfo from "./personal-info";

export default function page() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <PersonalInfo />
    </div>
  );
}
