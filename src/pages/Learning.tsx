import React, { useState } from 'react';
import { BookOpen, Play, Clock, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { videoCategories } from '../data/videos';
import type { Video } from '../types';

export default function Learning() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = selectedCategoryId 
    ? videoCategories.find(c => c.id === selectedCategoryId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Video Pembelajaran
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Pelajari konsep matematika melalui video pembelajaran yang interaktif
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {selectedVideo ? (
            // Video Player View
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Back Button */}
              <div className="p-4 border-b">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  <span className="text-sm sm:text-base">Kembali ke Daftar Video</span>
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">{selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          ) : selectedCategory ? (
            // Video List View
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Back Button */}
              <div className="p-4 border-b">
                <button
                  onClick={() => setSelectedCategoryId(null)}
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  <span className="text-sm sm:text-base">Kembali ke Kategori</span>
                </button>
              </div>

              {/* Category Info */}
              <div className="p-4 sm:p-6 border-b">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Video List */}
              <div className="divide-y">
                {selectedCategory.videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="w-full p-4 sm:p-6 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                      <div className="w-full sm:w-48 aspect-video rounded-lg overflow-hidden relative group mb-4 sm:mb-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-2">
                          {video.description}
                        </p>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Category Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {videoCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={category.thumbnail}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
                      <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-indigo-600">
                      <span className="text-sm sm:text-base font-semibold mr-2">
                        {category.videos.length} Video
                      </span>
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}