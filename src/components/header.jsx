import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <nav>
        <Link href={'/'}>
        <Image src={'/logo.png'} width={200} height={200} alt="
        seensai logo" className="h-12 py-1 w-auto object-contain"/>
        </Link>

        <SignedIn>
          <h2>hello</h2>
        </SignedIn>
      </nav>

     <div className="flex gap-4 items-center">
     <SignedOut>
        <SignInButton />
        <SignUpButton />
        <UserButton />
      </SignedOut>
     </div>
    </header>
  );
};

export default header;
