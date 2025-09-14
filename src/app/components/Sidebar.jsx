"use client";
import Link from "next/link";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  const role = session?.user?.role;
  console.log(role);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start p-5 justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent shadow-none border-0 drawer-button lg:hidden"
          >
            <MdMenuOpen size={40} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <Link href="/" className="text-center py-5">
              Safa Art Gallery
            </Link>

            {role == "admin" ? (
              <>
                <li>
                  <Link href="/dashboard/addproduct"> Add Product</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
