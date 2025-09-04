"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <>
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        toastOptions={{
          classNames: {
            toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            success: "group-[.toaster]:!bg-emerald-600 group-[.toaster]:!text-white group-[.toaster]:!border-emerald-700",
            error: "group-[.toaster]:!bg-red-500 group-[.toaster]:!text-white group-[.toaster]:!border-red-600",
            warning: "group-[.toaster]:!bg-yellow-500 group-[.toaster]:!text-white group-[.toaster]:!border-yellow-600",
            info: "group-[.toaster]:!bg-blue-500 group-[.toaster]:!text-white group-[.toaster]:!border-blue-600"
          },
        }}
        {...props}
      />
      <style jsx global>{`
        [data-sonner-toast][data-type="success"] {
          background-color: rgb(5 150 105) !important;
          border-color: rgb(4 120 87) !important;
          color: white !important;
        }
        
        [data-sonner-toast][data-type="error"] {
          background-color: rgb(239 68 68) !important;
          border-color: rgb(220 38 38) !important;
          color: white !important;
        }
        
        [data-sonner-toast][data-type="warning"] {
          background-color: rgb(245 158 11) !important;
          border-color: rgb(217 119 6) !important;
          color: white !important;
        }
        
        [data-sonner-toast][data-type="info"] {
          background-color: rgb(59 130 246) !important;
          border-color: rgb(37 99 235) !important;
          color: white !important;
        }

        [data-sonner-toast][data-type="success"] [data-description] {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        [data-sonner-toast][data-type="error"] [data-description] {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        [data-sonner-toast][data-type="warning"] [data-description] {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        [data-sonner-toast][data-type="info"] [data-description] {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>
    </>
  )
}

export { Toaster }
