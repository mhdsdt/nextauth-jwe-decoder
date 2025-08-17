import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Copy, Key } from "lucide-react";
import { JWTPayload } from "jose";

interface OutputSectionProps {
  decodedOutput: JWTPayload | null;
  onCopy: () => void;
}

export function OutputSection({ decodedOutput, onCopy }: OutputSectionProps) {
  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm glass min-h-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Output
        </CardTitle>
        <CardDescription>Decoded JWT payload will appear here</CardDescription>
      </CardHeader>
      <CardContent className="min-h-0">
        {decodedOutput ? (
          <div className="space-y-4 animate-fade-in min-h-0">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Decoded Successfully</span>
              <Button onClick={onCopy} variant="outline" size="sm" className="gap-2" aria-label="Copy decoded output">
                <Copy className="h-3 w-3" />
                Copy
              </Button>
            </div>
            <pre
              className="code-block whitespace-pre-wrap max-h-[60vh] md:max-h-[70vh] overflow-auto"
              aria-live="polite"
            >
              {JSON.stringify(decodedOutput, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Key className="h-8 w-8 text-primary/50" />
            </div>
            <p className="text-sm">Enter your secret and token to decode</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}