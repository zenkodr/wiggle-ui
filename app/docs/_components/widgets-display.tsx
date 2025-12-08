import { getWidgetsByNames } from "@/lib/utils";

import WidgetCard from "@/components/widget-card";
import WidgetLoader from "@/components/widget-loader-client";

export default function WidgetsDisplay() {
  const smWidgets = getWidgetsByNames([
    "clock-sm-01",
    "weather-sm-01",
    "productivity-sm-01",
    "dashboard-sm-01",
    "calendar-sm-01",
  ]);

  return (
    <div className="my-6 flex w-max items-center justify-start gap-x-6">
      {smWidgets.map((widget) => (
        <WidgetCard key={widget.name} widget={widget}>
          <WidgetLoader widget={widget} />
        </WidgetCard>
      ))}
    </div>
  );
}
