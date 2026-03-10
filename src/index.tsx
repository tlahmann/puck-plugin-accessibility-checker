import React from 'react'
import { Plugin } from "@puckeditor/core";
import { PersonStanding } from "lucide-react";

const accessibilityChecker: Plugin = {
  name: "a11y-checker",
  label: "A11y",
  render: () => <div>Hi</div>,
  icon: <PersonStanding />,
};