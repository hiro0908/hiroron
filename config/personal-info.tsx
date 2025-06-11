import React from "react";
import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "坂本 利紘",
  title: "学生エンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "S T", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>学生エンジニアです。気の向くままにプログラミングを学んでいます</>,
      // <>現在は<strong className="text-foreground">React</strong>と<strong className="text-foreground">Next.js</strong>を中心としたモダンなフロントエンド技術を学習中。TypeScriptやTailwind CSSの良さを実感しながら、実際にプロジェクトを作って経験を積んでいます。</>,
      // <>「良いコードは読みやすいコード」を心がけ、Clean CodeやDesign Patternsを学習。将来的にはユーザーに価値を提供できるWebアプリケーションを開発したいと考えています。</>,
      // <>毎日のコミットとQiitaでの学習記録を継続し、プログラミングコミュニティの一員として成長していきたいです。</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "python", icon: <FaPython className="w-3 h-3 mr-1" /> },

  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Painting",
      description: "たまにイラスト描きます...継続して描けるようになりたい",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["drow", "expression"]
    },
    {
      title: "Singing",
      description: "一人で行ってもよし、人と行くのはもっと楽しい",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["chat", "Sing"]
    },    
    {
      title: "Music",
      description: "アニソンメインに聞きます",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["listen"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "プログラミングやWeb開発について学習中。特にフロントエンド技術に興味を持って取り組んでいます。授業以外でも自主的に様々な技術を学び、実際にプロジェクトを作りながらスキルを向上させています。",
      badges: ["コンピュータサイエンス学科", "人工知能専攻"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "桐生高等学校",
      description: "アニメーション研究会に所属し、メンバーと意見交換しながら取り組んだ",
      badges: ["イラスト"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/hiro0908", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/tut_hiro0809", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },

    {
        platform: "Zenn",
        url: "https://zenn.dev/yourusername", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 