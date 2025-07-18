import React, { useState, useEffect } from 'react';
import {
  Rocket,
  Users,
  BarChart3,
  Calendar,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  Settings,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Briefcase,
  GitBranch,
  Award,
  Search,
  Filter,
  Eye,
  Plus,
} from 'lucide-react';

const TemplateSelector = ({ onTemplateSelect, onCreateBlank }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const templateCategories = [
    { id: 'all', name: 'All Templates', icon: Star },
    { id: 'alpha', name: 'Alpha Launch', icon: Rocket },
    { id: 'beta', name: 'Beta Testing', icon: Users },
    { id: 'demo', name: 'Internal Demo', icon: Eye },
    { id: 'stakeholder', name: 'Stakeholder Update', icon: Briefcase },
    { id: 'feature', name: 'Feature Release', icon: Zap },
    { id: 'maintenance', name: 'Maintenance & Updates', icon: Settings },
  ];

  const templates = [
    {
      id: 'alpha-launch',
      name: 'Alpha Product Launch',
      description:
        'Comprehensive template for alpha version launches with feedback collection',
      category: 'alpha',
      difficulty: 'Advanced',
      estimatedTime: '15 min',
      features: [
        'Hero Section',
        'Feature Highlights',
        'Alpha Feedback Form',
        'KPI Dashboard',
        'Team Contacts',
      ],
      preview:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
      popular: true,
      components: [
        {
          type: 'hero',
          content: {
            headline: 'Alpha Release: Next-Gen Analytics Platform',
            subheadline:
              'Help us shape the future of data analytics. Join our alpha testing program.',
            ctaText: 'Request Alpha Access',
            backgroundImage:
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
            stats: [
              { number: '50+', label: 'Features' },
              { number: '2x', label: 'Faster Processing' },
              { number: '99.9%', label: 'Uptime Target' },
            ],
          },
        },
        {
          type: 'features',
          content: {
            title: 'Alpha Features Overview',
            subtitle: 'Core functionality available in this alpha release',
            features: [
              {
                icon: 'BarChart3',
                title: 'Real-time Analytics',
                description: 'Live data processing and visualization',
                status: 'Ready',
              },
              {
                icon: 'Users',
                title: 'Team Collaboration',
                description: 'Multi-user workspace with role management',
                status: 'Beta',
              },
              {
                icon: 'Shield',
                title: 'Enterprise Security',
                description: 'SOC2 compliant security framework',
                status: 'Coming Soon',
              },
            ],
          },
        },
        {
          type: 'feedback',
          content: {
            title: 'Alpha Feedback Collection',
            description: 'Your input shapes our product roadmap',
            fields: [
              'Feature Request',
              'Bug Report',
              'Usability Feedback',
              'Performance Issues',
            ],
            contactInfo: {
              email: 'alpha-feedback@company.com',
              slack: '#alpha-testing',
              lead: 'Sarah Chen, Product Manager',
            },
          },
        },
      ],
    },
    {
      id: 'beta-testing',
      name: 'Beta Testing Program',
      description:
        'Structured beta testing with user onboarding and progress tracking',
      category: 'beta',
      difficulty: 'Intermediate',
      estimatedTime: '12 min',
      features: [
        'User Onboarding',
        'Testing Guidelines',
        'Progress Tracker',
        'Support Channels',
      ],
      preview:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      components: [
        {
          type: 'hero',
          content: {
            headline: 'Beta Testing: CRM Integration Suite',
            subheadline:
              'Be among the first to experience our revolutionary CRM integration platform',
            ctaText: 'Join Beta Program',
            backgroundImage:
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
            stats: [
              { number: '100+', label: 'Beta Testers' },
              { number: '15', label: 'CRM Integrations' },
              { number: '4 weeks', label: 'Testing Period' },
            ],
          },
        },
        {
          type: 'timeline',
          content: {
            title: 'Beta Testing Timeline',
            phases: [
              {
                phase: 'Week 1-2',
                title: 'Core Feature Testing',
                description: 'Test basic CRM sync and data mapping',
                status: 'active',
              },
              {
                phase: 'Week 3',
                title: 'Advanced Workflows',
                description: 'Test automation and custom field mapping',
                status: 'upcoming',
              },
              {
                phase: 'Week 4',
                title: 'Performance & Scale',
                description: 'Load testing and feedback collection',
                status: 'upcoming',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'internal-demo',
      name: 'Internal Product Demo',
      description:
        'Executive-ready demo presentation with key metrics and business impact',
      category: 'demo',
      difficulty: 'Beginner',
      estimatedTime: '8 min',
      features: [
        'Executive Summary',
        'Demo Video',
        'Business Metrics',
        'Q&A Section',
      ],
      preview:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
      popular: true,
      components: [
        {
          type: 'hero',
          content: {
            headline: 'Internal Demo: Project Phoenix',
            subheadline:
              'Revolutionary workflow automation platform ready for executive review',
            ctaText: 'Watch Demo',
            backgroundImage:
              'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop',
            stats: [
              { number: '40%', label: 'Efficiency Gain' },
              { number: '$2M', label: 'Projected Savings' },
              { number: '6 months', label: 'ROI Timeline' },
            ],
          },
        },
        {
          type: 'metrics',
          content: {
            title: 'Business Impact Metrics',
            metrics: [
              {
                title: 'Process Automation',
                value: '85%',
                change: '+15%',
                description: 'Manual tasks eliminated',
              },
              {
                title: 'Team Productivity',
                value: '127%',
                change: '+27%',
                description: 'Compared to baseline',
              },
              {
                title: 'Error Reduction',
                value: '92%',
                change: '-8%',
                description: 'Fewer manual errors',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'stakeholder-update',
      name: 'Stakeholder Progress Update',
      description:
        'Professional update template for project stakeholders and executives',
      category: 'stakeholder',
      difficulty: 'Intermediate',
      estimatedTime: '10 min',
      features: [
        'Progress Summary',
        'Milestone Tracker',
        'Risk Assessment',
        'Next Steps',
      ],
      preview:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      components: [
        {
          type: 'hero',
          content: {
            headline: 'Q3 Project Update: Digital Transformation',
            subheadline:
              'Progress update on our enterprise digital transformation initiative',
            ctaText: 'View Full Report',
            backgroundImage:
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
            stats: [
              { number: '78%', label: 'Complete' },
              { number: '12', label: 'Milestones' },
              { number: 'On Track', label: 'Status' },
            ],
          },
        },
        {
          type: 'progress',
          content: {
            title: 'Project Milestones',
            milestones: [
              {
                title: 'Infrastructure Setup',
                status: 'completed',
                date: 'Aug 15, 2024',
                description: 'Cloud infrastructure and security frameworks',
              },
              {
                title: 'User Training Program',
                status: 'in-progress',
                date: 'Sep 30, 2024',
                description: 'Organization-wide training rollout',
              },
              {
                title: 'Go-Live Preparation',
                status: 'pending',
                date: 'Oct 15, 2024',
                description: 'Final testing and deployment preparation',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'feature-release',
      name: 'Feature Release Announcement',
      description:
        'Announce new features with detailed specifications and usage guidelines',
      category: 'feature',
      difficulty: 'Beginner',
      estimatedTime: '6 min',
      features: [
        'Feature Showcase',
        'Usage Guide',
        'Benefits List',
        'Support Resources',
      ],
      preview:
        'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop',
      components: [
        {
          type: 'hero',
          content: {
            headline: 'New Feature: Advanced Reporting Dashboard',
            subheadline:
              'Powerful analytics and customizable reports now available in your workspace',
            ctaText: 'Explore Features',
            backgroundImage:
              'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=600&fit=crop',
            stats: [
              { number: '25+', label: 'Report Types' },
              { number: '10x', label: 'Faster Export' },
              { number: 'Real-time', label: 'Data Sync' },
            ],
          },
        },
        {
          type: 'features',
          content: {
            title: "What's New",
            features: [
              {
                icon: 'BarChart3',
                title: 'Custom Dashboards',
                description:
                  'Create personalized dashboards with drag-and-drop widgets',
              },
              {
                icon: 'Calendar',
                title: 'Scheduled Reports',
                description:
                  'Automated report generation and email distribution',
              },
              {
                icon: 'Target',
                title: 'Goal Tracking',
                description:
                  'Set and monitor KPIs with visual progress indicators',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'maintenance-update',
      name: 'System Maintenance & Updates',
      description:
        'Communicate system updates, downtime, and maintenance schedules',
      category: 'maintenance',
      difficulty: 'Beginner',
      estimatedTime: '5 min',
      features: [
        'Maintenance Schedule',
        'Impact Assessment',
        'Contact Information',
        'Status Updates',
      ],
      preview:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      components: [
        {
          type: 'hero',
          content: {
            headline: 'Scheduled Maintenance: System Upgrade',
            subheadline:
              'Important updates to improve performance and security',
            ctaText: 'View Schedule',
            backgroundImage:
              'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
            stats: [
              { number: '2 hours', label: 'Downtime' },
              { number: 'Oct 25', label: 'Scheduled Date' },
              { number: '99.9%', label: 'Target Uptime' },
            ],
          },
        },
        {
          type: 'schedule',
          content: {
            title: 'Maintenance Timeline',
            events: [
              {
                time: '11:00 PM',
                title: 'Maintenance Begins',
                description: 'System will be unavailable for updates',
              },
              {
                time: '12:30 AM',
                title: 'Database Upgrade',
                description: 'Performance improvements and security patches',
              },
              {
                time: '1:00 AM',
                title: 'System Online',
                description: 'All services restored and operational',
              },
            ],
          },
        },
      ],
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template) => {
    onTemplateSelect(template);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Choose Your Launch Template
              </h1>
              <p className="mt-2 text-gray-600">
                Select a pre-built template or start from scratch
              </p>
            </div>
            <button
              onClick={onCreateBlank}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Start Blank
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {templateCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
              onClick={() => handleTemplateSelect(template)}
            >
              {/* Template Preview */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                {template.popular && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center ${
                    hoveredTemplate === template.id ? 'bg-opacity-10' : ''
                  }`}
                >
                  {hoveredTemplate === template.id && (
                    <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg transform scale-95 hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      Preview Template
                    </div>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {template.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      template.difficulty
                    )}`}
                  >
                    {template.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {template.estimatedTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    {template.features.length} sections
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {template.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs">
                      +{template.features.length - 3} more
                    </span>
                  )}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  Use This Template
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No templates found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelector;