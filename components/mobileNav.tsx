import { PageLink } from "./container";

export default function MobileNav({ links, onClick }: { links: PageLink[]; onClick: (page: PageLink) => void }) {
  return (
    <div>
      <p className="border-b  border-themeStroke p-4"># navigate:</p>
      <ul>
        {links.map((link) => (
          <li key={link.url} className="text-white p-4 border-b border-themeStroke cursor-pointer" onClick={() => onClick(link)}>
              {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
