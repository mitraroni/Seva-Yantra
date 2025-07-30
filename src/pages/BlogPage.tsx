
import { Header } from "@/components/Header";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
