import { useJWTDecoder } from "@/hooks/use-jwt-decoder";
import { Header } from "@/components/layout/header";
import { SecurityNotice } from "@/components/home/security-notice";
import { InputSection } from "@/components/home/input-section";
import { OutputSection } from "@/components/home/output-section";
import { Footer } from "@/components/layout/footer";

export function JWTDecoderApp() {
  const {
    secret,
    token,
    decodedOutput,
    error,
    isLoading,
    setSecret,
    setToken,
    handleDecode,
    handleCopy,
  } = useJWTDecoder();

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Header />
      <main className="content-width py-6 md:py-8 flex-1 min-h-0">
        <SecurityNotice />
        <section className="grid lg:grid-cols-2 gap-6 md:gap-8 min-h-0">
          <InputSection
            secret={secret}
            token={token}
            isLoading={isLoading}
            error={error}
            onSecretChange={setSecret}
            onTokenChange={setToken}
            onDecode={handleDecode}
          />
          <OutputSection decodedOutput={decodedOutput} onCopy={handleCopy} />
        </section>
      </main>
      <Footer />
    </div>
  );
}