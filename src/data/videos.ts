import { VideoCategory } from '../types';

export const videoCategories: VideoCategory[] = [
  {
    id: 'Perbandingan',
    title: 'Perbandingan',
    description: 'Pelajari konsep dasar aljabar, persamaan, dan pemecahan masalah',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=450',
    videos: [
      {
        id: 1,
        title: 'Perbandingan Senilai part 1',
        description: 'Memahami konsep perbandingan senilai dan penggunaannya',
        driveId: '1p3rCrYLtt2dH4R3kGgiUbcpZBM-sQ6ZL', // Replace with actual Google Drive file ID
        thumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800&h=450',
        duration: '12:39'
      },
      {
        id: 2,
        title: 'Persamaan Senilai part 2',
        description: 'Memahami konsep perbandingan senilai dan penggunaannya',
        driveId: '1HN_FD342LM1Z12oTARuWB6SjmAaUK57A', // Replace with actual Google Drive file ID
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=450',
        duration: '36:39'
      },
      {
        id: 3,
        title: 'Persamaan Berbalik Nilai',
        description: 'Memahami konsep perbandingan berbalik nilai dan penggunaannya',
        driveId: '1HN_FD342LM1Z12oTARuWB6SjmAaUK57A', // Replace with actual Google Drive file ID
        thumbnail: 'https://images.unsplash.com/photo-1637419450536-378d5457abb8?auto=format&fit=crop&q=80&w=800&h=450',
        duration: '12:30'
      }
    ]
  },
];
