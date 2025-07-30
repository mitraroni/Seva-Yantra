
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Award } from "lucide-react";

export const Blog = () => {
  const featuredPost = {
    title: "The Future of Pre-Engineered Buildings in Indian Construction Industry",
    excerpt: "Explore how PEB technology is revolutionizing construction timelines, reducing costs, and improving structural integrity across India's rapidly growing infrastructure sector.",
    author: "Kumar Naik S",
    date: "January 15, 2025",
    category: "Industry Insights",
    readTime: "8 min read",
    image: "/api/placeholder/800/400"
  };

  const blogPosts = [
    {
      title: "Advanced CAD Techniques for Structural Engineering",
      excerpt: "Learn about the latest CAD methodologies and software tools that are transforming how we approach structural design and analysis.",
      author: "Kumar Naik S",
      date: "January 10, 2025",
      category: "CAD Services",
      readTime: "6 min read"
    },
    {
      title: "Warehouse Design Trends: Maximizing Efficiency in 2025",
      excerpt: "Discover the key principles of modern warehouse design including automation integration, space optimization, and sustainable practices.",
      author: "Sevya Yantra Team",
      date: "January 8, 2025",
      category: "Warehouse Design",
      readTime: "7 min read"
    },
    {
      title: "Sports Facility Engineering: Creating Safe and Functional Spaces",
      excerpt: "An in-depth look at the engineering considerations for designing sports complexes, gymnasiums, and recreational facilities.",
      author: "Kumar Naik S",
      date: "January 5, 2025",
      category: "Sports Design",
      readTime: "5 min read"
    },
    {
      title: "Material Handling Systems: Automation vs Manual Operations",
      excerpt: "Compare traditional manual material handling with modern automated systems, exploring costs, benefits, and implementation strategies.",
      author: "Sevya Yantra Team",
      date: "December 28, 2024",
      category: "Material Handling",
      readTime: "9 min read"
    },
    {
      title: "Reverse Engineering in Manufacturing: When and Why",
      excerpt: "Understanding the applications of reverse engineering in product development, quality control, and competitive analysis.",
      author: "Kumar Naik S",
      date: "December 25, 2024",
      category: "Engineering",
      readTime: "6 min read"
    },
    {
      title: "Sustainable Steel Building Design: Environmental Considerations",
      excerpt: "How to incorporate eco-friendly practices in steel building design while maintaining structural integrity and cost-effectiveness.",
      author: "Sevya Yantra Team",
      date: "December 20, 2024",
      category: "Sustainability",
      readTime: "8 min read"
    }
  ];

  const categories = [
    "Industry Insights", "CAD Services", "Warehouse Design", "Sports Design", 
    "Material Handling", "Engineering", "Sustainability", "Case Studies"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Engineering Insights & Industry Blog
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends, technologies, and best practices in engineering 
            solutions, CAD services, and industrial design from Kumar Naik S and the Sevya Yantra team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Featured Article</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-100 text-red-800">{featuredPost.category}</Badge>
                <Badge variant="outline">{featuredPost.readTime}</Badge>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-700">
                  Read Article <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-8 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Engineering Trends</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on engineering solutions, 
              CAD technologies, and industry best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-2 rounded-lg text-slate-800"
              />
              <Button className="bg-white text-blue-600 hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </CardContent>
        </Card>

        {/* About the Author */}
        <Card className="mt-16">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Kumar Naik S</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Chief Engineer, Sevya Yantra Engineering Solutions</p>
                <p className="text-slate-600 leading-relaxed">
                  With over 15 years of experience in engineering design and project management, 
                  Kumar Naik S leads Sevya Yantra's mission to deliver innovative and sustainable 
                  engineering solutions. His expertise spans across PEB design, CAD services, 
                  and industrial facility planning.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className="bg-green-100 text-green-800">
                  <Award className="h-3 w-3 mr-1" />
                  15+ Years Experience
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  200+ Projects Completed
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
