import React from "react";

export const LocaleContext = React.createContext();

// This is our context object.

// When React renders a component that subscribes to this context object,
// it will read the context value from the closest matching Provider.
