# buffer_crc32

crc32 that works with binary data and fancy character sets, outputs buffer, signed or unsigned data and has tests.

Derived from the sample CRC implementation in the PNG specification: http://www.w3.org/TR/PNG/#D-CRCAppendix

fock by https://github.com/brianloveswords/buffer-crc32

## usage
```ts
import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Buffer } from "https://deno.land/std@0.140.0/node/buffer.ts";
import crc32 from "https://deno.land/x/buffer_crc32/mod.ts";

Deno.test("crc32", function() {
  const input = Buffer.from('hey sup bros');
  const expected = Buffer.from([0x47, 0xfa, 0x55, 0x70]);
  assertEquals(crc32(input), expected);
});
```
