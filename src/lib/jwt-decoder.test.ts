import { describe, it, expect } from "vitest";
import { decodeNextAuthJWE } from "./jwt-decoder";

const b64url = (json: unknown) =>
  Buffer.from(JSON.stringify(json)).toString("base64url");

describe("decodeNextAuthJWE", () => {
  it("rejects unsupported algorithms", async () => {
    const header = b64url({ alg: "RSA-OAEP" });
    const fake = `${header}.x.y.z`;
    await expect(decodeNextAuthJWE(fake, "secret")).rejects.toThrow(/Unsupported algorithm/i);
  });

  it("fails gracefully on invalid tokens", async () => {
    await expect(decodeNextAuthJWE("not-a-jwe", "secret")).rejects.toThrow(/Decoding failed/i);
  });
});
