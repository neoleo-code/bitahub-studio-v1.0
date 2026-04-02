import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Server, 
  Layers, 
  Database, 
  CreditCard, 
  User, 
  Search, 
  Bell, 
  ChevronDown,
  Play,
  Heart,
  Download,
  X,
  LogOut,
  Settings,
  Cpu,
  MemoryStick,
  HardDrive,
  PieChart,
  Activity,
  FileText,
  Shield,
  Key,
  Mail,
  Smartphone,
  Plus,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Gift,
  Copy,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Terminal,
  MonitorPlay,
  FolderOpen,
  Trash2,
  Power,
  RefreshCw,
  Save,
  Timer,
  ArrowLeft,
  Check,
  Cloud,
  CheckSquare,
  Wallet,
  Sun,
  Moon,
  Box
} from 'lucide-react';

// --- Mock Data ---
const MENU_ITEMS = [
  { id: 'home', label: '主页', icon: Home },
  { id: 'instances', label: '实例', icon: Server },
  { id: 'images', label: '镜像', icon: Layers },
  { id: 'storage', label: '存储', icon: Database },
  { id: 'billing', label: '费用', icon: CreditCard },
  { id: 'account', label: '账号', icon: User },
];

const CATEGORIES = [
  '全部', '操作系统', '数据库', 'AI大模型', 'Web应用', '开发环境', '中间件', '其他'
];

const MOCK_IMAGES = [
  {
    id: 1,
    title: 'Ubuntu 24.04 LTS',
    description: '最新长期支持版，适用于通用计算与开发环境，提供极高的稳定性和安全性。',
    author: 'Canonical',
    downloads: '2.1m',
    likes: 1560,
    tags: ['OS', 'Linux'],
    gradient: 'from-orange-500/80 to-red-600/80',
    delay: '0s'
  },
  {
    id: 2,
    title: 'Llama 3 8B Instruct',
    description: 'Meta开源的新一代大语言模型，已优化推理性能，适合构建智能对话应用。',
    author: 'Meta AI',
    downloads: '845k',
    likes: 3200,
    tags: ['AI', 'LLM'],
    gradient: 'from-blue-500/80 to-cyan-400/80',
    delay: '0.2s'
  },
  {
    id: 3,
    title: 'PostgreSQL 16',
    description: '强大的开源关系型数据库，支持高级SQL特性，具备极高的数据完整性。',
    author: 'PostgreSQL Global',
    downloads: '1.2m',
    likes: 890,
    tags: ['Database', 'SQL'],
    gradient: 'from-indigo-500/80 to-purple-600/80',
    delay: '0.4s'
  },
  {
    id: 4,
    title: 'Node.js 20 + Express',
    description: '预装Node.js环境与Express框架的Web开发基础镜像，开箱即用。',
    author: 'WebStack',
    downloads: '560k',
    likes: 420,
    tags: ['Web', 'Node'],
    gradient: 'from-green-400/80 to-emerald-600/80',
    delay: '0.6s'
  },
  {
    id: 5,
    title: 'Stable Diffusion XL',
    description: '高质量AI图像生成模型，支持复杂提示词与高分辨率出图。',
    author: 'Stability AI',
    downloads: '1.5m',
    likes: 5400,
    tags: ['AI', 'Image'],
    gradient: 'from-pink-500/80 to-rose-500/80',
    delay: '0.8s'
  },
  {
    id: 6,
    title: 'Redis 7.2',
    description: '高性能内存键值数据库，常用于缓存、会话存储与消息队列。',
    author: 'Redis Labs',
    downloads: '1.8m',
    likes: 1100,
    tags: ['Database', 'Cache'],
    gradient: 'from-red-500/80 to-orange-600/80',
    delay: '1.0s'
  },
  {
    id: 7,
    title: 'Nginx 1.25',
    description: '高性能HTTP和反向代理Web服务器，提供负载均衡与静态资源托管。',
    author: 'Nginx Inc',
    downloads: '3.2m',
    likes: 2100,
    tags: ['Web', 'Server'],
    gradient: 'from-emerald-500/80 to-teal-600/80',
    delay: '1.2s'
  },
  {
    id: 8,
    title: 'Qwen 1.5 14B',
    description: '通义千问开源模型，支持多语言与长文本处理，具备强大的逻辑推理能力。',
    author: 'Alibaba Cloud',
    downloads: '420k',
    likes: 1800,
    tags: ['AI', 'LLM'],
    gradient: 'from-violet-500/80 to-fuchsia-600/80',
    delay: '1.4s'
  }
];

// --- Components ---

const Sidebar = ({ activeMenu, setActiveMenu }: { activeMenu: string, setActiveMenu: (id: string) => void }) => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass-panel neon-border border-l-0 border-y-0 flex flex-col z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)]">
          <Layers className="w-5 h-5 text-gray-900 dark:text-white" />
        </div>
        <span className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white">bitahub<span className="text-cyan-400">.studio</span></span>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-black/10 dark:bg-white/10 text-cyan-400 shadow-[inset_0_0_10px_rgba(56,189,248,0.2)] border border-cyan-400/30' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

const TopBar = ({ 
  isLoggedIn, 
  setIsLoggedIn, 
  showUserMenu, 
  setShowUserMenu,
  isDarkMode,
  setIsDarkMode
}: { 
  isLoggedIn: boolean, 
  setIsLoggedIn: (v: boolean) => void,
  showUserMenu: boolean,
  setShowUserMenu: (v: boolean) => void,
  isDarkMode: boolean,
  setIsDarkMode: (v: boolean) => void
}) => {
  return (
    <header className="h-20 glass-panel neon-border border-x-0 border-t-0 sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-1 max-w-2xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
          <input 
            type="text" 
            placeholder="搜索镜像、实例或文档..." 
            className="w-full bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all neon-border"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="relative text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        
        <button className="relative text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
        </button>
        
        <div className="h-6 w-px bg-black/10 dark:bg-white/10"></div>

        {isLoggedIn ? (
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)} 
              className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-black/20 dark:border-white/20 hover:border-cyan-400 transition-colors focus:outline-none shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            >
              <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </button>
            
            {showUserMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)}></div>
                <div className="absolute right-0 mt-3 w-56 glass-panel neon-border rounded-xl py-2 flex flex-col shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 mb-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Developer</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">dev@bitahub.studio</p>
                  </div>
                  <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors text-left">
                    <Settings className="w-4 h-4" /> 账号设置
                  </button>
                  <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors text-left">
                    <CreditCard className="w-4 h-4" /> 费用中心
                  </button>
                  <div className="h-px bg-black/10 dark:bg-white/10 my-1"></div>
                  <button 
                    onClick={() => { setIsLoggedIn(false); setShowUserMenu(false); }} 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-red-300 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" /> 退出登录
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsLoggedIn(true)} 
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              登录
            </button>
            <button 
              onClick={() => setIsLoggedIn(true)} 
              className="px-5 py-2 text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-full hover:bg-cyan-500/30 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              注册
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

const ImageCard = ({ data, onClick }: { data: typeof MOCK_IMAGES[0], onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="neon-border rounded-2xl overflow-hidden bg-white/60 dark:bg-black/40 backdrop-blur-md group cursor-pointer flex flex-col h-[380px] hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: data.delay }}
    >
      {/* Top visual area */}
      <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${data.gradient}`}>
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
        
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-black/30 dark:border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Search className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          {data.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/20 dark:border-white/20 text-[10px] font-semibold text-gray-900 dark:text-white uppercase tracking-wider shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-1 relative">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">{data.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 flex-1 leading-relaxed">{data.description}</p>
        
        <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-black/10 dark:border-white/10">
              <User className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="font-medium">{data.author}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Download className="w-4 h-4" />
              <span className="font-medium">{data.downloads}</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="font-medium">{data.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageModal = ({ 
  image, 
  onClose, 
  onDeploy 
}: { 
  image: typeof MOCK_IMAGES[0] | null, 
  onClose: () => void,
  onDeploy: (img: typeof MOCK_IMAGES[0]) => void
}) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="glass-panel neon-border rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Left: Media Area (Video/Image Placeholder) */}
        <div className={`w-full md:w-1/2 h-64 md:h-auto relative bg-gradient-to-br ${image.gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
          
          {/* Mock Video Player UI */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-black/30 dark:border-white/30 cursor-pointer hover:scale-110 hover:bg-white/30 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Play className="w-8 h-8 text-gray-900 dark:text-white ml-2" fill="currentColor" />
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-white/80 rounded-full"></div>
          </div>
        </div>

        {/* Right: Info & Actions */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col relative bg-white/60 dark:bg-black/40 overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors border border-black/10 dark:border-white/10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-2 mb-4">
            {image.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight pr-8">{image.title}</h2>
          
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-black/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-black/10 dark:border-white/10">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{image.author}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">官方认证发布者</p>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">镜像介绍</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-6">
              {image.description} 
              此镜像经过深度优化，内置了常用的依赖库和工具链，旨在为您提供开箱即用的极致体验。无论是用于开发测试还是生产环境，都能保证极高的稳定性和运行效率。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">系统架构</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">x86_64 / ARM64</p>
              </div>
              <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">推荐配置</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">4核 8G</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2"><Download className="w-4 h-4" /> {image.downloads} 次部署</span>
              <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> {image.likes} 收藏</span>
            </div>
            
            <button 
              onClick={() => onDeploy(image)}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              立即部署
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InstanceDeployPage = ({ image, onBack }: { image: typeof MOCK_IMAGES[0] | null, onBack: () => void }) => {
  const [selectedGpu, setSelectedGpu] = useState('rtx-4090-d-24g');
  const [gpuCount, setGpuCount] = useState(1);
  const [billingMethod, setBillingMethod] = useState('按小时计费');

  const gpus = [
    { id: 'rtx-4090-d-48g', name: 'RTX 4090 D', vram: '48 G', price: 2.59 },
    { id: 'rtx-4090-48g', name: 'RTX 4090', vram: '48 G', price: 3.39 },
    { id: 'rtx-4090-d-24g', name: 'RTX 4090 D', vram: '24 G', price: 1.59 },
    { id: 'rtx-4090-24g', name: 'RTX 4090', vram: '24 G', price: 1.89 },
  ];

  const selectedGpuData = gpus.find(g => g.id === selectedGpu) || gpus[2];

  return (
    <div className="max-w-3xl mx-auto w-full animate-in fade-in duration-500 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">请选择镜像</h2>
        </div>
        <div className="glass-panel border border-black/10 dark:border-white/10 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
            👾
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> {image?.title || 'OpenClaw...'}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">AI智能体 Qwen3.5-27B v2</div>
          </div>
        </div>
      </div>

      {/* GPU Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {gpus.map(gpu => (
          <div 
            key={gpu.id}
            onClick={() => setSelectedGpu(gpu.id)}
            className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
              selectedGpu === gpu.id 
                ? 'border-blue-500 bg-blue-500/5' 
                : 'border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 hover:border-black/30 dark:hover:border-white/30'
            }`}
          >
            {selectedGpu === gpu.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                <Check className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
              </div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">{gpu.vram}</span>
              <span className={`font-bold ${selectedGpu === gpu.id ? 'text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}>{gpu.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">显存</span>
              <span className={`font-bold ${selectedGpu === gpu.id ? 'text-blue-400' : 'text-gray-900 dark:text-white'}`}>¥{gpu.price.toFixed(2)} <span className="text-xs font-normal text-gray-500 dark:text-gray-400">/ 小时</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Config Box */}
      <div className="glass-panel border border-black/10 dark:border-white/10 rounded-xl divide-y divide-white/10">
        {/* GPU Count */}
        <div className="p-5 flex items-center gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm">GPU</div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-900 dark:text-white">{selectedGpuData.name}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">×</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <button
                  key={num}
                  onClick={() => setGpuCount(num)}
                  className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-colors ${
                    gpuCount === num 
                      ? 'bg-blue-500/20 text-blue-400 font-medium' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="p-5 flex items-start gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm mt-1">配置信息</div>
          <div className="flex-1 grid grid-cols-4 gap-4">
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">24 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">GB ×</span> 1</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><MonitorPlay className="w-3.5 h-3.5" /> 显存</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">56 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">GB</span></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5" /> 内存</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">14<span className="text-sm font-normal text-gray-500 dark:text-gray-400">核</span></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> CPU</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">4100 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Mbps</span></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> 公网速率</div>
            </div>
          </div>
        </div>

        {/* Disk */}
        <div className="p-5 flex items-center gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm">磁盘配置</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-gray-900 dark:text-white font-medium">100 <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">GB</span></span>
              <span className="text-gray-500 dark:text-gray-400 mx-2">+</span>
              <span className="text-gray-500 dark:text-gray-400">48.74 GB</span>
            </div>
            <span className="px-2 py-1 bg-black/10 dark:bg-white/10 text-gray-500 dark:text-gray-400 text-xs rounded">免费容量</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 ml-2"><HardDrive className="w-4 h-4" /> 系统盘</span>
            <button className="px-3 py-1 bg-blue-500 text-gray-900 dark:text-white text-xs rounded-full hover:bg-blue-600 transition-colors ml-2">扩容</button>
          </div>
        </div>

        {/* Extensions */}
        <div className="p-5 flex items-center gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm">扩展功能</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300"><Cloud className="w-4 h-4" /> 云储存</span>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 text-xs rounded-full">已启用</span>
              <button className="px-3 py-1 bg-blue-500 text-gray-900 dark:text-white text-xs rounded-full hover:bg-blue-600 transition-colors">配置</button>
            </div>
            <div className="w-px h-4 bg-black/10 dark:bg-white/10"></div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300"><Key className="w-4 h-4" /> SSH 密钥</span>
              <button className="px-3 py-1 bg-blue-500 text-gray-900 dark:text-white text-xs rounded-full hover:bg-blue-600 transition-colors">选择</button>
            </div>
          </div>
        </div>

        {/* Billing Method */}
        <div className="p-5 flex items-center gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm">计费方式</div>
          <div className="flex items-center gap-4">
            {['按小时计费', '按天计费', '按周计费', '按月计费'].map(method => (
              <button
                key={method}
                onClick={() => setBillingMethod(method)}
                className={`text-sm transition-colors px-3 py-1.5 rounded-full ${
                  billingMethod === method ? 'text-blue-400 bg-blue-500/10 font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-200'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="p-5 flex items-center gap-6">
          <div className="w-20 text-gray-500 dark:text-gray-400 text-sm">按量计费</div>
          <div className="flex items-end gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-gray-500 dark:text-gray-400">¥</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{(selectedGpuData.price * gpuCount).toFixed(2)}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">每小时</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 mb-1">=</span>
            <div className="flex items-baseline gap-1">
              <span className="text-gray-500 dark:text-gray-400 text-sm">¥</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">{selectedGpuData.price.toFixed(2)}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">基础</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 mb-1">×</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-900 dark:text-white">{gpuCount}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">GPU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-black/10 dark:border-white/10 p-4 z-40 flex items-center justify-center">
        <div className="max-w-3xl w-full flex items-center justify-between">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-gray-900 dark:text-white rounded-xl font-medium transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <CheckSquare className="w-5 h-5" /> 确认部署
          </button>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2">
              <Wallet className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">账户余额</span>
              <span className="font-bold text-gray-900 dark:text-white">¥ 2.41</span>
            </div>
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-gray-900 dark:text-white rounded-lg text-sm transition-colors">
              充值
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InstancesPage = ({ onDeployNew }: { onDeployNew: () => void }) => {
  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500 space-y-6">
      {/* Top Section: Recent Images */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">最近储存的镜像</h2>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-sm text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
            查看账号内所有镜像 <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">暂无私有镜像</span>
        </div>
      </div>

      {/* Action Buttons & Warning */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onDeployNew}
            className="px-5 py-2.5 bg-green-500/10 border border-green-500/50 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(74,222,128,0.15)]"
          >
            <Plus className="w-4 h-4" /> 部署新实例
          </button>
          <button className="px-5 py-2.5 bg-red-500/10 border border-red-500/50 text-red-400 rounded-full text-sm font-medium hover:bg-red-500/20 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(248,113,113,0.15)]">
            <Timer className="w-4 h-4" /> 全局定时关机
          </button>
        </div>
        
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-start gap-3 max-w-2xl">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-xs text-red-200/80 leading-relaxed">
            请勿使用 AI 模型生成违法违规、涉黄涉暴、违背公序良俗的内容以及进行虚拟货币相关业务！<br/>
            一经发现或收到检举投诉，将直接封禁账号留存取证，并将相关数据、IP记录等信息提供至有关部门。
          </p>
        </div>
      </div>

      {/* Instance Card */}
      <div className="glass-panel neon-border rounded-xl overflow-hidden flex flex-col">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Basic Info */}
          <div className="w-full lg:w-72 p-5 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 space-y-5">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Server className="w-4 h-4" /> 实例名
              </div>
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                6FBLFXJOOIZOPZ2D <Edit2 className="w-3.5 h-3.5 text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Layers className="w-4 h-4" /> 实例 ID
              </div>
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                6FBLFXJOOIZOPZ2D <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Cpu className="w-4 h-4" /> GPU
              </div>
              <div className="text-gray-900 dark:text-white font-medium">
                RTX 4090 D <span className="text-gray-400 font-normal mx-1">x</span> 1
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HardDrive className="w-4 h-4" /> 系统磁盘
                </div>
                <div className="text-gray-900 dark:text-white font-medium">
                  28%
                </div>
              </div>
              <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '28%' }}></div>
              </div>
              <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                剩余可用 99.94 GB
              </div>
            </div>
          </div>

          {/* Middle Column: Image & Status */}
          <div className="flex-1 p-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Layers className="w-4 h-4" /> 系统镜像 <span className="text-gray-700 dark:text-gray-200 ml-2 font-medium">基础镜像</span>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-xl p-3 border border-black/10 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-inner">
                  C
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gray-900 dark:text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> ComfyUI_v0.18.2_纯净版
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">未安装节点，不适合新手使用。</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4" /> 系统状态</span>
                <span className="flex items-center gap-1.5"><MonitorPlay className="w-4 h-4 text-green-500" /> GPU 状态</span>
              </div>
              <div className="flex items-center gap-4">
                {/* Circular progress indicators */}
                <div className="w-14 h-14 rounded-full border-[3px] border-blue-100 dark:border-blue-500/20 flex flex-col items-center justify-center text-[10px] relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-blue-500 border-r-transparent border-b-transparent border-l-transparent rotate-45"></div>
                  <span className="text-gray-500 dark:text-gray-400">CPU</span>
                  <span className="text-gray-900 dark:text-white font-bold text-xs">0%</span>
                </div>
                <div className="w-14 h-14 rounded-full border-[3px] border-blue-100 dark:border-blue-500/20 flex flex-col items-center justify-center text-[10px] relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-blue-500 border-r-transparent border-b-transparent border-l-transparent rotate-90"></div>
                  <span className="text-gray-500 dark:text-gray-400">内存</span>
                  <span className="text-gray-900 dark:text-white font-bold text-xs">1.4%</span>
                </div>
                <div className="w-14 h-14 rounded-full border-[3px] border-green-100 dark:border-green-500/20 flex flex-col items-center justify-center text-[10px] relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-green-500 border-r-transparent border-b-transparent border-l-transparent rotate-12"></div>
                  <span className="text-gray-500 dark:text-gray-400">GPU-1</span>
                  <span className="text-gray-900 dark:text-white font-bold text-xs">0%</span>
                </div>
                <div className="w-14 h-14 rounded-full border-[3px] border-green-100 dark:border-green-500/20 flex flex-col items-center justify-center text-[10px] relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-green-500 border-r-transparent border-b-transparent border-l-transparent rotate-[60deg]"></div>
                  <span className="text-gray-500 dark:text-gray-400">显存-1</span>
                  <span className="text-gray-900 dark:text-white font-bold text-xs">1%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Services */}
          <div className="w-full lg:w-80 p-5 flex flex-col gap-6 bg-white/40 dark:bg-black/20">
            <div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" /> 系统服务
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-orange-500" /> Jupyter
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <MonitorPlay className="w-3.5 h-3.5 text-green-500" /> VNC
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" /> SSH
                </button>
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5" /> 镜像自定义服务
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-sm flex items-center justify-center text-[8px] font-bold text-yellow-400">C</div> ComfyUI
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-pink-500" /> ComfyUI日志
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <FolderOpen className="w-3.5 h-3.5 text-red-500" /> 文件管理
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                  <Trash2 className="w-3.5 h-3.5 text-yellow-500" /> 删除输出文件
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Actions & Status */}
        <div className="p-4 border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-green-500 font-medium text-sm bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 运行中
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                <Power className="w-3.5 h-3.5 text-red-500" /> 关机
              </button>
              <button className="px-4 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-blue-500" /> 重启
              </button>
              <button className="px-4 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all shadow-sm flex items-center gap-1.5">
                <Save className="w-3.5 h-3.5 text-green-500" /> 储存镜像
              </button>
              <button className="px-4 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-500/30 transition-all shadow-sm flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5" /> 销毁
              </button>
              <button className="px-4 py-1.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:border-orange-500/30 transition-all shadow-sm flex items-center gap-1.5">
                <Timer className="w-3.5 h-3.5" /> 定时关机
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 已运行 <span className="text-gray-900 dark:text-white font-mono font-medium">02:15:30</span>
            </div>
            <div className="w-px h-4 bg-black/10 dark:border-white/10"></div>
            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 bg-white dark:bg-white/5 px-2 py-1 rounded border border-black/10 dark:border-white/10 text-xs shadow-sm">
              <CreditCard className="w-3 h-3" /> 按量计费
            </span>
            <span className="font-bold text-gray-900 dark:text-white">¥ 1.59 <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/小时</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoragePage = () => {
  const volumes = [
    { id: 'vol-01', name: 'data-disk-1', size: '100 GB', type: 'SSD', status: '已挂载', instance: 'nexus-instance-01', created: '2026-03-15' },
    { id: 'vol-02', name: 'backup-disk', size: '500 GB', type: 'HDD', status: '可用', instance: '-', created: '2026-03-20' },
    { id: 'vol-03', name: 'model-weights', size: '250 GB', type: 'NVMe', status: '已挂载', instance: 'ai-training-node', created: '2026-04-01' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full animate-in fade-in duration-500">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">存储管理</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">管理您的云盘、对象存储与快照。</p>
        </div>
        <button className="px-5 py-2.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-semibold rounded-full hover:bg-cyan-500/30 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)] text-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> 创建存储卷
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel neon-border rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <HardDrive className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">总存储容量</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">850 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">GB</span></p>
          </div>
        </div>
        <div className="glass-panel neon-border rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <PieChart className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">已使用容量</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">320 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">GB</span></p>
          </div>
        </div>
        <div className="glass-panel neon-border rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <Activity className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">存储卷数量</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">3 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">个</span></p>
          </div>
        </div>
      </div>

      <div className="glass-panel neon-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex justify-between items-center bg-white/40 dark:bg-black/20">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">存储卷列表</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
              <tr>
                <th className="px-6 py-4 font-medium">名称 / ID</th>
                <th className="px-6 py-4 font-medium">容量</th>
                <th className="px-6 py-4 font-medium">类型</th>
                <th className="px-6 py-4 font-medium">状态</th>
                <th className="px-6 py-4 font-medium">挂载实例</th>
                <th className="px-6 py-4 font-medium">创建时间</th>
                <th className="px-6 py-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {volumes.map((vol) => (
                <tr key={vol.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">{vol.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{vol.id}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">{vol.size}</td>
                  <td className="px-6 py-4">{vol.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      vol.status === '已挂载' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                    }`}>
                      {vol.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{vol.instance}</td>
                  <td className="px-6 py-4">{vol.created}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">管理</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const BillingPage = () => {
  const transactions = [
    { id: 'tx-1001', date: '2026-04-01 10:23', desc: '按量付费扣费 (nexus-instance-01)', amount: '-¥ 12.50', status: '已完成', type: 'deduct' },
    { id: 'tx-1002', date: '2026-03-28 14:00', desc: '账户充值 (支付宝)', amount: '+¥ 500.00', status: '已完成', type: 'recharge' },
    { id: 'tx-1003', date: '2026-03-15 08:00', desc: '包月套餐续费 (Pro Plan)', amount: '-¥ 99.00', status: '已完成', type: 'deduct' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full animate-in fade-in duration-500">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">费用中心</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">查看账单明细、账户余额与消费趋势。</p>
        </div>
        <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] text-sm flex items-center gap-2">
          <CreditCard className="w-4 h-4" /> 立即充值
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass-panel neon-border rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
          <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">账户可用余额</p>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">¥ 388.50</span>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-colors">
              充值
            </button>
            <button className="px-4 py-2 bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-black/10 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              提现
            </button>
          </div>
        </div>

        <div className="glass-panel neon-border rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
          <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">本月预估消费</p>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">¥ 111.50</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-1.5">/ ¥ 500.00 预算</span>
          </div>
          <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 w-[22%] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="glass-panel neon-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex justify-between items-center bg-white/40 dark:bg-black/20">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> 账单明细
          </h2>
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
            导出账单 <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="divide-y divide-white/5">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  tx.type === 'recharge' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400'
                }`}>
                  {tx.type === 'recharge' ? <Plus className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">{tx.desc}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date} · 交易号: {tx.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${tx.type === 'recharge' ? 'text-green-400' : 'text-gray-900 dark:text-white'}`}>
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-end gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccountPage = () => {
  return (
    <div className="max-w-4xl mx-auto w-full animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">账号设置</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">管理您的个人信息、安全设置与偏好。</p>
      </div>

      <div className="space-y-6">
        {/* Profile Card */}
        <div className="glass-panel neon-border rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-cyan-400" /> 个人资料
          </h2>
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black/20 dark:border-white/20">
                <img src="https://picsum.photos/seed/user/200/200" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black hover:bg-cyan-400 transition-colors border-2 border-[#0a0a0c]">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Developer</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">dev@bitahub.studio</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                Pro Plan 用户
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/10 dark:border-white/10">
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">显示名称</label>
              <div className="bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm">Developer</div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">联系邮箱</label>
              <div className="bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm flex justify-between items-center">
                dev@bitahub.studio
                <span className="text-xs text-green-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 已验证</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="glass-panel neon-border rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" /> 安全设置
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mt-1">
                  <Key className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">登录密码</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">定期修改密码有助于保护您的账号安全。</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg text-sm font-medium text-gray-900 dark:text-white transition-colors">
                修改密码
              </button>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mt-1">
                  <Smartphone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">双重认证 (2FA)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">为您的账号增加一层额外的安全保护。</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-colors">
                开启认证
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mt-1">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">注销账号</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">永久删除您的账号及所有相关数据。</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors">
                注销账号
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyImagesPage = () => {
  const myImages = [
    {
      id: '6d9b0dfd-f77a-4a02-969e-270ed90a0dc4',
      shortId: '6d9b0dfd-f77a-...',
      name: '6d9b0dfd-f77a-4a02-969e-270ed90a0dc4',
      desc: '实例9QW2G585YZ14D8FX储存的镜像',
      original: {
        type: '社区',
        price: '¥ 0.30',
        link: '仙宫龙虾助手V1.0.3(openclaw)'
      },
      size: '158.96 GB',
      visibility: '私有',
      status: '可用',
      createdAt: '2026-04-02 10:00:52'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500 space-y-6">
      {/* Alerts */}
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
          <Gift className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <p className="text-sm text-green-100/80 leading-relaxed">
            镜像储存与云端储存空间单独计算，镜像优先计算免费储存，超过免费储存大小的部分以 <span className="underline font-medium text-green-400">¥0.00003 / GB / 小时</span> 的价格按需计费
          </p>
        </div>
        <div className="xl:w-1/3 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-100/80 leading-relaxed">
            账户欠费7天后，7天内未被使用过的镜像会被清理。
          </p>
        </div>
      </div>

      {/* Storage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Storage */}
        <div className="glass-panel neon-border rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
              <Gift className="w-4 h-4" /> 免费镜像储存
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">30 GB / 30 GB</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 w-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-12 text-right">100 %</span>
          </div>
        </div>

        {/* Paid Storage */}
        <div className="glass-panel neon-border rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
              <Database className="w-4 h-4" /> 按需付费镜像储存
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">128.96 GB / 4.97 TB</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 w-[2.53%] rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-12 text-right">2.53 %</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="glass-panel neon-border rounded-xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">镜像列表</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <thead className="text-xs text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
              <tr>
                <th className="px-6 py-4 font-medium">镜像ID</th>
                <th className="px-6 py-4 font-medium">镜像封面</th>
                <th className="px-6 py-4 font-medium">镜像名</th>
                <th className="px-6 py-4 font-medium">描述</th>
                <th className="px-6 py-4 font-medium">原始镜像</th>
                <th className="px-6 py-4 font-medium">镜像尺寸</th>
                <th className="px-6 py-4 font-medium">可见性</th>
                <th className="px-6 py-4 font-medium">状态</th>
                <th className="px-6 py-4 font-medium">创建时间</th>
                <th className="px-6 py-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {myImages.map((img, idx) => (
                <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-300">{img.shortId}</span>
                      <button className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 dark:text-gray-300 max-w-[150px] truncate" title={img.name}>{img.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-500 dark:text-gray-400 max-w-[200px] truncate" title={img.desc}>{img.desc}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-[10px]">社区</span>
                        <span className="px-1.5 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-[10px]">{img.original.price}</span>
                      </div>
                      <a href="#" className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors">
                        <ArrowUpRight className="w-3 h-3" /> {img.original.link}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{img.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {img.visibility}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {img.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 dark:text-gray-300">{img.createdAt.split(' ')[0]}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{img.createdAt.split(' ')[1]}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 rounded-lg text-xs text-gray-600 dark:text-gray-300 transition-colors">
                        操作 <ChevronDown className="w-3 h-3" />
                      </button>
                      <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors">
                        <Play className="w-3 h-3" /> 立即部署
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-black/10 dark:border-white/10 flex items-center justify-end gap-4 text-sm text-gray-500 dark:text-gray-400 bg-white/40 dark:bg-black/20">
          <span>共 1 条</span>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 flex items-center justify-center hover:text-gray-900 dark:hover:text-white disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-6 h-6 flex items-center justify-center text-cyan-400 font-medium">1</button>
            <button className="w-6 h-6 flex items-center justify-center hover:text-gray-900 dark:hover:text-white disabled:opacity-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-2 bg-white/60 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5 cursor-pointer hover:border-black/30 dark:hover:border-white/30 transition-colors">
            10 条/页 <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BANNERS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    title: '探索前沿 AI 模型',
    subtitle: '一键部署，开箱即用，加速您的 AI 创新之旅。',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    title: '高性能 GPU 算力',
    subtitle: '按需弹性伸缩，提供稳定可靠的计算资源。',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
    title: '预配置开发环境',
    subtitle: '内置常用框架与工具，省去繁琐的环境配置。',
  }
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-8 group">
      {BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-12">
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight transform translate-y-0 transition-transform duration-700">
              {banner.title}
            </h2>
            <p className="text-gray-300 text-sm max-w-md">
              {banner.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % BANNERS.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Modal State
  const [selectedImage, setSelectedImage] = useState<typeof MOCK_IMAGES[0] | null>(null);
  
  // Deploy State
  const [deployImage, setDeployImage] = useState<typeof MOCK_IMAGES[0] | null>(null);

  const handleDeploy = (img: typeof MOCK_IMAGES[0]) => {
    setDeployImage(img);
    setSelectedImage(null);
    setActiveMenu('deploy');
  };

  return (
    <div className="min-h-screen flex selection:bg-cyan-500/30 font-sans">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen relative">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <TopBar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          showUserMenu={showUserMenu} 
          setShowUserMenu={setShowUserMenu} 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        
        <div className="flex-1 p-8 z-0 w-full">
          {activeMenu === 'home' && (
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
              {/* Header section replaced by Banner Carousel */}
              <BannerCarousel />

              {/* Categories */}
              <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 neon-border ${
                      activeCategory === cat 
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                        : 'bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-transparent hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
                {MOCK_IMAGES.map((img) => (
                  <ImageCard key={img.id} data={img} onClick={() => setSelectedImage(img)} />
                ))}
              </div>
            </div>
          )}

          {activeMenu === 'images' && <MyImagesPage />}

          {activeMenu === 'instances' && <InstancesPage onDeployNew={() => setActiveMenu('deploy')} />}

          {activeMenu === 'deploy' && (
            <InstanceDeployPage 
              image={deployImage} 
              onBack={() => setActiveMenu('instances')} 
            />
          )}

          {activeMenu === 'storage' && <StoragePage />}
          {activeMenu === 'billing' && <BillingPage />}
          {activeMenu === 'account' && <AccountPage />}

        </div>
      </main>

      {/* Image Detail Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
        onDeploy={handleDeploy} 
      />
    </div>
  );
}
