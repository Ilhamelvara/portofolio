import { Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../../data/personal';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail,
};

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {personalData.socials.map((social) => {
        const IconComponent = iconMap[social.icon] || ExternalLink;
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={social.name}
            className="p-2.5 rounded-xl border border-theme bg-card hover:bg-card-hover hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 text-text-secondary group focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          >
            <IconComponent className={`${iconSize} transition-transform duration-200 group-hover:scale-110`} />
          </a>
        );
      })}
    </div>
  );
}
