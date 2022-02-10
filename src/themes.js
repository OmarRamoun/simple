//            rgba(255, 0, 128, 0.58)
// 0 2px 25px rgba(255, 0, 130, 0.5)
export default function themes() {
  let bgOpacity = 0.78;
  let bsOpacity = 0.59;
  return [
    {
      "--main-color": "var(--color-secondary)",
      "--filtered-color": "var(--filtered-secondary)",
      "--text-color": "var(--color-pale-gray)",
      "--background": "var(--color-white)",
      background:           `rgba(255, 135, 44, ${bgOpacity})`,
      boxShadow: `0 2px 25px rgba(255, 135, 46, ${bsOpacity})`,
    },
    {
      "--main-color": "var(--color-red)",
      "--filtered-color": "var(--filtered-red)",
      "--text-color": "var(--color-pale-gray)",
      "--background": "var(--color-white)",
      background:           `rgba(244, 67, 54, ${bgOpacity})`,
      boxShadow: `0 2px 25px rgba(244, 67, 56, ${bsOpacity})`,
    },
    {
      "--main-color": "var(--color-primary)",
      "--filtered-color": "var(--filtered-primary)",
      "--text-color": "var(--color-pale-gray)",
      "--background": "var(--color-white)",
      background:           `rgba(97, 218, 251, ${bgOpacity})`,
      boxShadow: `0 2px 25px rgba(97, 218, 253, ${bsOpacity})`
    },
    {
      "--main-color": "var(--color-primary)",
      "--filtered-color": "var(--filtered-primary)",
      "--text-color": "var(--color-white)",
      "--background": "var(--color-pale-gray)",
      background:           `rgba(40, 44, 52, ${bgOpacity})`,
      boxShadow: `0 2px 25px rgba(40, 44, 54, ${bsOpacity})`
    },
  ];
}
