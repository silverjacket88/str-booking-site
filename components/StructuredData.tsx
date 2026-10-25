// Renders a JSON-LD <script> tag. JSON.stringify output is safe to inline
// here unencoded because none of our structured-data inputs are
// attacker-controlled free text that could contain "</script>" - all of it
// comes from siteConfig / lib/data (our own code), not user input.
export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
