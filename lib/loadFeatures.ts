export async function loadFeatures() {
  const res = await fetch("https://zenlab.vercel.app/api/productFeatures");
  const data = await res.json();

  return data;
}
