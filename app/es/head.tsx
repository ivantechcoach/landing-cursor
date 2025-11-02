export default function HeadES() {
  const base = 'https://ivantechcoach.com';
  return (
    <>
      <title>Ivan Tech Coach - Coaching Tecnológico Profesional</title>
      <link rel="alternate" hrefLang="es-ES" href={`${base}/es`} />
      <link rel="alternate" hrefLang="en-US" href={`${base}/en`} />
      <link rel="alternate" hrefLang="ca-ES" href={`${base}/ca`} />
      <link rel="alternate" hrefLang="x-default" href={`${base}/ca`} />
    </>
  );
}


