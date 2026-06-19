import MarkdownDocument from "@/components/MarkdownDocument";
import termsContent from "@/content/terms.md?raw";

const TermsOfService = () => {
  return (
    <MarkdownDocument
      subtitle="документы"
      title="Пользовательское соглашение"
      content={termsContent}
    />
  );
};

export default TermsOfService;
