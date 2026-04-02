import React, { useState } from 'react';
import { ChevronLeft, Play, Square, RotateCw, Trash2, Terminal, ExternalLink, HardDrive, Cpu, MemoryStick, Clock, DollarSign, Calendar, Box, Activity } from 'lucide-react';

export const InstanceDetailPage = ({ instance, onBack }: any) => {
  const [activeTab, setActiveTab] = useState('GPU');

  if (!instance) return null;

  return (
    <div className="flex-1 p-8 z-0 w-full animate-in fade-in duration-500 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{instance.name}</h1>
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                instance.status === '运行中' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                instance.status === '已停止' ? 'bg-gray-500/10 text-gray-500 border-gray-500/20' :
                'bg-blue-500/10 text-blue-500 border-blue-500/20'
              }`}>
                {instance.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{instance.id}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2">
            <ExternalLink className="w-4 h-4" /> JupyterLab
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2">
            <RotateCw className="w-4 h-4" /> 重启
          </button>
          <button className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-sm text-yellow-500 hover:bg-yellow-500/20 transition-colors flex items-center gap-2">
            <Square className="w-4 h-4" /> 停止
          </button>
          <button className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-2">
            <Trash2 className="w-4 h-4" /> 销毁
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Box className="w-5 h-5 text-gray-400" /> 基本信息
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">镜像</span>
                <span className="text-white">{instance.image}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">创建时间</span>
                <span className="text-white">{instance.createdAt}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">运行时长</span>
                <span className="text-white">{instance.uptime}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">累计费用</span>
                <span className="text-orange-500 font-medium">{instance.cost}</span>
              </div>
            </div>
          </div>

          {/* Hardware Config */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-gray-400" /> 硬件配置
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">GPU</span>
                <span className="text-white">{instance.gpu}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">CPU</span>
                <span className="text-white">{instance.cpu}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">内存</span>
                <span className="text-white">{instance.memory}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">系统盘</span>
                <span className="text-white">{instance.disk}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Connection Info */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-gray-400" /> 连接信息
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <Terminal className="w-4 h-4" /> SSH 连接
                </div>
                <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-yellow-500 mb-2">
                  {instance.sshCommand}
                </div>
                <p className="text-xs text-gray-500">密码为您在个人设置中配置的 SSH 密码或密钥。</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <ExternalLink className="w-4 h-4" /> JupyterLab
                </div>
                <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-yellow-500 mb-4">
                  {instance.jupyterUrl}
                </div>
                <button className="mt-auto w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors">
                  在浏览器中打开
                </button>
              </div>
            </div>
          </div>

          {/* Resource Monitoring */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-gray-400" /> 资源监控
              </h3>
              <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                {['GPU', 'CPU', '内存'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-sm transition-colors ${
                      activeTab === tab ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mock Chart Area */}
            <div className="h-64 w-full relative flex items-end">
              {/* Y Axis */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              {/* X Axis */}
              <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-500">
                <span>10:00</span>
                <span>10:05</span>
                <span>10:10</span>
                <span>10:15</span>
                <span>10:20</span>
                <span>10:25</span>
                <span>10:30</span>
              </div>

              {/* Grid Lines */}
              <div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full border-t border-white/5"></div>
                ))}
              </div>

              {/* Mock Area Chart */}
              <div className="absolute left-10 right-0 top-0 bottom-8 overflow-hidden">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,50 Q20,20 40,10 T80,80 T100,10 L100,100 L0,100 Z" 
                    fill="url(#gradient)" 
                  />
                  <path 
                    d="M0,50 Q20,20 40,10 T80,80 T100,10" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
