import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownDocumentProps = {
  title: string;
  subtitle?: string;
  content: string;
};

const MarkdownDocument = ({
  title,
  subtitle,
  content,
}: MarkdownDocumentProps) => {
  return (
    <article className="mt-20 bg-background px-6 py-20 min-h-[calc(100vh-85px)]">
      <div className="max-w-3xl mx-auto">
        {subtitle && (
          <p className="text-xs font-light uppercase tracking-widest text-[#E3853C] text-center mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-script text-4xl text-center text-foreground mb-12">
          {title}
        </h1>
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default MarkdownDocument;
