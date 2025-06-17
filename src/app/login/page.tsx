"use client"

import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const handleGoToAbout = () => {
    router.push("/about")
  }

  return (
    <>
      로그인 페이지
      <div>
        <button onClick={handleGoToAbout}>goto about</button>
      </div>
    </>
  );
}