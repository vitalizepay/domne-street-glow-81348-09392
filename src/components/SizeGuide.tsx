export default function SizeGuide() {
  return (
    <section className="size-guide mt-6 space-y-4" aria-labelledby="size-guide-title">
      <h3 id="size-guide-title" className="text-base font-semibold">
        Size Guide
      </h3>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-semibold">Chest (in)</th>
              <th className="px-4 py-3 text-left font-semibold">Shoulder (in)</th>
              <th className="px-4 py-3 text-left font-semibold">Length (in)</th>
              <th className="px-4 py-3 text-left font-semibold">Sleeve (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">S</td>
              <td className="px-4 py-3">37</td>
              <td className="px-4 py-3">16.5</td>
              <td className="px-4 py-3">26.8</td>
              <td className="px-4 py-3">7</td>
            </tr>
            <tr className="bg-muted/30 border-t border-border">
              <td className="px-4 py-3 font-medium">M</td>
              <td className="px-4 py-3">38.6</td>
              <td className="px-4 py-3">17.0</td>
              <td className="px-4 py-3">27.6</td>
              <td className="px-4 py-3">7.5</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">L</td>
              <td className="px-4 py-3">40.2</td>
              <td className="px-4 py-3">17.5</td>
              <td className="px-4 py-3">28.3</td>
              <td className="px-4 py-3">8</td>
            </tr>
            <tr className="bg-muted/30 border-t border-border">
              <td className="px-4 py-3 font-medium">XL</td>
              <td className="px-4 py-3">43.3</td>
              <td className="px-4 py-3">18.0</td>
              <td className="px-4 py-3">29.1</td>
              <td className="px-4 py-3">8.3</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">XXL</td>
              <td className="px-4 py-3">46.5</td>
              <td className="px-4 py-3">18.5</td>
              <td className="px-4 py-3">30</td>
              <td className="px-4 py-3">8.7</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        Tip: If you're between sizes, choose the larger for a relaxed fit.
      </p>

      <details className="group rounded-xl border border-border p-4 open:shadow-sm">
        <summary className="cursor-pointer select-none text-sm font-medium list-none">How to Measure</summary>
        <div className="mt-4 space-y-3">
          <img
            src="/assets/measure-guide.jpg"
            alt="How to measure your chest, shoulder, length, and sleeve accurately"
            loading="lazy"
            width="1200"
            height="800"
            className="w-full h-auto rounded-lg"
          />
          <ul className="text-sm list-disc pl-5 space-y-2">
            <li>
              <strong>Chest:</strong> Measure around the fullest part, keeping the tape horizontal.
            </li>
            <li>
              <strong>Shoulder:</strong> Measure seam-to-seam across the back.
            </li>
            <li>
              <strong>Length:</strong> From the highest shoulder point to hem.
            </li>
            <li>
              <strong>Sleeve:</strong> From shoulder seam to end of sleeve.
            </li>
          </ul>
        </div>
      </details>
    </section>
  );
}
