import React, { useState } from 'react';
import { ChevronLeft, User, Download, Heart, Play, Box, HardDrive, Cpu, MapPin, CreditCard, Server } from 'lucide-react';

export const ImageDetailPage = ({ image, onBack, onDeploy }: any) => {
  const [billingMode, setBillingMode] = useState('按量计费');
  const [region, setRegion] = useState('华北-北京');
  const [gpuModel, setGpuModel] = useState('NVIDIA RTX 4090');
  const [gpuCount, setGpuCount] = useState('1卡');
  const [sysDisk, setSysDisk] = useState('50');
  const [dataDisk, setDataDisk] = useState('0');

  if (!image) return null;

  return (
    <div className="animate-in fade-in duration-500 flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] overflow-hidden">
      {/* Middle Column: Image Details (Scrollable) */}
      <div className="flex-1 flex flex-col bg-white/40 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center gap-4 bg-white/60 dark:bg-black/40 sticky top-0 z-10 backdrop-blur-md">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{image.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <User className="w-4 h-4" /> {image.author}
              </div>
              <div className="flex gap-2">
                {image.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-medium text-cyan-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* Introduction */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Box className="w-5 h-5 text-cyan-500" /> 镜像介绍
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {image.description}
              此镜像经过深度优化，内置了常用的依赖库和工具链，旨在为您提供开箱即用的极致体验。无论是用于开发测试还是生产环境，都能保证极高的稳定性和运行效率。
            </p>
          </section>

          {/* Image Showcase (Vertical Scroll) */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">界面预览</h3>
            <div className="space-y-4">
              <div className={`w-full h-64 md:h-96 rounded-xl bg-gradient-to-br ${image.gradient} flex items-center justify-center overflow-hidden relative shadow-lg`}>
                 <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
                 <Play className="w-16 h-16 text-white/80" />
              </div>
              <div className={`w-full h-64 md:h-96 rounded-xl bg-gradient-to-tr ${image.gradient} flex items-center justify-center overflow-hidden relative shadow-lg opacity-80`}>
                 <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
                 <span className="text-white/60 font-medium text-xl">预览图 2</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right Column: Deployment Configuration */}
      <div className="w-full lg:w-[400px] flex-shrink-0 bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-y-auto custom-scrollbar flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white tracking-tight">实例配置</h2>
        </div>
        
        <div className="p-6 space-y-6 flex-1">
          {/* Selected Image */}
          <div className="bg-[#252015] border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Box className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p className="text-xs text-orange-500/80 mb-1">已选镜像</p>
                <p className="text-base font-bold text-white mb-1">{image.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{image.description}</p>
              </div>
            </div>
          </div>

          {/* Billing Mode */}
          <div>
            <p className="text-sm text-gray-400 mb-3">计费方式</p>
            <div className="grid grid-cols-3 gap-3">
              {['按量计费', '包月计费', '包日计费'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setBillingMode(mode)}
                  className={`py-2 rounded-lg text-sm transition-colors ${
                    billingMode === mode 
                      ? 'bg-[#3a2810] text-orange-500 border border-orange-500/50' 
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <p className="text-sm text-gray-400 mb-3">区域</p>
            <div className="grid grid-cols-2 gap-3">
              {['华北-北京', '华东-上海', '华南-广州', '亚太-新加坡'].map(r => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`py-2 rounded-lg text-sm transition-colors ${
                    region === r 
                      ? 'bg-[#3a2810] text-orange-500 border border-orange-500/50' 
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* GPU Model */}
          <div>
            <p className="text-sm text-gray-400 mb-3">GPU 型号</p>
            <div className="space-y-3">
              {['NVIDIA A100 80GB', 'NVIDIA H100 80GB', 'NVIDIA RTX 4090', 'NVIDIA L40S'].map(gpu => (
                <button
                  key={gpu}
                  onClick={() => setGpuModel(gpu)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    gpuModel === gpu 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4" />
                    <span className="text-sm">{gpu}</span>
                  </div>
                  <span className="text-xs text-gray-500">可用</span>
                </button>
              ))}
            </div>
          </div>

          {/* GPU Count */}
          <div>
            <p className="text-sm text-gray-400 mb-3">实例配置 (GPU 数量)</p>
            <div className="grid grid-cols-4 gap-3">
              {['1卡', '2卡', '4卡', '8卡'].map(count => (
                <button
                  key={count}
                  onClick={() => setGpuCount(count)}
                  className={`py-2 rounded-lg text-sm transition-colors ${
                    gpuCount === count 
                      ? 'bg-[#3a2810] text-orange-500 border border-orange-500/50' 
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Disks */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400 mb-3">系统盘</p>
              <div className="relative">
                <input 
                  type="text" 
                  value={sysDisk}
                  onChange={(e) => setSysDisk(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-4 pr-10 text-white focus:outline-none focus:border-orange-500/50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">GB</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-3">数据盘</p>
              <div className="relative">
                <input 
                  type="text" 
                  value={dataDisk}
                  onChange={(e) => setDataDisk(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-4 pr-10 text-white focus:outline-none focus:border-orange-500/50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Deploy */}
        <div className="p-6 border-t border-white/10 bg-[#1a1a1a] mt-auto">
          <div className="flex items-end justify-between mb-4">
            <span className="text-sm text-gray-400">预计费用</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-orange-500">$3.50</span>
              <span className="text-sm text-gray-500">/小时</span>
            </div>
          </div>
          <button 
            onClick={() => onDeploy(image)}
            className="w-full py-3 bg-[#f58220] hover:bg-[#e07010] text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Server className="w-5 h-5" /> 快速部署
          </button>
        </div>
      </div>
    </div>
  );
};
