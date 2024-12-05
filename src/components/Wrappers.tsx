type Props = {
  children: React.ReactNode;
  className?: string;
};

// BodyWrapper for full-screen flex centering
const BodyWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

// ContentWrapper for constraining content with 80% width and responsive height
const ContentWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-4/5  flex relative flex-col justify-center items-start h-auto ${className}`}
    >
      {children}
    </div>
  );
};

export { BodyWrapper, ContentWrapper };
