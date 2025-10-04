import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, GitCommit, Star, Users } from 'lucide-react';

interface GitHubStatsProps {
  isDark: boolean;
}

const GitHubStats = ({ isDark }: GitHubStatsProps) => {
  const stats = [
    { icon: GitCommit, label: 'Commits', value: '500+', color: 'text-green-400' },
    { icon: GitBranch, label: 'Repositories', value: '25+', color: 'text-blue-400' },
    { icon: Star, label: 'Stars Earned', value: '100+', color: 'text-yellow-400' },
    { icon: Users, label: 'Contributions', value: '1000+', color: 'text-purple-400' }
  ];

  return (
    <section className={`py-16 px-4 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            GitHub Activity
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`text-center ${
                  isDark 
                    ? 'bg-gray-800/70 border-gray-700 hover:border-primary/50' 
                    : 'bg-white hover:border-primary/50'
                } transition-all duration-300 hover:shadow-lg`}>
                  <CardContent className="p-6">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className={`text-2xl md:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
