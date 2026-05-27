"use client";
import { useRouter } from "next/navigation";

const a = "1";

export default function FuctionWOReturn() {
  const router = useRouter();

  function samp() {
    const fullpath = "/components";
    router.push(fullpath);
  }

  return<button onClick={samp}>gdfgd</button> ;
;
}
