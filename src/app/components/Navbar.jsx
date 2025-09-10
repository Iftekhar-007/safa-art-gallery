"use client";

import React, { useEffect, useState } from "react";
import { TbBrandCraft } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // route check
    if (pathname !== "/") {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar lg:w-9/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-sans"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutme">About Me</Link>
              </li>
              {session && ( // কেবল লগইন করলে Add Product দেখাবে
                <>
                  <li>
                    <Link href="/addproduct">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                </>
              )}
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>

          {/* Logo should be a Link instead of raw <a> */}
          <Link
            href="/"
            className="font-sans flex items-center gap-1 lg:font-bold lg:text-3xl"
          >
            <TbBrandCraft size={40} className="bg-red-600" />
            <span>Safa</span> Art Gallery
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-sans">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            {session && ( // কেবল লগইন করলে Add Product দেখাবে
              <>
                <li>
                  <Link href="/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <button
              onClick={() => signOut()}
              className="btn btn-outline font-sans text-white"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="btn btn-outline font-sans text-white"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
