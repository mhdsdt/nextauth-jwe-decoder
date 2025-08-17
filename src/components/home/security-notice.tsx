import { Shield } from "lucide-react";

export function SecurityNotice() {
  return (
    <section className="mb-6 md:mb-8">
      <div className="glass rounded-xl border border-primary/20 p-4 md:p-5 flex items-start gap-3">
        <div className="mt-0.5">
          <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <p className="text-sm text-muted-foreground">
          Decoding happens entirely in your browser. No data is stored or transmitted. You can turn off your internet
          and it will still work.
        </p>
      </div>
    </section>
  );
}