import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import { ComponentProps, CSSProperties} from "react";

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          '--normal-bg': 'hsl(var(--popover))',
          '--normal-text': 'hsl(var(--popover-foreground))',
          '--normal-border': 'hsl(var(--border))',
          fontFamily:
            '"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", Arial, sans-serif',
        } as CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }
