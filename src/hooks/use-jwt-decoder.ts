import { useState, useCallback } from "react";
import { JWTPayload } from "jose";
import { toast } from "sonner";
import { decodeNextAuthJWE } from "@/lib/jwt-decoder";

export function useJWTDecoder() {
  const [secret, setSecret] = useState("");
  const [token, setToken] = useState("");
  const [decodedOutput, setDecodedOutput] = useState<JWTPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDecode = useCallback(async () => {
    if (!secret.trim() || !token.trim()) {
      setError("Please provide both secret and token");
      setDecodedOutput(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setDecodedOutput(null);

    try {
      const decoded = await decodeNextAuthJWE(token.trim(), secret.trim());
      setDecodedOutput(decoded);
      toast.success("Token decoded successfully");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [secret, token]);

  const handleCopy = useCallback(async () => {
    if (!decodedOutput) return;

    try {
      await navigator.clipboard.writeText(JSON.stringify(decodedOutput, null, 2));
      toast.success("Decoded output copied to clipboard");
    } catch {
      toast.error("Could not copy to clipboard");
    }
  }, [decodedOutput]);

  return {
    secret,
    token,
    decodedOutput,
    error,
    isLoading,
    setSecret,
    setToken,
    handleDecode,
    handleCopy,
  };
}