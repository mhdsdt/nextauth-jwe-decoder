import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Sparkles } from "lucide-react";

interface InputSectionProps {
  secret: string;
  token: string;
  isLoading: boolean;
  error: string | null;
  onSecretChange: (value: string) => void;
  onTokenChange: (value: string) => void;
  onDecode: () => void;
}

export function InputSection({
   secret,
   token,
   isLoading,
   error,
   onSecretChange,
   onTokenChange,
   onDecode,
 }: InputSectionProps) {
  const isDisabled = isLoading || !secret.trim() || !token.trim();

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm glass">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          Input
        </CardTitle>
        <CardDescription>Enter your NextAuth secret and JWE session token</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="secret" className="text-sm font-medium">
            NextAuth Secret
          </label>
          <Input
            id="secret"
            type="password"
            placeholder="Enter your NEXTAUTH_SECRET..."
            value={secret}
            onChange={(e) => onSecretChange(e.target.value)}
            autoComplete="off"
            required
            aria-required="true"
            className="font-mono"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="token" className="text-sm font-medium">
            JWE Session Token
          </label>
          <Textarea
            id="token"
            placeholder="Paste your JWE token here..."
            value={token}
            onChange={(e) => onTokenChange(e.target.value)}
            autoComplete="off"
            required
            aria-required="true"
            className="min-h-32 font-mono text-sm resize-none"
          />
        </div>

        <Button
          onClick={onDecode}
          disabled={isDisabled}
          className="w-full glow-button font-medium"
          size="lg"
          aria-label="Decode token"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Decoding...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Decode Token
            </div>
          )}
        </Button>

        {error && (
          <div
            role="alert"
            className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 animate-fade-in text-sm text-destructive"
          >
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  );
}