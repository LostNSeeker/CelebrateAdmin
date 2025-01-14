import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <div className="min-h-screen bg-background font-sans antialiased">{children}</div>
}