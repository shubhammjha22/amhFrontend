import { mockApi } from "@/lib/mockApi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CMSRenderer from "@/components/layout/CMSRenderer";

// Generate static paths for all available pages
export async function generateStaticParams() {
  const { pages } = await mockApi.getPages();
  return pages.map((page) => ({
    slug: page.slug.split("/").filter(Boolean), // convert "services/hr" => ["services", "hr"]
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }) {
  const content = await mockApi.getPageContent(params.slug);

  return {
    title: content?.hero?.title || "Outscale Partners",
    description:
      content?.hero?.description ||
      "Transform your business with intelligent automation and strategic outsourcing solutions.",
  };
}

export default async function DynamicPage({ params }) {
  const navigation = await mockApi.getNavigation();
  const content = await mockApi.getPageContent(params.slug);
  const slug = params.slug?.join("/") || "";
  // if (!content) {
  //   return (
  //     <div className="min-h-screen bg-black text-white flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
  //         <p className="text-gray-300">
  //           The page you're looking for doesn't exist.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-black">
      <Header navigation={navigation} />
      <CMSRenderer slug={slug} content={content} />

      <Footer />
    </div>
  );
}
