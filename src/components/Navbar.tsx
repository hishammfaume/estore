import React from "react";
import MaxwidthWrapper from "./MaxwidthWrapper";
import Link from "next/link";
import { icons } from "./icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { Span } from "next/dist/trace";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white-300">
        <MaxwidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: mobile nav */}

              <div className="ml-4 flex lg:ml-9">
                <Link href="/">
                  <icons.logo className="logo" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:fle-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={"/sign-in"}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      Sign In
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href={"/sign-up"}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    > Create Account</Link>
                  )}

                  {user ? ( <span className="h-6 w-px bg-gray-200" aria-hidden="true" />):
                  null
                  }
                  {user? null : (<div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>)}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxwidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
