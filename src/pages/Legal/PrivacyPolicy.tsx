import MarkdownDocument from "@/components/MarkdownDocument";
import privacyContent from "@/content/privacy.md?raw";

const PrivacyPolicy = () => {
  return (
    <MarkdownDocument
      subtitle="документы"
      title="Политика конфиденциальности"
      content={privacyContent}
    />
  );
};

export default PrivacyPolicy;
