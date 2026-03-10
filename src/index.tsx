import React from "react";
import { Plugin } from "@puckeditor/core";
import { PersonStanding } from "lucide-react";
import { AccessibilityChecker } from "./components/AccessibilityChecker";

const accessibilityChecker: Plugin = {
  name: "a11y-checker",
  label: "A11y",
  render: AccessibilityChecker,
  icon: <PersonStanding />,
};
