// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// ニュース記事の型定義
export type NewsItem = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  category?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

// ニュース一覧を取得
export const getNewsList = async (): Promise<NewsItem[]> => {
  try {
    const data = await client.get({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt', // 新しい順で並び替え
      },
    });
    return data.contents;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

// ニュースの詳細を取得
export const getNewsDetail = async (id: string): Promise<NewsItem | null> => {
  try {
    const data = await client.get({
      endpoint: 'news',
      contentId: id,
    });
    return data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    return null;
  }
};