import { useState, useMemo } from 'react';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';

export interface PostItem {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: string;
  tags: string[];
  readingTime: string;
}

interface BlogSearchProps {
  posts: PostItem[];
  categories: string[];
}

export default function BlogSearch({ posts, categories }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search Input & Category Filters */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, keyword, or tag..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          />
        </div>

        {/* Category tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['All', ...categories].map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-colors border ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-transparent shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">No articles matched your criteria.</p>
          <p className="text-xs text-zinc-500">Try adjusting your search query or selecting another category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
