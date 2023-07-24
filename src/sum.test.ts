import sum from "./sum";
import {describe,expect, it } from "vitest"

describe("#sum", () => {
  it("returns 0 with no number input", () => {
    const result = sum();
    expect(result).toBe(0)
  })

  it("returns the sum of the input numbers", () => {
    const result = sum(1, 2, 3, 4)
    expect(result).toBe(10)
  })

  it("returns the same number with one input number", () => {
    const result = sum(6)
    expect(result).toBe(6)
  })


})