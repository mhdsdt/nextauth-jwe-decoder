import { jwtDecrypt, decodeProtectedHeader } from 'jose'

export async function decodeNextAuthJWE(token: string, secret: string) {
  try {
    const protectedHeader = decodeProtectedHeader(token)
    const algorithm = protectedHeader.alg
    
    if (!algorithm || (algorithm !== 'dir' && algorithm !== 'A256GCMKW')) {
      throw new Error(`Unsupported algorithm: ${algorithm}`)
    }

    const secretBytes = new TextEncoder().encode(secret)
    
    let info: Uint8Array
    if (algorithm === 'dir') {
      info = new TextEncoder().encode('NextAuth.js Generated Encryption Key')
    } else {
      info = new TextEncoder().encode('NextAuth.js Generated A256GCMKW CEK')
    }

    const derivedKey = await crypto.subtle.importKey(
      'raw',
      await crypto.subtle.deriveBits(
        {
          name: 'HKDF',
          hash: 'SHA-256',
          salt: new Uint8Array(),
          info: info,
        },
        await crypto.subtle.importKey(
          'raw',
          secretBytes,
          { name: 'HKDF' },
          false,
          ['deriveBits']
        ),
        256
      ),
      algorithm === 'dir' ? { name: 'AES-GCM' } : { name: 'AES-KW' },
      false,
      algorithm === 'dir' ? ['decrypt'] : ['unwrapKey']
    )

    const { payload } = await jwtDecrypt(token, derivedKey)
    return payload
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Decoding failed: ${error.message}`)
    }
    throw new Error('Unknown decoding error')
  }
}