import { BrandIconType } from '@/components/ui/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/java',
    iconType: 'Java',
    slug: 'java',
    title: 'Java',
  },
  {
    href: '/tags/python',
    iconType: 'Python',
    slug: 'python',
    title: 'Python',
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'JS',
  },
  {
    href: '/tags/nodejs',
    iconType: 'Node',
    slug: 'nodejs',
    title: 'Node.js',
  },
  {
    href: '/tags/git',
    iconType: 'Git',
    slug: 'git',
    title: 'Git',
  },
];

export default popularTags;
