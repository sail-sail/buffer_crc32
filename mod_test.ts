import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Buffer } from "https://deno.land/std@0.140.0/node/buffer.ts";
import crc32 from "./mod.ts";

Deno.test("crc32", function() {
  const input = Buffer.from('hey sup bros');
  const expected = Buffer.from([0x47, 0xfa, 0x55, 0x70]);
  assertEquals(crc32(input), expected);
});
