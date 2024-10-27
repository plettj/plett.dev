import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }: { content: string }) {
  return (
    <div className="w-full">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
