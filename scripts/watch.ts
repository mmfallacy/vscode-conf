try {
  await import("./build.ts");
  await import("./inject.ts");
} catch (err) {
  console.error(err);
}
