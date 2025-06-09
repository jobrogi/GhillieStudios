import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownPage = ({ slug: overrideSlug }) => {
  const routeParams = useParams();
  const slug = overrideSlug || routeParams.slug;
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    if (!slug) {
      setContent("## No slug provided.");
      return;
    }

    // Split the slug: FolderName---FileName (or just FileName for function libraries)
    const [folder, ...fileParts] = slug.split("---");
    const file = fileParts.join("---");

    // Handle top-level Docs folder
    const folderName = folder === "Docs" ? "" : `${folder}/`;

    const filePath = `${import.meta.env.BASE_URL}Docs/${folderName}${file}.md`;

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("## 404\n\nPage not found."));
  }, [slug]);

  return (
    <div className="relative min-h-screen w-full">
      {/* Full Height Solid Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex justify-center">
        <div className="w-full  bg-[#0f0f0f] bg-opacity-100 rounded-none sm:rounded-xl shadow-lg px-6 py-16 -my-12">
          <article className="prose prose-invert max-w-none text-left">
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ node, ...props }) => {
                  const href = props.href || "";

                  if (href.startsWith("newtab:")) {
                    const cleanHref = href.replace("newtab:", "");
                    return (
                      <a
                        href={cleanHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {props.children}
                      </a>
                    );
                  }

                  // Internal link
                  const isInternal =
                    href.startsWith("/") || href.startsWith("./");

                  if (isInternal) {
                    return <RouterLink to={href}>{props.children}</RouterLink>;
                  }

                  // External fallback
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {props.children}
                    </a>
                  );
                },
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPage;
