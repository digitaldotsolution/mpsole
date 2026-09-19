"use client"
import React from 'react'
import menu_data from './menu_data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ScrollSmoother } from '@/plugins'

export default function NavMenu() {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.includes("#")) {
      const hash = link.substring(link.indexOf("#"));
      if (pathname === "/" || link.startsWith("/#")) {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(hash, true, "top 80px");
        } else {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  };

  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "has-dropdown"}`}>
            <Link 
              href={item.link}
              onClick={(e) => handleLinkClick(e, item.link)}
            >
              {item.title}
            </Link>
            {item.has_dropdown &&
              <ul className="sub-menu">
                {item.sub_menus?.map((sub_menu, index) => (
                  <li key={index}>
                    <Link 
                      href={sub_menu.link}
                      onClick={(e) => handleLinkClick(e, sub_menu.link)}
                    >
                      {sub_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))} 
      </ul>
    </>
  )
}
