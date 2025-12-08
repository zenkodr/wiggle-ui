import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypeTableProp {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description?: React.ReactNode;
}

interface TypeTableProps {
  props: TypeTableProp[];
  className?: string;
}

export function TypeTable({ props, className }: TypeTableProps) {
  return (
    <div
      className={cn("my-6 w-full overflow-y-auto rounded-lg border", className)}
    >
      <table className="w-full text-left">
        <thead className="bg-secondary text-muted-foreground">
          <tr className="border-b">
            <th className="h-10 px-4 py-2 font-medium">Prop</th>
            <th className="h-10 px-4 py-2 font-medium">Type</th>
            <th className="h-10 px-4 py-2 font-medium">Default</th>
            <th className="h-10 px-4 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {props.map((prop, index) => (
            <tr
              key={prop.name + index}
              className="hover:bg-muted bg-background transition-colors"
            >
              {/* Prop Name */}
              <td className="px-4 py-3 align-top">
                <div className="text-primary flex items-center gap-1 font-mono font-semibold">
                  {prop.name}
                  {prop.required && (
                    <span className="text-destructive" title="Required">
                      *
                    </span>
                  )}
                </div>
              </td>

              {/* Type Definition */}
              <td className="px-4 py-3 align-top">
                <code className="bg-secondary text-secondary-foreground rounded px-1.5 py-0.5 font-mono break-all">
                  {prop.type}
                </code>
              </td>

              {/* Default Value */}
              <td className="px-4 py-3 align-top">
                {prop.default ? (
                  <code className="text-muted-foreground font-mono">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground/50 italic">—</span>
                )}
              </td>

              {/* Description */}
              <td className="text-muted-foreground px-4 py-3 align-top">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
