import React from 'react'
import { createUsePuck } from "@puckeditor/core";

const usePuck = createUsePuck();

export const AccessibilityChecker = () => {
  const data = usePuck((s) => s.appState.data);
  return <>{JSON.stringify(data)}</>
}