# NextAuth JWE Decoder

Decode NextAuth v4 JWE session tokens locally in your browser. Private by design, fast, and offline-compatible.

## Features

* 100% client-side — no servers, no analytics, no tracking
* Works offline after first load (no external fonts or requests)
* Accessible, responsive UI with light/dark themes
* Copy decoded payload to clipboard
* Simple unit tests for core decoding logic

## Development

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
bun run preview
```

## Test

```sh
bun test
```

## Privacy

Decoding happens entirely in your browser. No data is transmitted or stored.
