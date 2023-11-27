interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};
