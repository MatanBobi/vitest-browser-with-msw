import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach } from "vitest";
import { worker } from "./src/mocks/browser";

beforeAll(async () => {
  await worker.start();
});

afterEach(() => {
  worker.resetHandlers();
});
